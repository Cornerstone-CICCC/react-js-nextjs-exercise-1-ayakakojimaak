"use client";

import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Website</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
