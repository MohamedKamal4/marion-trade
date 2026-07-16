"use client";

import { useEffect, useState } from "react";
import Logo from "../master logo/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { handleNavTapsOnClick } from "@/app/constens/functions";
import { NavProps } from "@/app/constens/types";
import { navLinks } from "@/app/constens/data";

export default function Nav({ setPage }: NavProps) {
    const [pageEnabled, setpageEnabled] = useState<string>("home");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const page = params.get("page") || "home";

        setpageEnabled(page);
        setPage(page);
    }, []);


    return (
        <>
            <nav
                data-aos="fade-down"
                className="fixed top-0 right-0 z-10 w-full text-white hidden md:flex"
            >
                <div className="container mx-auto flex items-center justify-between">
                    <Logo />
                    <ul className="flex h-25 items-center">
                        {navLinks.map((link) => (
                            <li key={link.page} className="h-full">
                                {link.page === "home" ? 
                                    <Link 
                                        href="/"
                                        onClick={() => handleNavTapsOnClick({
                                            page: link.page,
                                            setpageEnabled,
                                            setPage,
                                        })}
                                    >
                                        <Button variant="link" className={`cursor-pointer rounded-none rounded-b-full px-6 h-25 text-white ${
                                            pageEnabled === link.page ? "bg-red-900" : ""
                                        }`}>
                                            {link.name}
                                        </Button>
                                    </Link>
                                    :
                                    <Button
                                        onClick={() => handleNavTapsOnClick({
                                            page: link.page,
                                            setpageEnabled,
                                            setPage,
                                        })}
                                        variant="link"
                                        className={`cursor-pointer rounded-none rounded-b-full px-6 h-full text-white ${
                                            pageEnabled === link.page ? "bg-red-900" : ""
                                        }`}
                                    >
                                        {link.name}
                                    </Button>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            
            <nav
                data-aos="fade-down"
                className="fixed top-0 right-0 z-10 w-full text-white md:hidden"
            >
                <div className="container px-5 mx-auto flex items-center justify-between">
                    <Logo />
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                        className="w-15 h-10 space-y-2 z-25 cursor-pointer relative"
                    >
                        <div className={`${isOpen ? 'rotate-45 absolute top-5 left-0' : ''}  transition-all duration-300 w-10 h-px bg-white`}></div>
                        <div className={`${isOpen ? '-rotate-45 absolute top-5 left-0' : ''}  transition-all duration-300 w-10 h-px bg-white`}></div>
                    </button>
                    <ul className={`transition-all duration-300 fixed z-20 top-0 h-screen w-full bg-black/20 backdrop-blur-sm flex flex-col py-30 ${isOpen ? 'right-0' : '-right-[100%]'}`}>
                        {navLinks.map((link) => (
                            <li key={link.page} className="h-full">
                                {link.page === "home" ? 
                                    <Link 
                                        href="/"
                                        rel="preload"
                                        onClick={() => {
                                            handleNavTapsOnClick({
                                                page: link.page,
                                                setpageEnabled,
                                                setPage,
                                            })
                                            setIsOpen(false)
                                        }}
                                    >
                                        <Button variant="link" className={`cursor-pointer px-6 h-10 w-full rounded-none flex justify-start text-white ${
                                            pageEnabled === link.page ? "bg-red-900" : ""
                                        }`}>
                                            {link.name}
                                        </Button>
                                    </Link>
                                    :
                                    <Button
                                        onClick={() => {
                                            handleNavTapsOnClick({
                                                page: link.page,
                                                setpageEnabled,
                                                setPage,
                                            })
                                            setIsOpen(false)
                                        }}
                                        rel="preload"
                                        variant="link"
                                        className={`cursor-pointer px-6 h-10 w-full rounded-none flex justify-start text-white ${
                                            pageEnabled === link.page ? "bg-red-900" : ""
                                        }`}
                                    >
                                        {link.name}
                                    </Button>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            
        </>
    );
}