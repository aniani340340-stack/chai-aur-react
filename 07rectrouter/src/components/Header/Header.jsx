import React from 'react'
import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>


                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    {/* Center Menu */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <ul className="flex space-x-8 font-medium">

                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } hover:text-orange-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } hover:text-orange-700`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } hover:text-orange-700`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="github"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } hover:text-orange-700`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}
export default Header
