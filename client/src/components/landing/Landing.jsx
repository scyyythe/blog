import React from 'react';

export default function Landing({ message }) {
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Welcome to My Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Share thoughts, tutorials, and projects. Build in public and learn together.
          </p>

          {message && (
            <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-800">
              <strong>Server:</strong> <span className="ml-2">{message}</span>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-md font-medium hover:opacity-95">Get started</a>
            <a href="#" className="inline-block px-6 py-3 border border-gray-300 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900">Learn more</a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full h-64 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-6xl text-gray-400">📝</span>
          </div>
        </div>
      </div>
    </section>
  );
}
