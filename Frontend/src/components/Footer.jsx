import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-10 bottom-0 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-200">
       
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
          Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                App Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Graphic Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                SEO Services
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: info@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
      <p className="text-center text-gray-400 mt-10 ">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
