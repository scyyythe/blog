import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-black text-black dark:text-white border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left: logo + name */}
          <div className="flex items-center space-x-3">
            <img src="/icons/blogger-round.svg" alt="logo" className="h-8 w-8" />
            <span className="text-xl font-semibold">My Blog</span>
          </div>

          {/* Center: nav (keeps centered using absolute positioning) */}
          <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>

          {/* Right: auth buttons */}
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900">
              Login
            </button>
            <button className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
