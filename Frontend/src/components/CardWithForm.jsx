import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = [
  {
    id: 1,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-06-free-img.png",
    name: "Chicken Burger",
    price: 5.99
  },
  {
    id: 2,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-02-free-img.png",
    name: "Fatboy Burger",
    price: 6.99
  },
  {
    id: 3,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-03-free-img.png",
    name: "Classic Smash",
    price: 7.49
  },
  {
    id: 4,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-05-free-img.png",
    name: "Burger Nine",
    price: 8.99
  },
  {
    id: 5,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-07-free-img.png",
    name: "Beef Burger",
    price: 9.99
  },
  {
    id: 6,
    images: "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-04-free-img.png",
    name: "Bacon Burger",
    price: 10.99
  },
];

export function CardWithForm({ addToCart }) {  // Receive addToCart function
  return (
    <div className="grid grid-rows-2 sm:grid-rows-6 md:grid-rows-3 lg:grid-rows-2 grid-flow-col justify-around p-10 w-screen">
      {cards.map((product) => (
        <Card key={product.id} className="w-[350px] bg-white text-slate-900 mb-4 rounded-2xl">
          <CardContent>
            <img src={product.images} alt={product.name} />
          </CardContent>
          <CardHeader>
            <CardTitle className="text-center">{product.name}</CardTitle>
            <CardDescription>${product.price.toFixed(2)}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              className="bg-green-500"
              onClick={() => addToCart(product)} // Add product to cart
            >
              ADD TO CART
            </Button>
            <Button>BUY NOW</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
