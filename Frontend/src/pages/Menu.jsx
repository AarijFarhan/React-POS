
import React, { useState } from 'react';
import { CardWithForm } from '@/components/CardWithForm'
import Starter from '@/components/Starter';
import Sweets from '@/components/Sweets'
function Menu() {
  const [showDesert, setShowDessert] = useState(false);

  const handleToggle = () => {
    setShowDessert(!showDesert);
  };
  return (
      <div className=''>
    <div className='bg-green-500 text-white h-96 font-extrabold flex flex-col  justify-center  items-center'> 
     <h3 className='text-xl italic font-mono'>Check Out Our</h3>
     <h1 className='xl:text-9xl lg:text-9xl md:text-9xl sm:text-9xl text-6xl pt-28 xl:pt-36 gap-4 '>M  E  N  U</h1>
    </div>
    <div className='bg-slate-50 text-slate-900 text-xl  h-fit font-extrabold flex flex-col justify-center py-10  items-center'>
        <h1 >MAIN COURSE</h1>
        <CardWithForm addToCart={addToCart}  />     
    </div>
    <div className='bg-slate-100 text-slate-900 text-xl  h-fit font-extrabold flex flex-col justify-center py-10  items-center'>
        <button type="click" checked={showDesert} onClick={handleToggle} variant="outline" className="bg-green-500 px-6 py-3 rounded-3xl mt-3 mb-5  border-black transition duration-700 ease-in-out hover:bg-green-200 transform hover:-translate-y-1 hover:scale-110 hover:border-green-200"><h1 >STARTERS & DESSERTS</h1></button> 
      {showDesert ? <Sweets /> : <Starter />}
    </div>
    </div>
  )
}
export default Menu
