import React from 'react'
import {
    Card,
   
  } from "@/components/ui/card"
  import { Switch } from "@/components/ui/switch"

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
    
        <div className='grid  grid-rows-3 sm:grid-rows-6 sm:grid-flow-col  md:grid-rows-6 lg:grid-rows-3 xl:grid-rows-3  w-full '>
            {sweets_data.map((input) => (
    <Card className='grid   grid-flow-col justify-between  rounded-xl m-5 border-0 p-4 ' key={input.title} > 
       <div className='flex flex-row sm:flex-flow-col '>
    
            <img src={input.images} className='size-fit rounded-full'/> 
            <div className='ml-4' >
            <h1>{input.title}</h1>
        <p className='text-slate-700 text-lg '>{input.description}</p>
            </div>
       </div>
       <h5 className='text-rose-500'>{input.price}</h5>
    
    </Card>
    ))
    }
    
       </div>
       </>
  )
}

export default Sweets
