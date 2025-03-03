
import { CardWithForm } from '@/components/CardWithForm'
import React,{useEffect,useState} from 'react'

function Menu() {

  const [cart , setCart] = useState(()=>{
    const savedCard = localStorage.getItem("cart")
    return savedCard? JSON.parse(savedCard) : []
    
  })

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

    // Increment item quantity
    const incrementQuantity = (id) => {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };
  
    // Decrement item quantity (removes if quantity reaches 0)
    const decrementQuantity = (id) => {
      setCart(
        cart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0)
      );
    };





  return (
      <>
      <div className="bg-[url(banner.jpg)] text-center items-center h-64 flex justify-center opacity-95 bg-black tracking-widest">
        <h1 className="text-white brightness-[100px] text-5xl bg-transparent font-bold">Our Menu</h1>
      </div>
    {/* <div className='bg-green-500 text-white h-96 font-extrabold flex flex-col justify-center  items-center'> 
     <h3 className='text-xl italic font-mono'>Check Out Our</h3>
     <h1 className='text-9xl pt-36'>M  E  N  U</h1>
    </div> */}
    <div className='bg-slate-100 text-slate-900 text-xl  h-fit font-extrabold flex flex-col justify-center py-10  items-center'>
        <h1 >MAIN COURSE</h1>
        <CardWithForm addToCart={addToCart}  />     
    </div>
    </>
  )
}

export default Menu
