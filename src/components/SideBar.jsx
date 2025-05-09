"use client"
import { FaHome, FaSearch, FaPlus, FaHeart, FaUser, FaSuitcase, FaPlane, FaHotel, FaCalendarAlt } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"

export default function Sidebar({ activeSection, setActiveSection, theme, toggleTheme }) {
  const navItems = [
    { id: "home", icon: FaHome, label: "Home" },
    { id: "search", icon: FaSearch, label: "Search" },
    { id: "trips", icon: FaSuitcase, label: "My Trips" },
    { id: "flights", icon: FaPlane, label: "Flights" },
    { id: "hotels", icon: FaHotel, label: "Hotels" },
    { id: "activities", icon: FaCalendarAlt, label: "Activities" },
    { id: "favorites", icon: FaHeart, label: "Favorites" },
    { id: "profile", icon: FaUser, label: "Profile" },
  ]

  return (
    <div className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6 z-50 shadow-md">
      <div className="flex items-center gap-3 mb-10 mt-4">
        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
          C
        </div>
        <div>
          <h2 className="font-semibold text-lg">Chhavi</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">Premium Member</p>
        </div>
      </div>

      <div className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`flex items-center gap-3 w-full px-5 py-3.5 rounded-lg transition-colors ${
              item.id === activeSection
                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setActiveSection(item.id)}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
            {item.id === activeSection && <div className="ml-auto w-1.5 h-6 bg-blue-600 rounded-full"></div>}
          </button>
        ))}
      </div>

      <div className="mt-auto space-y-4">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white rounded-lg py-3.5 hover:bg-blue-700 transition-colors shadow-md">
          <FaPlus className="h-4 w-4" />
          <span className="font-medium">New Trip</span>
        </button>
      </div>
    </div>
  )
}
