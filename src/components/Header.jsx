"use client"

import { FaMoon, FaSun } from "react-icons/fa"

export default function Header({ theme, toggleTheme }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-semibold">Hello Chhavi!</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Ready for the trip?</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="md:hidden w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
        </button>
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
          C
        </div>
      </div>
    </div>
  )
}
