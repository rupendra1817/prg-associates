"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, SERVICES } from "@/lib/constants";

export default function EnquiryForm({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*New Enquiry from Website*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📧 Email: ${form.email}\n🔧 Service: ${form.service}\n💬 Message: ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const labelClass = `block text-sm font-medium mb-1 ${dark ? "text-gray-200" : "text-gray-700"}`;
  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm text-gray-900 bg-white";

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle size={32} className="text-green-500" />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>Enquiry Sent!</h3>
        <p className={`mb-4 text-sm ${dark ? "text-gray-300" : "text-gray-500"}`}>Your enquiry has been sent via WhatsApp. We'll get back to you shortly.</p>
        <button onClick={() => setSubmitted(false)} className="text-yellow-400 font-semibold hover:underline">Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div>
          <label className={labelClass}>Full Name *</label>
          <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" type="tel" className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Email Address</label>
        <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Service Required *</label>
        <select name="service" required value={form.service} onChange={handleChange} className={inputClass}>
          <option value="">Select a service...</option>
          {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your requirement..."
          rows={compact ? 3 : 4} className={`${inputClass} resize-none`} />
      </div>
      <button type="submit"
        className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all hover:scale-[1.02] shadow-lg">
        <MessageCircle size={18} /> Send via WhatsApp
      </button>
      <p className={`text-xs text-center ${dark ? "text-gray-400" : "text-gray-400"}`}>Your enquiry will be sent directly to our WhatsApp for quick response.</p>
    </form>
  );
}
