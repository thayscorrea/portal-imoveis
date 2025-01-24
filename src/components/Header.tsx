"use client"
import { useState } from "react";
import Image from "next/image";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md z-10">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo as SVG from /public */}
                <div className="flex items-center">
                    <Image
                        src="/logo-laranja.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                    />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        aria-label="Toggle menu"
                        id="menu-button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-gray-700">
                    <a href="#" className="hover:text-gray-900">
                        Imobiliárias
                    </a>
                    <a href="#" className="hover:text-gray-900">
                        Quero me Associar
                    </a>
                    <div className="relative group">
                        <a href="#" className="flex items-center hover:text-gray-900">
                            Sobre
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </a>
                        <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block group-focus-within:block">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Quem Somos
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Contato
                            </a>
                        </div>
                    </div>
                    <a href="#" className="hover:text-gray-900">
                        Blog
                    </a>
                </nav>

                {/* Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="border border-purple-600 text-purple-600 rounded-lg px-4 py-2 hover:bg-purple-600 hover:text-white transition">
                        Anunciar Imóvel
                    </button>
                    <a href="#" className="text-gray-700 hover:text-gray-900 transition">
                        Entrar
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <nav className="bg-white shadow-lg p-4 space-y-2">
                        <a href="#" className="block text-gray-700 hover:text-gray-900">
                            Imobiliárias
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-gray-900">
                            Quero me Associar
                        </a>
                        <div>
                            <a href="#" className="block text-gray-700 hover:text-gray-900">
                                Sobre
                            </a>
                            <div className="pl-4 space-y-1">
                                <a href="#" className="block text-sm text-gray-700 hover:text-gray-900">
                                    Quem Somos
                                </a>
                                <a href="#" className="block text-sm text-gray-700 hover:text-gray-900">
                                    Contato
                                </a>
                            </div>
                        </div>
                        <a href="#" className="block text-gray-700 hover:text-gray-900">
                            Blog
                        </a>
                        <button className="w-full border border-purple-500 text-purple-500 rounded-lg px-4 py-2 hover:bg-purple-500 hover:text-white transition">
                            Anunciar Imóvel
                        </button>
                        <a href="#" className="block text-gray-700 hover:text-gray-900 transition">
                            Entrar
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;