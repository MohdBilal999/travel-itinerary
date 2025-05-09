import hotel1 from "../assets/hotel1.png"
import hotel2 from "../assets/hotel2.png"

export default function Accommodation() {
  return (
    <div className="mt-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium">Accomodation</h3>
        <button className="text-sm text-blue-600 font-medium hover:underline">See all</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <HotelCard
          image={hotel1}
          name="Shinagawa Prince Hotel"
          checkIn="26.01.2025, 11:15 pm"
          checkOut="28.01.2025, 11:15 am"
          nights={2}
          status="confirmed"
        />
        <HotelCard
          image={hotel2}
          name="Mercure Tokyo Hotel"
          checkIn="28.01.2025, 6:00 pm"
          checkOut="30.01.2025, 2:00 pm"
          nights={2}
          status="pending"
        />
      </div>
    </div>
  )
}

function HotelCard({ image, name, checkIn, checkOut, nights, status, rating }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm w-full dark:bg-gray-800 ">
      {/* Hotel Image with Rating Badge */}
      <div className="relative h-40 w-full">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover"
        />
        {rating && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
            ⭐ {rating} <span className="hidden sm:inline">Very Good</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3">
        <h4 className="text-sm font-semibold mb-2">{name}</h4>

        <p className="text-xs text-gray-600 mb-1">
          <span className="font-medium">Check in:</span> {checkIn}
        </p>
        <p className="text-xs text-gray-600 mb-2">
          <span className="font-medium">Check out:</span> {checkOut}
        </p>

        <div className="flex items-center justify-between text-xs font-medium">
          <span>{nights} Nights</span>
          <span
            className={`flex items-center gap-1 ${
              status === "confirmed" ? "text-green-600" : "text-orange-500"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                status === "confirmed" ? "bg-green-600" : "bg-orange-500"
              }`}
            ></span>
            {status === "confirmed" ? "Confirmed" : "Pending"}
          </span>
        </div>
      </div>
    </div>
  );
}



