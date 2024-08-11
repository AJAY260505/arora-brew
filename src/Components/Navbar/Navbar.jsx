import React, { useState, useEffect } from 'react';
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import axios from 'axios';

const Menus = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Services",
        link: "/#services",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
    {
        id: 4,
        name: "Login/Signup",
        link: "/#",
    }
];

const menuItem =[
    {
      "id": 1,
      "name": "Espresso",
      "price": 250,
      "description": "A strong and bold coffee made by forcing hot water through finely-ground coffee beans.",
      "category": "Coffee"
    },
    {
      "id": 2,
      "name": "Americano",
      "price": 300,
      "description": "Espresso diluted with hot water, offering a similar strength to brewed coffee.",
      "category": "Coffee"
    },]
const Navbar = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [menuVisible, setMenuVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('https://firebasestorage.googleapis.com/v0/b/arora-brew.appspot.com/o/menu.json?alt=media');
                setMenuItems(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);
    };

    return (
        <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
            <div className="container py-2">
                <div className="flex justify-between items-center gap-4">
                    {/*Logo Section*/}
                    <div data-aos="fade-down" data-aos-once="true">
                        <a
                            href='#'
                            className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive'
                        >
                            <img src={Logo} alt="Logo" className='w-14' />
                            Arora Brew
                        </a>
                    </div>

                    {/*Links Section*/}
                    <div
                        data-aos="fade-down"
                        data-aos-once="true"
                        data-aos-delay="300"
                        className='flex justify-between items-center gap-4'
                    >
                        <ul className='hidden sm:flex items-center gap-4'>
                            {Menus.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={toggleMenu}
                            className='bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3'
                        >
                            Order
                            <FaCoffee className='text-xl cursor-pointer' />
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Modal */}
            {menuVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Menu</h2>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error loading menu.</p>}
                        <ul>
                            {menuItem.map(item => (
                                <li key={item.id} className="mb-4">
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p>Price: ₹{item.price}</p>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={toggleMenu}
                            className="mt-4 bg-primary px-4 py-2 rounded-full text-white hover:bg-primary/80"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;