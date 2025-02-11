import React  from 'react'
import {Link , NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Header(){

    const [username, setUsername] = useState([])

    // useEffect(() => {

    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/signup');
    //             setUsername(response.data.username)
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }

    //   fetchData()
    // }, [])
    
    





    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className='text-green-600 text-3xl font-bold'> Logo</h1>
                    </Link>
                    <div className="flex items-center lg:order-2  justify-between w-[15rem] ">
                      <div className='flex items-center bg-white mt-2'>
                        <img className='h-8'  src="public/avatar-15.png" alt="" />
                        {/* <span className='mt-1'>hi, { }</span> */}
                        </div>  
                        
                        <Link
                            to="/login"
                            className=" rounded-md bg-green-500 text-white hover:bg-[#559e5b]  focus:ring-orange-300 font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                           Login
                        </Link>
                        
                        <Link
                            to="/signup"
                            className= " bg-green-500 text-white rounded-lg hover:bg-[#559e5b] focus:ring-4 focus:ring-orange-300 font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign Up
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='menu'
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                                    }
                                >
                                    Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='services'
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to='contact'
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}