import { FaPlus, FaRegClock, FaUsers, FaRegCalendarAlt } from "react-icons/fa"
import tokyoImage from "../assets/Hero-Image.png"

export default function UpcomingTrip() {
  return (
    <div className="mb-8">
      <p className="text-base font-medium text-gray-500 dark:text-gray-400 mb-3">Your Upcoming Trip</p>
      <div className="relative rounded-2xl overflow-hidden w-full aspect-[4/3] mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <img src={tokyoImage || "/placeholder.svg"} alt="Tokyo" className="w-full h-full object-cover" />

        {/* Bottom dark blur overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-[2px] z-10" />

        {/* Content on top */}
        <div className="absolute inset-0 p-5 text-white flex flex-col justify-between z-20">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-bold tracking-wide">TOKYO</h2>
              <p className="text-sm mt-1">27.01.2025 - 02.02.2025</p>
            </div>
            <div className="bg-white/20 p-2 rounded-lg cursor-pointer hover:bg-white/30 transition-colors">
              <FaPlus className="text-white" />
            </div>
          </div>

          <div className="flex justify-between items-center text-xs mt-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="bg-black/30 p-2 rounded-full">
                <FaRegClock className="text-yellow-400 text-lg" />
              </div>
              <div>
                <div className="text-sm">8 Days</div>
                <div className="text-[10px] text-gray-300">Duration</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-black/30 p-2 rounded-full">
                <FaUsers className="text-yellow-400 text-lg" />
              </div>
              <div>
                <div className="text-sm">4 (2M,2F)</div>
                <div className="text-[10px] text-gray-300">Group Size</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-black/30 p-2 rounded-full">
                <FaRegCalendarAlt className="text-yellow-400 text-lg" />
              </div>
              <div>
                <div className="text-sm">14</div>
                <div className="text-[10px] text-gray-300">Activities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
