import React from "react";
import { CirclePlay, Play } from "lucide-react";
import Image from "next/image";

const therapeuticAreas = [
  "Drug Discovery",
  "Vaccines",
  "Infectious Disease",
  "Mental Health",
  "Oncology",
  "Obesity",
  "Pain",
  "Cardiovascular",
  "Metabolic",
];

export default function Therapeutic() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-2">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10 py-8 mb-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Driving High-Impact
          <span className="text-green-700"> Health Research</span> Across The Globe
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-600">
          At African Health Research Organisation, we are dedicated to driving
          high-impact clinical research that addresses critical global health
          challenges.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr] gap-6 lg:gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-500 text-base sm:text-lg font-semibold leading-relaxed">
            Our Centre is a resource for researchers, academic professionals,
            students, and organizations working in the field of global health.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Therapeutic Areas
          </h2>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {therapeuticAreas.map((area) => (
              <span
                key={area}
                className="border border-black rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-gray-700 text-xs sm:text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl overflow-hidden h-[250px] sm:h-[300px] lg:h-[400px]">
            <Image
              src="/ankita/A4.jpeg"
              alt="A4"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 lg:gap-8 md:col-span-2 lg:col-span-1">
          <div className="rounded-2xl overflow-hidden h-[180px] sm:h-[200px]">
            <Image
              src="/ankita/A1.jpeg"
              alt="A1"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Video Highlights
            </h3>

            <p className="text-gray-600 text-start text-base sm:text-lg lg:text-xl">
              At African Health Research Organization, we are dedicated to
              driving high-impact clinical research that addresses critical
              global health challenges.
            </p>

            <div className="flex items-center flex-wrap gap-3 mt-6 sm:mt-8">
              <button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                Watch Documentation
              </button>

              <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-900 flex items-center justify-center">
                <Play className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}