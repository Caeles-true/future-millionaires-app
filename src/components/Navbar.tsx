"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className="mx-4 py-6 border-b relative">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="inline-block">
          <Image src="/Landing/money.png" alt="Logo" width={120} height={32} />
        </Link>

        <ul className="hidden md:flex space-x-4 font-medium text-teal-900">
          <li><Link href="/about" className="hover:text-teal-700">About</Link></li>
          <li><Link href="/pricing" className="hover:text-teal-700">Pricing</Link></li>
          <li><Link href="/contact" className="hover:text-teal-700">Contact</Link></li>
          <li><Link href="/blog" className="hover:text-teal-700">Blog</Link></li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="py-2.5 px-4 text-sm border border-teal-900 rounded-full hover:bg-teal-900 hover:text-white">Login</Link>
          <Link href="/contact" className="py-2.5 px-4 text-sm bg-teal-900 text-white border border-teal-900 rounded-full hover:bg-black">Get in touch</Link>
        </div>

        <button
          className="md:hidden text-teal-900"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M5 8h22M5 16h22M5 24h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {mobileNavOpen && (
          <div className="absolute top-0 left-0 w-full bg-white p-6 shadow-md z-50 md:hidden">
            <div className="flex justify-between items-center mb-4">
              <Image src="/images/logo.svg" alt="Logo" width={100} height={32} />
              <button onClick={() => setMobileNavOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col space-y-4 text-teal-900">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>

            <div className="mt-6 flex flex-col space-y-3">
              <Link href="/login" className="text-center py-2 border border-teal-900 rounded-full hover:bg-teal-900 hover:text-white">Login</Link>
              <Link href="/contact" className="text-center py-2 bg-teal-900 text-white border border-teal-900 rounded-full hover:bg-black">Get in touch</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
