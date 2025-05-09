// components/TravelPlannerCard.tsx
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaUser,
  FaUsers,
  FaHeart,
} from "react-icons/fa"

export default function TravelPlannerCard() {
  return (
    <div className="p-4 font-sans max-w-md mx-auto">
      {/* Heading */}
      <h2 className="text-xl font-bold text-black dark:text-white mb-1">
        Plan Your Journey, Your Way!
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Let’s create your personalised travel experience
      </p>

      {/* Card Container */}
      <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl p-4 shadow-md space-y-4">
        {/* Destination Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-1">
            Where would you like to go?
          </label>
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-[#2c2c2c]">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter Destination"
              className="bg-transparent outline-none text-sm w-full text-black dark:text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Duration Select */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-1">
            How long will you stay?
          </label>
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-[#2c2c2c]">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <select
              className="bg-transparent outline-none text-sm w-full text-black dark:text-white"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select Duration
              </option>
              <option>1-3 Days</option>
              <option>4-7 Days</option>
              <option>1-2 Weeks</option>
            </select>
          </div>
        </div>

        {/* Companion Buttons */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-1">
            Who are you traveling with?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Solo", icon: <FaUser /> },
              { label: "Couple", icon: <FaHeart /> },
              { label: "Family", icon: <FaUsers /> },
              { label: "Friends", icon: <FaUserFriends /> },
            ].map((item) => (
              <button
                key={item.label}
                className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-black dark:text-white bg-white dark:bg-[#2c2c2c] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button className="mt-6 w-full bg-[#3D5CFF] hover:bg-[#334bcc] text-white font-medium py-2 rounded-xl transition-colors">
        Continue
      </button>
    </div>
  )
}
