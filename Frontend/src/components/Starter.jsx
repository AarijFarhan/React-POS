import React from 'react'
import { Card } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { useCart } from "@/context/CartContext";
  

    const sta_data = [
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-01-free-img.jpg",
            title:"BN Famous Fries",
            description:"Crispy Fries, Salt, Butter, Cheese, Spices",
            price:2.00
       },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-03-free-img.jpg",
            title:"Crispy Chicken Sandwich",
            description:"Chicken Breast, Tomatoes, Cheese, Iceberg Salad",
            price:2.50
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-09-free-img.jpg",
            title:"4 Pieces Chicken Wings",
            description:"Deep Fried Chicken Wings",
            price:2.50
        },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-04-free-img.jpg",
            title:"The Spring Salad",
            description:"Tomatoes, Cucumber, Black Beans, Olives, Salad, Cheese",
            price:3.00
       },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-02-free-img.jpg",
            title:"Potato Wedges",
            description:"Crispy Garlic Baked Potato Wedges, Cheese, Salt",
            price:2.00
       },
        {
            images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-08-free-img.jpg",
            title:"Chicken Salad",
            description:"Chicken Meat, Spacial Gravy, Fresh Bread",
            price:2.00
       }
    ]
    function Starter() {
const { addToCart } = useCart();
  return (
    <>
    
        <h1 className=' font-bold'> STARTER</h1>
        <div className='grid  grid-rows-3 sm:grid-rows-6 sm:grid-flow-col  md:grid-rows-6 lg:grid-rows-3 xl:grid-rows-3  w-full '>
            {sta_data.map((items) => (
    <Card className='bg-white    flex flex-col  xl:flex-row lg:flex-row md:flex-row justify-center xl:justify-between lg:justify-between md:justify-between rounded-xl m-5 border-0 p-4 ' key={items.title} > 
       <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row  items-center xl:items-start  '>
    
            <img src={items.images} className='size-fit rounded-full'/> 
            <div className='ml-4' >
            <h1 className=' font-bold text-lg lg:text-2xl xl:text-2xl xl:text-start lg:text-start md:text-start text-center'>{items.title}</h1>
        <p className=' text-slate-700 text-sm lg:text-lg xl:text-xl xl:text-start lg-text-start md:text-start text-center '>{items.description}</p>
            </div>
       </div>
       <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row items-center xl:items-between lg:items-between md:items-between justify-center xl:justify-between lg:justify-between md:justify-between '>
     
          <Button  variant="outline" className="mt-2 font-bold text-white bg-green-500 rounded-2xl border-green-500 text-xs lg:text-sm md:text-sm xl:text-sm size-auto"  onClick={() => addToCart(items)}  >ADD TO CART</Button>
          
          
          <h5 className=' font-bold text-lg lg:text-2xl xl:text-2xl text-red-600 w-5  ml-0  xl:ml-1 xl:mr-7 md:ml-3 lg:ml-3 m'>${items.price}</h5>
          </div>
    </Card>
    ))
}

    
       </div>
       </>
  )
}

export default Starter
