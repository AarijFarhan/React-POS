import * as React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const cards = [
  {
    id: 1,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-06-free-img.png",
    title: "Chicken Burger",
    description: "A juicy grilled or crispy chicken patty served with fresh lettuce, tomatoes, and mayo in a soft bun.",
    price: 4.50
  },
  {
    id: 2,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-02-free-img.png",
    title: "Fatboy Burger",
    description: "A hefty, loaded burger stacked with multiple beef patties, cheese, and special sauces for a monster bite.",
    price: 3.25
  },
  {
    id: 3,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-03-free-img.png",
    title: "Classic Smash",
    description: "A thin, crispy-edged smashed beef patty with melted cheese, pickles, and a toasted bun for a classic taste.",
    price: 4.00
  },
  {
    id: 4,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-05-free-img.png",
    title: "Burger Nine",
    description: " A gourmet burger with a unique blend of flavors, featuring premium beef, fresh toppings, and signature sauce.",
    price: 5.15
  },
  {
    id: 5,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-07-free-img.png",
    title: "Beef Burger",
    description: " A simple yet flavorful beef patty grilled to perfection, topped with cheese, lettuce, and condiments.",
    price: 2.95
  },
  {
    id: 6,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-04-free-img.png",
    title: "Bacon Burger",
    description: " A smoky, savory delight with crispy bacon, melted cheese, and a juicy beef patty in a fluffy bun.",
    price: 3.50
  },
]

export function CardWithForm() {
  const { addToCart } = useCart();
  const [isPopoverOpen, setPopoverOpen] = React.useState(false);
  const [lastAddedItem, setLastAddedItem] = React.useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setLastAddedItem(item);
    setPopoverOpen(true);

    // Auto-close the popover after 3 seconds
    setTimeout(() => setPopoverOpen(false), 3000);
  };

  return (
    <div className="relative">
      {/* Global Popover - Always in Top-Left */}
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

      {/* Product Cards */}
      <div className="p-10 gap-5 grid grid-rows-6 sm:grid-rows-6 md:grid-rows-3 md:justify-around lg:grid-rows-2 grid-flow-col justify-center xl:justify-around">
        {cards.map((items) => (
          <Card key={items.id} className="w-full bg-white text-slate-900 mb-8 rounded-2xl transition duration-500 ease-in-out hover:bg-green-50 transform hover:-translate-y-1 hover:scale-110 hover:border-green-200">
            <CardContent>
              <img src={items.images} alt="" className="pt-5 h-24 w-24 flex justify-center m-auto" />
            </CardContent>
            <CardHeader className="mt-0">
              <CardTitle className="text-center">{items.title}</CardTitle>
              <CardDescription className="font-normal text-xs text-center lg:text-sm">{items.description}</CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-around">
              <CardTitle className="text-center text-lg lg:text-2xl xl:text-2xl text-red-600 w-5 ml-0 xl:ml-1 xl:mr-7 md:ml-3 lg:ml-3">
                ${items.price}
              </CardTitle>

              <Button
                variant="outline"
                className="mt-2 font-bold text-white bg-green-500 rounded-2xl border-green-500 text-xs lg:text-sm md:text-sm xl:text-sm size-auto"
                onClick={() => handleAddToCart(items)}
              >
                ADD TO CART
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
