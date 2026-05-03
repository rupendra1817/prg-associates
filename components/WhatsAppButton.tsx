"use client";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hello! I would like to enquire about your CA services.");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 group"
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="text-sm font-semibold hidden group-hover:inline transition-all">Chat on WhatsApp</span>
    </a>
  );
}
