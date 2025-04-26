"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121212] px-8 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          JW
        </Link>

        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className={`text-white hover:text-[#1DB954] transition-colors ${
                pathname === "/" ? "text-[#1DB954]" : ""
              }`}
            >
              Introduction
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsTutorialsOpen(!isTutorialsOpen)}
              className={`flex items-center text-white hover:text-[#1DB954] transition-colors cursor-pointer ${
                pathname.startsWith("/tutorials") ? "text-[#1DB954]" : ""
              }`}
            >
              Tutorials
              <FaChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${
                  isTutorialsOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {isTutorialsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#121212] rounded-md shadow-lg py-1 z-50 border border-gray-700">
                <Link
                  href="/tutorials/oop1"
                  className="block px-4 py-2 text-white hover:bg-[#1DB954] hover:text-white"
                >
                  OOP 1
                </Link>
                <Link
                  href="/tutorials/oop2"
                  className="block px-4 py-2 text-white hover:bg-[#1DB954] hover:text-white"
                >
                  OOP 2
                </Link>
                <Link
                  href="/tutorials/oop3"
                  className="block px-4 py-2 text-white hover:bg-[#1DB954] hover:text-white"
                >
                  OOP 3
                </Link>
                <Link
                  href="/tutorials/Arrays"
                  className="block px-4 py-2 text-white hover:bg-[#1DB954] hover:text-white"
                >
                  Arrays
                </Link>
                <Link
                  href="/tutorials/ArrayLists"
                  className="block px-4 py-2 text-white hover:bg-[#1DB954] hover:text-white"
                >
                  ArrayLists
                </Link>
                <Link
                  href="/tutorials/SearchingSorting"
                  className="block px-4 py-2 text-white hover:bg-[#1DB954] hover:text-white"
                >
                  Searching and Sorting
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              href="/bibliography"
              className={`text-white hover:text-[#1DB954] transition-colors ${
                pathname === "/bibliography" ? "text-[#1DB954]" : ""
              }`}
            >
              Bibliography
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
