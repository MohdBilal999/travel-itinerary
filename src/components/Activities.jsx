"use client";

import { useState } from "react";
import image from "../assets/image.png";
import tokyo from "../assets/tokyo.png";
import kimono from "../assets/kimono.png";

export default function Activities() {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    { month: "JAN", day: "MON", date: "27" },
    { month: "JAN", day: "TUE", date: "28" },
    { month: "JAN", day: "WED", date: "29" },
    { month: "JAN", day: "THU", date: "30" },
    { month: "JAN", day: "FRI", date: "31" },
    { month: "FEB", day: "SAT", date: "1" },
  ];

  return (
    <div className="mt-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium">Activities</h3>
        <button className="text-sm text-blue-600 font-medium hover:underline">
          See all
        </button>
      </div>

      {/* Day Tabs */}
      <div className="border border-gray-300 rounded-xl p-2 mb-4">
  {/* Top Tabs */}
  <div className="flex gap-2 mb-3 px-1">
    <button className="bg-blue-600 text-white px-3 py-1 text-xs rounded-full">Day Plan</button>
    <button className="border border-blue-600 text-blue-600 px-3 py-1 text-xs rounded-full">14 Activities</button>
  </div>

  {/* Day Scroller */}
  <div className="flex gap-2 overflow-x-auto px-1">
    {days.map((day, i) => {
      const isActive = i === activeDay;
      return (
        <button
          key={day.date}
          onClick={() => setActiveDay(i)}
          className={`relative w-20 h-16 flex flex-col justify-center items-center rounded-xl text-sm font-medium 
            ${isActive ? 'border-2 border-blue-600 text-blue-600 bg-white' : 'bg-gray-100 text-gray-600'}`}
        >
          {/* Vertical month bar for active day */}
          {isActive && (
            <div className="absolute left-0 top-0 h-full w-8 bg-blue-600 text-white text-[10px] flex items-center justify-center rounded-l-md">
              {day.month}
            </div>
          )}
          {/* Day content */}
          <div className={`${isActive ? 'ml-5' : ''}`}>
            <div className="text-[10px] leading-none">{day.day}</div>
            <div className="text-base">{day.date}</div>
          </div>
        </button>
      );
    })}
  </div>
</div>



      {/* Activities List */}
      <div className="mb-3 text-blue-600 text-sm font-medium">
        Day 1 ・ 27.01.2025 ・ 3 Activities
      </div>
      <div className="space-y-4">
        <ActivityCard
          image={image}
          title="Senso-ji Temple & Nakamise Shopping Street"
          timing="8:15 am Morning"
          duration="3 hours"
          pickup="From Hotel"
        />
        <ActivityCard
          image={tokyo}
          title="Tokyo Sky Tree"
          timing="1:00 pm Afternoon"
          duration="3 hours"
          pickup="From Nakamise Street"
        />
        <ActivityCard
          image={kimono}
          title="Tokyo Sky Tree"
          timing="1:00 pm Afternoon"
          duration="3 hours"
          pickup="From Nakamise Street"
        />
      </div>
    </div>
  );
}

function ActivityCard({ image, title, timing, duration, pickup }) {
  return (
    <div className="flex rounded-lg overflow-hidden w-full h-full border border-gray-200 dark:border-[#D3F462] bg-white dark:bg-[#4D4D4D]">
      {/* Left 1/4 Image */}
      <div className="w-1/4 h-full">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right 3/4 Content */}
      <div className="w-3/4 p-3 flex flex-col justify-between">
        <h4 className="text-sm font-semibold text-black dark:text-white">
          {title}
        </h4>
        <div className="text-xs space-y-1">
          <p>
            <span className="font-semibold">Timing:</span>{' '}
            <span className="text-[#333333] dark:text-[#F5F5F5]">{timing}</span>
          </p>
          <p>
            <span className="font-semibold">Duration:</span>{' '}
            <span className="text-[#333333] dark:text-[#F5F5F5]">{duration}</span>
          </p>
          <p>
            <span className="font-semibold">Pick up:</span>{' '}
            <span className="text-[#333333] dark:text-[#F5F5F5]">{pickup}</span>
          </p>
        </div>
      </div>
    </div>
  );
}


