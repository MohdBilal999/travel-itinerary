"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import UpcomingTrip from "./components/UpcomingTrip"
import FlightDetails from "./components/FlightDetails"
import Accommodation from "./components/Accommodation"
import Activities from "./components/Activities"
import BottomNavigation from "./components/BottomNavigation"
import Sidebar from "./components/Sidebar"
import TravelPlannerCard from "./components/TravelPlanner"
import { useMobile } from "../hooks/UseMobile"

export default function App() {
  const [theme, setTheme] = useState("light")
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const isMobile = useMobile()

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timeout)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Sidebar for desktop */}
        {!isMobile && (
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        )}

        <div className={`flex-1 pb-20 md:pb-6 ${!isMobile ? "md:ml-72" : ""}`}>
          <div className="max-w-xl mx-auto px-4 pt-4 md:pt-8">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <>
                <Header theme={theme} toggleTheme={toggleTheme} />

                {/* Conditionally render TravelPlannerCard on "search" section */}
                {activeSection === "search" ? (
                  <TravelPlannerCard />
                ) : (
                  <div className="md:grid md:grid-cols-1 md:gap-8">
                    <UpcomingTrip />
                    <FlightDetails />
                    <Accommodation />
                    <Activities />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom nav for mobile */}
      {isMobile && (
        <BottomNavigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
      <div className="rounded-2xl w-full aspect-[4/3] bg-gray-300 dark:bg-gray-700"></div>
      <div className="h-24 bg-blue-300 dark:bg-blue-700 rounded-2xl w-full"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-24 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-12 rounded"></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-28 rounded-2xl bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-28 rounded-2xl bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  )
}
