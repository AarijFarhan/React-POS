import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  // Define onSubmit function to handle form submission
  const onSubmit = (data) => {
    // Send form data to server
    axios
axios.post("http://localhost:5000/contact", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>
      <div className="bg-[url(banner.jpg)] text-center items-center h-64 flex justify-center opacity-95 bg-black tracking-widest">
        <h1 className="text-white brightness-[100px] text-5xl bg-transparent font-bold">Contact Us</h1>
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-white shadow-lg rounded-lg">
          {/* Contact Form */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-[#39DB4A]">Get in Touch</h2>
            <form className="space-y-4" method="post" onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your name"
                  {...register("username", { required: true })}
                />
                {errors.username && <p className="text-red-500 text-sm">Name is required.</p>}
              </div>
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your phone number"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <p className="text-red-500 text-sm">Phone is required.</p>}
              </div>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email address"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}
              </div>
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  rows="5"
                  placeholder="Write your message"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">Message is required.</p>}
              </div>
              {/* Submit Button */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-[#39DB4A] text-white py-2 px-4 rounded-lg hover:bg-green-800"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="p-6 h-full">
            <h2 className="text-2xl font-bold mb-6 text-[#39DB4A]">Find Us Here</h2>
            <div className="aspect-w-16 aspect-h-9 h-[80%]">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345099214!2d-122.41941518468188!3d37.77492927975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b73e9fd%3A0x60c5df87ae5a4e6d!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1616454316584!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
