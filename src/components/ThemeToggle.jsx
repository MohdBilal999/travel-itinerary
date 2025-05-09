"use client"

import { FaMoon, FaSun } from "react-icons/fa"

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === "light" ? (
        <>
          <FaMoon size={16} />
          <span className="text-sm font-medium">Dark Mode</span>
        </>
      ) : (
        <>
          <FaSun size={16} />
          <span className="text-sm font-medium">Light Mode</span>
        </>
      )}
    </button>
  )
}
