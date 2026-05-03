"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitors")
      .then((r) => r.json())
      .then((d) => setCount(d.count));
  }, []);

  if (count === null) return null;

  return (
    <span className="text-gray-500 text-sm">
      👁 Visitors: <span className="text-yellow-400 font-semibold">{count.toLocaleString()}</span>
    </span>
  );
}
