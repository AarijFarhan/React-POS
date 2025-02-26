import React from 'react'
import {
  Card,
 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {NavLink} from 'react-router-dom'
function Cart() {
  
  return (
    <div className='w-full h-screen flex  justify-center items-center bg-green-200'>
       <Card className='w-[850px] flex flex-col  xl:flex-row lg:flex-row md:flex-row  xl:justify-around lg:justify-around md:justify-between rounded-xl m-5 border-0 p-4 '  > 
       <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row  items-center xl:items-start  '>
    
            <img src="https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-06-free-img.png" className='bg-black size-16 rounded-xl'/> 
            <div className='ml-4' >
            <h1 className='text-lg lg:text-2xl xl:text-2xl xl:text-start lg:text-start md:text-start text-center '>HEELLO</h1>
            </div>
       </div>
       <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row items-center xl:items-between lg:items-between md:items-between justify-center xl:justify-between lg:justify-between md:justify-between '>
       <NavLink to="/cart">
          <Button  variant="outline" className="bg-green-500 rounded-2xl border-green-500 text-xs lg:text-sm md:text-sm xl:text-sm size-auto"    >ADD TO CART</Button>
          </NavLink>
          
          <h5 className='text-lg lg:text-2xl xl:text-2xl text-rose-500 w-5  ml-0  xl:ml-1 xl:mr-7 md:ml-3 lg:ml-3 m'>4$</h5>
          </div>
    </Card>
    </div>
  )
}

export default Cart
