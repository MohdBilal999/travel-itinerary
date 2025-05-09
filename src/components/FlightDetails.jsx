import { FaPlaneDeparture } from "react-icons/fa"
import airplane from "../assets/Plane.png"

export default function FlightDetails() {
  return (
    <div className="mt-2 bg-blue-600 text-white p-5 rounded-2xl relative mb-8 hover:shadow-lg transition-shadow duration-300">
      <div className="text-base font-medium">Flight Details</div>
      <div className="text-xs mb-4 opacity-90">26.01.2025, 10:50 am</div>
      <div className="flex justify-start items-center gap-3">
        <div>
          <div className="text-lg font-bold">DEL</div>
          <div className="text-xs opacity-90">Delhi, India</div>
        </div>
        <div className="flex items-center">
          <div className="h-[1px] w-14 bg-white/50"></div>
          <FaPlaneDeparture className="mx-2 text-sm" />
          <div className="h-[1px] w-14 bg-white/50"></div>
        </div>
        <div>
          <div className="text-lg font-bold">NRT</div>
          <div className="text-xs opacity-90">Narita, Tokyo</div>
        </div>
      </div>
      <div className="absolute right-4 top-4 text-xs px-3 py-1 rounded-full text-white cursor-pointer hover:underline">
        See all
      </div>
      <div className="absolute right-2 bottom-2">
        <img src={airplane || "/placeholder.svg"} alt="Airplane" className="h-full opacity-70" />
      </div>
    </div>
  )
}
