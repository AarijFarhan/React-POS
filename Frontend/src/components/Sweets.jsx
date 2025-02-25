import React from 'react'
import {
    Card,
   
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"

  import {NavLink} from 'react-router-dom'
import Cart from '@/pages/Cart'
  function Sweets() {
    const sweets_data = [
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-05-free-img.jpg",
            title:"Baked Apple Pie",
            description:"Our special homemade apple pie",
            price:"$2.5"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-11-free-img.jpg",
            title:"Vanilla Ice Cream",
            description:"Our special homemade apple pie",
            price:"$1"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-06-free-img.jpg",
            title:"Chocolate Chip Cookie",
            description:"Chocolate Chip Cookie Lorem Ipsum Dolor",
            price:"$1.5"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-12-free-img.jpg",
            title:"Strawberry Shake",
            description:"Whipped Cream, Milk, Strawberry Flavours",
            price:"$2"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-10-free-img.jpg",
            title:"Hot Caramel Shake",
            description:"Caramel, Whipped Cream, Milk, Chocolate",
            price:"$2"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-07-free-img.jpg",
            title:"Classic Fruit Tart",
            description:"Apple, Strawberry, Orange, Banana, Raspberry",
            price:"$1.5"
        },
    ]
  return (
    <>
    
        <h1> DESSERTS</h1>
        <div className='grid  grid-rows-3 sm:grid-rows-6 sm:grid-flow-col  md:grid-rows-6 lg:grid-rows-3 xl:grid-rows-3  w-full '>
            {sweets_data.map((input) => (
    <Card className='flex flex-col  xl:flex-row lg:flex-row md:flex-row justify-center xl:justify-between lg:justify-between md:justify-between rounded-xl m-5 border-0 p-4 ' key={input.title} > 
       <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row  items-center xl:items-start  '>
    
            <img src={input.images} className='size-fit rounded-full'/> 
            <div className='ml-4' >
            <h1 className='text-lg lg:text-2xl xl:text-2xl xl:text-start lg:text-start md:text-start text-center'>{input.title}</h1>
        <p className='text-slate-700 text-sm lg:text-lg xl:text-lg xl:text-start lg-text-start md:text-start text-center '>{input.description}</p>
            </div>
       </div>
       <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row items-center xl:items-between lg:items-between md:items-between justify-center xl:justify-between lg:justify-between md:justify-between '>
       <NavLink to="/cart">
          <Button  variant="outline" className="bg-green-500 rounded-2xl border-green-500 text-xs lg:text-sm md:text-sm xl:text-sm size-auto"    >ADD TO CART</Button>
          </NavLink>
          
          <h5 className='text-lg lg:text-2xl xl:text-2xl text-rose-500 w-5  ml-0 xl:ml-3 md:ml-3 lg:ml-3 m'>{input.price}</h5>
          </div>
    </Card>
    ))
}

    
       </div>
       </>
  )
}

export default Sweets
