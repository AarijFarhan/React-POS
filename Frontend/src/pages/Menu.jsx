
import { CardWithForm } from '@/components/CardWithForm'
import React from 'react'

function Menu() {
  return (
      <>
    <div className='bg-green-500 text-white h-96 font-extrabold flex flex-col justify-center  items-center'> 
     <h3 className='text-xl italic font-mono'>Check Out Our</h3>
     <h1 className='text-9xl pt-36'>M  E  N  U</h1>
    </div>
    <div className='bg-slate-100 text-slate-900 text-xl  h-fit font-extrabold flex flex-col justify-center py-10  items-center'>
        <h1 >MAIN COURSE</h1>
        <CardWithForm />     
    </div>
    </>
  )
}

export default Menu
