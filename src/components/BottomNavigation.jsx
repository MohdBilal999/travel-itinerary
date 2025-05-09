"use client";
import { Home, Search, Plus, Heart, User } from "lucide-react";

export default function BottomNavigation({
  activeSection = "home",
  setActiveSection = () => {},
}) {
  const navItems = [
    { id: "home", icon: Home },
    { id: "search", icon: Search },
    { id: "add", icon: Plus, special: true },
    { id: "favorites", icon: Heart },
    { id: "profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-between items-center bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-[#D1F46233] px-6 py-2 z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`flex items-center justify-center ${
            item.special
              ? "text-blue-600 rounded-full p-3 dark:text-[#D3F462] hover:bg-blue-700 dark:hover:bg-lime-500 transition-colors"
              : ""
          }`}
          onClick={() => setActiveSection(item.id)}
        >
          {item.id === activeSection && !item.special ? (
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-[#D1F46233]">
              <item.icon
                className="h-5 w-5 text-blue-600 dark:text-[#D3F462]"
                strokeWidth={item.id === activeSection ? 2.5 : 2}
              />
            </div>
          ) : (
            <item.icon
              className={`h-6 w-6 ${
                item.special
                  ? ""
                  : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );
}
