import React from 'react'
import {
    Card,
   
  } from "@/components/ui/card"
  import { Switch } from "@/components/ui/switch"




function Starter() {
    const sta_data = [
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-01-free-img.jpg",
            title:"BN Famous Fries",
            description:"Crispy Fries, Salt, Butter, Cheese, Spices",
            price:"$2"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-03-free-img.jpg",
            title:"Crispy Chicken Sandwich",
            description:"Chicken Breast, Tomatoes, Cheese, Iceberg Salad",
            price:"$2.5"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-09-free-img.jpg",
            title:"4 Pieces Chicken Wings",
            description:"Deep Fried Chicken Wings",
            price:"$2.5"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-04-free-img.jpg",
            title:"The Spring Salad",
            description:"Tomatoes, Cucumber, Black Beans, Olives, Salad, Cheese",
            price:"$3"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-02-free-img.jpg",
            title:"Potato Wedges",
            description:"Crispy Garlic Baked Potato Wedges, Cheese, Salt",
            price:"$2"
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-08-free-img.jpg",
            title:"Chicken Salad",
            description:"Chicken Meat, Spacial Gravy, Fresh Bread",
            price:"$2"
        }
    ]
  return (
    <>
<Switch id="airplane-mode" className="bg-white" />

    <div className='grid  grid-rows-3 sm:grid-rows-6 sm:grid-flow-col  md:grid-rows-6 lg:grid-rows-3 xl:grid-rows-3  w-full '>
        {sta_data.map((input) => (
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

export default Starter
