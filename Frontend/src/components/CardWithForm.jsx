import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useCart } from "@/context/CartContext";

const cards = [
  {
    id:1,
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-06-free-img.png",
    title:"Chicken Burger",
    price:4.50
  },
  {
    id:2,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-02-free-img.png",
    title:"Fatboy Burger",
    price:3.25
  },
  {
    id:3,
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-03-free-img.png",
    title:"Classic Smash",
    price:4.00
  },
  {
    id:4,
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-05-free-img.png",
    title:"Burger Nine",
    price:5.15
  },
  {
    id:5,
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-07-free-img.png",
    title:"Beef Burger",
    price:2.95
  },
  {
    id:6,
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-04-free-img.png",
    title:"Bacon Burger",
    price:3.50
  },
]
export function CardWithForm() {
  const { addToCart } = useCart();
  return (
    <div className=" grid grid-rows-6 sm:grid-rows-6 md:grid-rows-3 lg:grid-rows-2 grid-flow-col justify-center xl:justify-around   p-10 w-full ">
          {cards.map((items) => (
    <Card key={items.id && items.price } className="w-[340px]  bg-white   text-slate-900 mb-8 rounded-2xl transition duration-700 ease-in-out hover:bg-green-200 transform hover:-translate-y-1 hover:scale-110 hover:border-green-200">

        <CardContent>
          <img src={items.images} alt="" className="size-min" />
      </CardContent>
      <CardHeader className="mt-0"> 
        <CardTitle className='text-center '>{items.title} </CardTitle>
        <CardDescription className="text-xs text-center lg:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo nam minus labore facere commodi cumque. Fuga, esse! </CardDescription>
      </CardHeader>
    
      <CardFooter className="flex justify-around ">
      <CardTitle className='text-center text-lg lg:text-2xl xl:text-2xl text-rose-500 w-5  ml-0  xl:ml-1 xl:mr-7 md:ml-3 lg:ml-3'>${items.price} </CardTitle>
       <Button  variant="outline" className="bg-green-500 rounded-2xl border-green-500 " onClick={() => addToCart(items)}>ADD TO CART</Button>
      </CardFooter>
    </Card>
      ))}
        </div>
  )
}
