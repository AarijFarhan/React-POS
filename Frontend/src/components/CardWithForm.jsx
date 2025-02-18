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
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
const cards = [
  {
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-06-free-img.png",
    name:"Chicken Burger"
  },
  {
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-02-free-img.png",
    name:"Fatboy Burger"
  },
  {
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-03-free-img.png",
    name:"Classic Smash"
  },
  {
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-05-free-img.png",
    name:"Burger Nine"
  },
  {
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-07-free-img.png",
    name:"Beef Burger"
  },
  {
    images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-04-free-img.png",
    name:"Bacon Burger"
  },
]
export function CardWithForm() {
  return (
    <div className=" grid grid-rows-6 sm:grid-rows-6 md:grid-rows-3 lg:grid-rows-2 grid-flow-col justify-around  p-10 w-full ">
          {cards.map((element) => (
    <Card className="w-[350px] bg-white  text-slate-900 mb-4 rounded-2xl transition duration-700 ease-in-out hover:bg-green-200 transform hover:-translate-y-1 hover:scale-110 hover:border-green-200">

        <CardContent>
          <img src={element.images} alt="" />
      </CardContent>
      <CardHeader>
        <CardTitle className='text-center'>{element.name} </CardTitle>
        <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo nam minus labore facere commodi cumque. Fuga, esse! Ea voluptate quos illum iure optio quis enim laudantium saepe earum minima?</CardDescription>
      </CardHeader>
    
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="bg-green-500 rounded-2xl border-green-500  ">ADD TO CART</Button>
        <Button>BUY NOW</Button>
      </CardFooter>
    </Card>
      ))}
        </div>
  )
}
