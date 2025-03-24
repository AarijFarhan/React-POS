import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal, removeFromCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Processed Successfully!");
  };

  return (
    <>
<div className="relative h-64 flex justify-center items-center text-center bg-black tracking-widest">
  {/* Background Image */}
  <img src="./banner.jpg" alt="Background" className="absolute inset-0 w-full h-full opacity-90" style={{ objectFit: 'cover', backgroundRepeat: 'repeat' }} />
  <h1 className="relative text-white text-5xl font-bold bg-transparent"> Cart </h1>
</div>


      <div className="flex justify-center items-center h-fit bg-green-50">
        <div className="p-6 h-full w-full max-w-4xl bg-green-50">
          {cart.length === 0 ? (
            <div className="h-screen flex flex-col items-center justify-center">
              <Card className="bg-green-100 p-6 rounded-2xl flex flex-col justify-center items-center">
                <p className="mt-4 text-center">Your cart is empty.</p>
                <Button className="mt-3">
                  <Link to="/menu" className="border rounded-3xl hover:bg-green-500 hover:text-white p-3">
                    Back To Menu
                  </Link>
                </Button>
              </Card>
            </div>
          ) : (
            <div className="h-fit w-full bg-green-50">
              <div className="mt-6 space-y-4 flex flex-col justify-center items-center bg-green-50" style={{ minHeight: "70vh" }}>
                {cart.map((item) => (
                  <Card key={item.title} className="flex flex-col md:flex-row bg-green-100 rounded-2xl p-4 w-full md:w-auto items-center justify-between">
                    <div className="flex flex-col md:flex-row items-center w-full">
                      <img src={item.images} alt={item.title} className="w-16 h-16 rounded-xl bg-black mr-4" />
                      <div className="text-center md:text-left w-full md:w-[400px]">
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-600">Price: ${item.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 mt-3 md:mt-0">
                      <div className="flex items-center space-x-5">
                        <Button onClick={() => decreaseQuantity(item.title)} className="text-white rounded-xl font-bold bg-red-600 hover:bg-red-700">-</Button>
                        <span className="text-lg font-bold">{item.quantity}</span>
                        <Button onClick={() => increaseQuantity(item.title)} className="text-white rounded-xl font-bold bg-green-600 hover:bg-green-700">+</Button>
                      </div>
                      <Button onClick={() => removeFromCart(item.title)} className="text-white bg-red-600 hover:bg-rose-950 rounded-xl w-full md:w-auto">Remove</Button>
                    </div>
                  </Card>
                ))}
                <div className="w-full flex flex-col items-center md:items-end mt-4">
                  <h3 className="text-lg font-semibold">Total: ${calculateTotal().toFixed(2)}</h3>
                  <div className="flex space-x-4">
                    <Link to="/menu">
                      <Button className="text-white bg-gray-500 rounded-xl hover:bg-gray-600">Shop More</Button>
                    </Link>
                    <Button className="text-white bg-green-500 rounded-xl hover:bg-green-600" onClick={() => setShowForm(true)}>Checkout</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <Card className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-white text-lg font-semibold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded bg-white bg-opacity-60 placeholder-black" required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded bg-white bg-opacity-60 placeholder-black" required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded bg-white bg-opacity-60 placeholder-black" required />
              <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} className="w-full p-2 border rounded bg-white bg-opacity-60 placeholder-black" required />
              <div className="flex space-x-2">
                <input type="text" name="expiryDate" placeholder="Expiry Date (MM/YY)" value={formData.expiryDate} onChange={handleChange} className="w-1/2 p-2 border rounded bg-white bg-opacity-60 placeholder-black" required />
                <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} className="w-1/2 p-2 border rounded bg-white bg-opacity-60 placeholder-black" required />
              </div>
              <div className="flex justify-between">
                <Button type="submit" className="text-white bg-green-500 rounded-xl hover:bg-green-600">Pay Now</Button>
                <Button type="button" onClick={() => setShowForm(false)} className="text-white bg-red-500 rounded-xl hover:bg-red-600">Cancel</Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </>
  );
}

export default Cart;
