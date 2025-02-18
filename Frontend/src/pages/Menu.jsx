
import { CardWithForm } from '@/components/CardWithForm'
import Starter from '@/components/Starter'
import React from 'react'

function Menu() {
  return (
      <div className=''>
    <div className='bg-green-500 text-white h-96 font-extrabold flex flex-col  justify-center  items-center'> 
     <h3 className='text-xl italic font-mono'>Check Out Our</h3>
     <h1 className='xl:text-9xl lg:text-9xl md:text-9xl sm:text-9xl text-6xl pt-36 gap-4 '>M  E  N  U</h1>
    </div>
    <div className='bg-slate-50 text-slate-900 text-xl  h-fit font-extrabold flex flex-col justify-center py-10  items-center'>
        <h1 >MAIN COURSE</h1>
        <CardWithForm />     
    </div>
    <div className='bg-slate-100 text-slate-900 text-xl  h-fit font-extrabold flex flex-col justify-center py-10  items-center'>
        <h1 >STARTER</h1>
        <Starter />   
    </div>
    </div>
  )
}

export default Menu
