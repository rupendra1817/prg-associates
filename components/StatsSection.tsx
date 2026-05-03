"use client";
import { useEffect, useState } from "react";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("siteVisitors");
    const next = stored ? parseInt(stored) + 1 : 1000;
    localStorage.setItem("siteVisitors", String(next));
    setVisitorCount(next);
  }, []);

  return (
    <section className="bg-yellow-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-800 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-1">
              {visitorCount !== null ? visitorCount.toLocaleString() : "..."}
            </p>
            <p className="text-gray-800 font-medium text-sm">Website Visitors</p>
          </div>
        </div>
      </div>
    </section>
  );
}
