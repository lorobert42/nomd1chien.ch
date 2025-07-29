'use client'

import Image from "next/image";
import Link from "next/link";
import LogoImage from '../../public/logo.jpg';
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <header className="flex flex-col justify-center items-center basis-full">
            <Image className="rounded-md m-0 sm:m-4" src={LogoImage} alt="Logo Nom d'un chien"></Image>
            <nav className="flex flex-col items-center w-[100vw]">
                <button onClick={toggleHamburger} type="button" className="sm:hidden rounded-md px-8 py-4 hover:bg-white">
                    <Menu size={42} className={`${hamburgerOpen ? 'hidden' : ''}`} />
                    <X size={42} className={`${hamburgerOpen ? '' : 'hidden'}`} />
                </button>
                <ul className={`${hamburgerOpen ? 'flex w-9/10' : 'hidden sm:flex'} flex-col sm:flex-row rounded-md bg-white sm:bg-inherit`}>
                    <Link className="text-2xl px-4 sm:py-4 mx-0 rounded-md hover:bg-white active:bg-primary" href="/">Home</Link>
                    <Link className="text-2xl px-4 sm:py-4 mx-0 rounded-md hover:bg-white active:bg-primary" href="/">Présentation</Link>
                    <Link className="text-2xl px-4 sm:py-4 mx-0 rounded-md hover:bg-white active:bg-primary" href="/">Cours</Link >
                    <Link className="text-2xl px-4 sm:py-4 mx-0 rounded-md hover:bg-white active:bg-primary" href="/">Ballade active</Link>
                    <Link className="text-2xl px-4 sm:py-4 mx-0 rounded-md hover:bg-white active:bg-primary" href="/">Ressources</Link>
                    <Link className="text-2xl px-4 sm:py-4 mx-0 rounded-md hover:bg-white active:bg-primary" href="/">Nous trouver</Link>
                    <Link className="text-2xl px-4 sm:py-4 mx-0 rounded-md hover:bg-white active:bg-primary" href="/">Contact</Link>
                </ul>
            </nav>
            <hr className="w-4/5 h-px my-4 bg-primary border-0" />
        </header>
    );
}