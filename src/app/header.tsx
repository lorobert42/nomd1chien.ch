'use client'

import Image from "next/image";
import Link from "next/link";
import LogoImage from '../../public/logo.jpg';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    const NAV_ITEMS = [
        { href: "/", label: "Home" },
        { href: "/presentation", label: "Présentation" },
        { href: "/cours", label: "Cours" },
        { href: "/ballade", label: "Ballade active" },
        { href: "/ressources", label: "Ressources" },
        { href: "/trouver", label: "Nous trouver" },
        { href: "/contact", label: "Contact" },
    ];
    const pathname = usePathname();

    return (
        <header className="flex flex-col justify-center items-center basis-full">
            <Image className="rounded-md m-0 sm:m-4" src={LogoImage} alt="Logo Nom d'un chien"></Image>
            <nav className="flex flex-col items-center w-[100vw]">
                <button onClick={toggleHamburger} type="button" className="sm:hidden rounded-md px-8 py-4 hover:bg-white">
                    <Menu size={42} className={`${hamburgerOpen ? 'hidden' : ''}`} />
                    <X size={42} className={`${hamburgerOpen ? '' : 'hidden'}`} />
                </button>
                <ul className={`${hamburgerOpen ? 'flex w-9/10' : 'hidden sm:flex'} flex-col sm:flex-row rounded-md bg-white sm:bg-inherit`}>
                    {NAV_ITEMS.map(({ href, label }) => {
                        return (
                            <Link
                                key={href}
                                className={`${pathname === href ? 'active bg-primary' : ''} text-2xl px-4 sm:py-4 mx-0 rounded-md hover:bg-white`}
                                href={href}
                            >{label}</Link>
                        );
                    })}
                </ul>
            </nav>
            <hr className="w-4/5 h-px my-4 bg-primary border-0" />
        </header>
    );
}