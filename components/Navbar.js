"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 border-b border-gray-700 fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/logo.png"
                                alt="CaptionStudio Logo"
                                width={50}
                                height={50}
                            />
                            <span className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors">
                                CaptionStudio
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <Link
                                href="/"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${pathname === '/'
                                    ? 'text-white bg-gray-800'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${pathname === '/about'
                                    ? 'text-white bg-gray-800'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                    }`}
                            >
                                About
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/'
                                ? 'text-white bg-gray-900'
                                : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/about'
                                ? 'text-white bg-gray-900'
                                : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/contact'
                                ? 'text-white bg-gray-900'
                                : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar