import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom";
function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal, removeFromCart } = useCart();

  return (
    <div className="flex justify-center items-center h-fit bg-green-50">
      <div className="p-6 h-full w-full max-w-4xl bg-green-50">

        {cart.length === 0 ? (
          <div className="h-screen ">
            <Card className="bg-green-100 p-6 rounded-2xl flex flex-col justify-center">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

            <h1 className="text-3xl font-bold text-center pl-3"> Shopping Cart</h1>
            </div>
            <p className="mt-4 text-center">Your cart is empty.</p>
            <Button className="mt-3" ><Link to="/menu"><strong className="border rounded-3xl hover:bg-green-500 hover:text-white p-3">BacK To Menu</strong></Link></Button>
            </Card>
          </div>
        ) : (
          <div className="h-fit w-full bg-green-50">
            <h1 className="text-3xl font-bold text-center">Shopping Cart</h1>
          
            <div className="mt-6 space-y-4 h-fit flex flex-col justify-center items-center bg-green-50" style={{ minHeight: '70vh' }}>
              {cart.map((item) => (
                <Card key={item.title} className="flex flex-col md:flex-row bg-green-100 rounded-2xl items-center justify-between  p-4  w-full md:w-auto">
                  <div className="flex items-center mb-4 md:mb-0">
                    <img src={item.images} alt={item.title} className="w-16 h-16 rounded-xl bg-black mr-4" />
                    <div className="w-full md:w-[400px]">
                      <h2 className="text-lg font-semibold flex flex-wrap">{item.title}</h2>
                      <p className="text-gray-600">Price: ${item.price}</p>
                    </div>
                  </div>
                <div className="flex"> 

                  <div className="flex items-center space-x-5 mb-4 md:mb-0">
                    <Button onClick={() => decreaseQuantity(item.title)} className="text-slate-300 rounded-xl  font-bold bg-red-600 hover:bg-red-700 hover:text-slate-50">-</Button>
                    <span className="text-lg font-bold">{item.quantity}</span>
                    <Button onClick={() => increaseQuantity(item.title)} className="text-slate-300 rounded-xl font-bold bg-green-600 hover:bg-green-700 hover:text-slate-50">+</Button>
                  </div>

                  <Button onClick={() => removeFromCart(item.title)} className="bg-red-500 hover:bg-rose-950 mx-4 hover:text-white rounded-xl">
                    Remove
                  </Button>
                </div>
                </Card>
              ))}
              <div className="xl:w-[700px] text-end">
                
            <h3 className="text-right ">Total: ${calculateTotal().toFixed(2)}</h3>
            <Button type="button" className="bg-slate-400 rounded-xl hover:bg-slate-300">CheckOut</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
