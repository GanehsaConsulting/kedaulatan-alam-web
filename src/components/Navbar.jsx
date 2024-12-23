'use client'
import { NavbarLinks, urlFriendly } from "@/app/System"
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiLeaf } from "react-icons/pi";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const toggleMinimize = () => {
        // Jika tombol maximize ditekan, setVisible(true) untuk menampilkan navigasi
        setIsMinimized(!isMinimized);
        if (isMinimized) {
            setVisible(true); // Pasti tampilkan navigasi saat maximize
        }
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 200;
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className="fixed z-[999] navbar md:bg-white md:bg-opacity-70 md:backdrop-blur-md">
                {/* Mobile */}
                <div className="md:hidden navbar-center w-full flex flex-col gap-2 items-start ml-3 justify-center">
                    <div className="pl-1 pr-3 py-1 bg-secondaryColor bg-opacity-80 backdrop-blur-md rounded-full drop-shadow-[3px_3px_8px_#04785740]">
                        <a className="flex items-center gap-2 font-medium uppercase bg-gradient-to-tl from-mainColor via-emerald-700 to-mainColor bg-clip-text text-transparent truncate">
                            <Image
                                src='/logo.png'
                                className="p-[2px] bg-white rounded-full"
                                width={25}
                                height={25}
                                alt="Kalanesia" />
                            <span>
                                Kalanesia
                            </span>
                        </a>
                    </div>
                </div>

                {/* Desktop */}
                <div className="navbar-start hidden md:block ml-3">
                    <a className="text-xl font-medium flex items-center gap-2">
                        <Image
                            src='/logo.png'
                            width={40}
                            height={40}
                            alt="Kalanesia" />
                        <span className="bg-gradient-to-tl from-mainColor via-emerald-700 to-mainColor bg-clip-text text-transparent">
                            Kalanesia
                        </span>
                    </a>
                </div>
                <div className={`${isScrolled ? "bg-secondaryColor rounded-full bg-opacity-50 backdrop-blur-lg" : ""} navbar-center hidden lg:flex duration-300 ease-in-out px-1 py-2`}>
                    <ul className="flex gap-1 items-center text-sm font-medium px-1">
                        {NavbarLinks.map((el, idx) => (
                            <li key={idx}>
                                <a
                                    className="hover:bg-mainColor hover:text-white px-3 py-1 rounded-full duration-300 ease-in-out"
                                    href={"#" + urlFriendly(el.Name)}
                                >
                                    {el.Name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end md:mr-3">
                    <a className="hidden md:block" href="#contact">
                        <button className="px-4 py-1 bg-secondaryColor rounded-full font-semibold">
                            Contacts
                        </button>
                    </a>
                </div>
            </div>

            {/* Navbar Mobile */}
            <nav className={`shadow-mainShadow md:hidden block bg-white bg-opacity-50 backdrop-blur-md rounded-full px-3 py-2 fixed bottom-3 left-3 right-3 z-[150] duration-500 ease-in-out transition-all origin-bottom-right
                            ${visible ? 'transform translate-y-0' : 'translate-y-[120%]'}
                            ${isMinimized ? 'transform translate-x-[105%] scale-0' : 'scale-100'}
                            `}>
                <ul className="w-full carousel2 gap-1 items-center justify-between text-sm font-medium">
                    {NavbarLinks.map((el, idx) => (
                        <li key={idx}>
                            <a
                                className="group flex items-center flex-row gap-1 carousel-item hover:bg-mainColor hover:text-white px-2 py-1 rounded-full duration-300 ease-in-out"
                                href={"#" + urlFriendly(el.Name)}
                            >
                                <span className="text-xl opacity-50 group-hover:opacity-100">
                                    {el.icon}
                                </span>
                                <span className="group-hover:block hidden text-[10px] truncate font-bold">
                                    {el.Name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}