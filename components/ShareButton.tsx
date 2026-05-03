"use client";
import { Share2, Check } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "PRG & Associates",
      text: "Professional Taxation, Business & Legal Services — PRG & Associates, Lucknow",
      url: "https://www.prgassociates.in",
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      title={copied ? "Link Copied!" : "Share this website"}
      className="w-9 h-9 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-colors"
    >
      {copied ? <Check size={16} className="text-green-400" /> : <Share2 size={16} />}
    </button>
  );
}
