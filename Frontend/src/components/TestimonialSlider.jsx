import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Example Inc.",
    text: "This product changed my life! Highly recommend to everyone.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Lead, TechCorp",
    text: "A game-changer in the industry. Amazing experience!",
  },
  {
    name: "Michael Brown",
    role: "Founder, StartupX",
    text: "I can't imagine my workflow without it. Super useful!",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl w-full ">
        
        <div className='md:flex sm:block my-0 mx-10 items-center '>
          <div className='w-full p-4 text-center '>
            <h3 className='text-red-500 font-bold mt-4 text-center'>Testimonials</h3>
            <h1 className='text-2xl md:text-3xl font-bold mt-3 '>What Our Customers Say About Us</h1>  
          </div>
        </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        

        <p className="text-lg font-medium text-gray-700">"{testimonials[index].text}"</p>
        <h3 className="mt-4 text-xl font-semibold text-green-600">{testimonials[index].name}</h3>
        <p className="text-gray-500 italic">{testimonials[index].role}</p>
      </motion.div>
      
      <div className="mt-6 flex gap-4">
        <Button onClick={prevTestimonial} variant="outline" className="px-4 py-2 text-gray-700 border-gray-300 hover:bg-gray-100">&#8592; Prev</Button>
        <Button onClick={nextTestimonial} variant="default" className="px-4 py-2 bg-green-500 text-white hover:bg-green-600">Next &#8594;</Button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
