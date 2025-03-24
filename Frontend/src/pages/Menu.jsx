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
    <div >
<div className="relative h-64 flex justify-center items-center text-center bg-black tracking-widest">
  {/* Background Image */}
  <img src="./banner.jpg" alt="Background" className="absolute inset-0 w-full h-full opacity-90" style={{ objectFit: 'cover', backgroundRepeat: 'repeat' }} />
  <h1 className="relative text-white text-5xl font-bold bg-transparent"> Menu </h1>
</div>



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