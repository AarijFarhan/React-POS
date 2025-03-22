import React, { useState } from 'react';
import { CardWithForm } from '@/components/CardWithForm'
import Starter from '@/components/Starter';
import Sweets from '@/components/Sweets'
import { useCart } from '@/context/CartContext';




function Menu() {
  const [showDesert, setShowDessert] = useState(false);
  const { addToCart } = useCart(); 

  const handleToggle = () => {
    setShowDessert(!showDesert);
  };


  return (
    <div className=' '   >
        <div className="bg-[url(./banner.jpg)] text-center items-center h-64 flex justify-center opacity-95 bg-black tracking-widest">
        <h1 className="text-white brightness-[100px] text-5xl bg-transparent font-bold">Menu</h1>
      </div>
      {/* <div className=' bg-[url(banner.jpg)] text-center   opacity-95 bg-black tracking-widest text-white h-96 font-extrabold flex flex-col  justify-center  items-center'> 
        <h1 className='text-4xl font- italic font-mono '>Check Out Our</h1>
        <h1 className='xl:text-9xl lg:text-9xl md:text-9xl sm:text-9xl text-6xl pt-28 xl:pt-36 gap-4 '>M  E  N  U</h1>
      </div> */}
      <div className='bg-slate-50 text-slate-900 text-xl  h-fit font-extrabold flex flex-col justify-center py-10  items-center'>
        <h1 className='text-red-600'>MAIN COURSE</h1>

       
        <CardWithForm addToCart={addToCart} />     
      </div>
      <div className='bg-slate-50 text-slate-900 text-xl  h-fit  flex flex-col justify-center py-10  items-center'>
        <button type="click" checked={showDesert} onClick={handleToggle} variant="outline" className=" text-white bg-red-500 px-6 py-3 rounded-3xl mt-3 mb-5  border-black transition duration-700 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 hover:border-red-600">
          <h1 className='font-bold'>View Starters or Desserts</h1>
        </button> 
        {showDesert ? <Sweets /> : <Starter />}
      </div>
    </div>
  )
}
export default Menu;