import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Link } from "react-router-dom";

const sta_data = [
    {
        images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-01-free-img.jpg",
        title:"BN Famous Fries",
        description:"Crispy Fries, Salt, Butter, Cheese, Spices",
        price:2.00
   },
    {
        images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-03-free-img.jpg",
        title:"Crispy Chicken Sandwich",
        description:"Chicken Breast, Tomatoes, Cheese, Iceberg Salad",
        price:2.50
    },
    {
        images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-09-free-img.jpg",
        title:"4 Pieces Chicken Wings",
        description:"Deep Fried Chicken Wings",
        price:2.50
    },
    {
        images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-04-free-img.jpg",
        title:"The Spring Salad",
        description:"Tomatoes, Cucumber, Black Beans, Olives, Salad, Cheese",
        price:3.00
   },
    {
        images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-02-free-img.jpg",
        title:"Potato Wedges",
        description:"Crispy Garlic Baked Potato Wedges, Cheese, Salt",
        price:2.00
   },
    {
        images:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/menu-08-free-img.jpg",
        title:"Chicken Salad",
        description:"Chicken Meat, Spacial Gravy, Fresh Bread",
        price:2.00
   }
]

function Starter() {
    const { addToCart } = useCart();
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const [lastAddedItem, setLastAddedItem] = useState(null);

    const handleAddToCart = (item) => {
        addToCart(item);
        setLastAddedItem(item);
        setPopoverOpen(true);

        // Auto-close the popover after 3 seconds
        setTimeout(() => setPopoverOpen(false), 3000);
    };

    return (
        <>
            <h1 className='font-bold'> STARTER</h1>

            {/* Popover Notification */}
            <Popover open={isPopoverOpen}>
                <PopoverContent className="fixed top-10 left-0 m-4 bg-white shadow-lg rounded-lg p-4 w-64">
                    <div>
                        <p className="text-black font-semibold">{lastAddedItem?.title} <span className="text-black font-normal">has been added to the cart!</span></p>
                        <div className="flex justify-between w-full mt-2">
                            <button className="font-normal bg-white text-black rounded-2xl border-none text-xs lg:text-sm md:text-sm xl:text-sm">
                                <Link to={'/menu'}>Shop more</Link>
                            </button>
                            <button className="font-bold text-white p-2 bg-green-500 rounded-2xl border-black text-xs lg:text-sm md:text-sm xl:text-sm">
                                <Link to={'/cart'}>Visit Cart</Link>
                            </button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            <div className='grid grid-rows-3 sm:grid-rows-6 sm:grid-flow-col md:grid-rows-6 lg:grid-rows-3 xl:grid-rows-3 w-full'>
                {sta_data.map((items) => (
                    <Card className='bg-white flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center xl:justify-between lg:justify-between md:justify-between rounded-xl m-5 border-0 p-4' key={items.title}>
                        <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row items-center xl:items-start'>
                            <img src={items.images} className='size-fit rounded-full' alt={items.title} />
                            <div className='ml-4'>
                                <h1 className='font-bold text-lg lg:text-2xl xl:text-2xl '>{items.title}</h1>
                                <p className='text-slate-700 text-sm lg:text-lg xl:text-xl '>{items.description}</p>
                            </div>
                        </div>
                        <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row items-center justify-center xl:justify-between lg:justify-between md:justify-between'>
                            <Button
                                variant="outline"
                                className="mt-2 font-bold text-white bg-green-500 rounded-2xl border-green-500 text-xs lg:text-sm md:text-sm xl:text-sm"
                                onClick={() => handleAddToCart(items)}
                            >
                                ADD TO CART
                            </Button>
                            <h5 className='font-bold text-lg lg:text-2xl xl:text-2xl text-red-600 ml-3'>${items.price}</h5>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Starter;
