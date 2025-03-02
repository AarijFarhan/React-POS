import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity,calculateTotal, removeFromCart } = useCart();

  return (
    <div className="flex justify-center items-center h-fit bg-green-100">
    <div className="p-6 h-full bg-green-100 ">

      {cart.length === 0 ? (
      <div className="h-screen"><h1 className="text-2xl font-bold text-center ">Shopping Cart</h1>
        <p className="mt-4 text-center">Your cart is empty.</p>
        </div>
      ) 
      : (
        <div className="h-fit"><h1 className="text-2xl font-bold text-center ">Shopping Cart</h1>
        <div className="mt-6 space-y-4 h-fit  flex flex-col justify-center items-center  bg-green-100">
          {cart.map((item) => (
            <div key={item.title} className="flex items-center justify-between border p-4 rounded-lg">
              {/* Product Image & Details */}
              <div className="flex items-center">
                <img src={item.images} alt={item.title} className="w-16 h-16 rounded-lg mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-5 ">
                <Button onClick={() => decreaseQuantity(item.title)} className="hover:text-white rounded-full font-bold hover:rounded-full hover:bg-slate-800">-</Button>
                <span className="text-lg font-bold ">{item.quantity}</span>
                <Button onClick={() => increaseQuantity(item.title)} className="hover:text-white rounded-full font-bold hover:rounded-full hover:bg-slate-800">+</Button>
              </div>

              <Button onClick={() => removeFromCart(item.title)} className="bg-red-500 hover:bg-rose-950 hover:text-white rounded-xl">
                Remove
              </Button>
            </div>
            
          ))}
        </div> <h3 className="text-right">Total: ${calculateTotal().toFixed(2)}</h3></div>
      )}
    </div>
    </div>
  );
}

export default Cart;


  
  
    // <div className='w-full h-screen flex  justify-center items-center bg-green-200'>
    //    <Card className='w-[850px] flex flex-col  xl:flex-row lg:flex-row md:flex-row  xl:justify-around lg:justify-around md:justify-between rounded-xl m-5 border-0 p-4 '  > 
    //    <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row  items-center xl:items-start  '>
    
    //         <img src="https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-06-free-img.png" className='bg-black size-16 rounded-xl'/> 
    //         <div className='ml-4' >
    //         <h1 className='text-lg lg:text-2xl xl:text-2xl xl:text-start lg:text-start md:text-start text-center '>HEELLO</h1>
    //         </div>
    //    </div>
    //    <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row items-center xl:items-between lg:items-between md:items-between justify-center xl:justify-between lg:justify-between md:justify-between '>
    //    <NavLink to="/cart">
    //       <Button  variant="outline" className="bg-green-500 rounded-2xl border-green-500 text-xs lg:text-sm md:text-sm xl:text-sm size-auto"    >ADD TO CART</Button>
    //       </NavLink>
          
    //       <h5 className='text-lg lg:text-2xl xl:text-2xl text-rose-500 w-5  ml-0  xl:ml-1 xl:mr-7 md:ml-3 lg:ml-3 m'>4$</h5>
    //       </div>
    // </Card>
    // </div>
  


