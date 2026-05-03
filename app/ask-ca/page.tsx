"use client";
import { useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp, Search, Send, HelpCircle, CheckCircle } from "lucide-react";
import { FAQ, CATEGORIES } from "@/lib/faq";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function AskCAPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<number | null>(1);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", category: "", question: "" });
  const [sent, setSent] = useState(false);

  const filtered = FAQ.filter((f) => {
    const matchCat = activeCategory === "All" || f.category === activeCategory;
    const matchSearch = f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*New Question for CA Consultant*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📂 Category: ${form.category}\n❓ Question: ${form.question}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-3xl mx-auto px-4 relative">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-4">
            <HelpCircle size={14} className="text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Ask Our CA Expert</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">Got a Tax or Legal Question?</h1>
          <p className="text-gray-300 text-lg">Browse answered questions or submit your own — our CA consultant will respond personally.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left: FAQ */}
          <div className="lg:col-span-2">
            {/* Search */}
            <div className="relative mb-6">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-yellow-500 text-gray-900 shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-yellow-100 hover:text-yellow-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
              {filtered.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <HelpCircle size={40} className="mx-auto mb-3 opacity-40" />
                  <p>No questions found. Try a different search or category.</p>
                </div>
              )}
              {filtered.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-300 transition-colors">
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-yellow-50 transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1 pr-4">
                      <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full shrink-0 mt-0.5">
                        {faq.category}
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">{faq.question}</span>
                    </div>
                    {openId === faq.id
                      ? <ChevronUp size={18} className="text-yellow-500 shrink-0" />
                      : <ChevronDown size={18} className="text-gray-400 shrink-0" />
                    }
                  </button>

                  {openId === faq.id && (
                    <div className="px-5 pb-5 bg-white border-t border-gray-100">
                      {/* CA Answer */}
                      <div className="flex gap-3 mt-4">
                        <div className="w-9 h-9 rounded-full gradient-gold flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                          CA
                        </div>
                        <div className="flex-1 bg-yellow-50 border border-yellow-200 rounded-2xl rounded-tl-none p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-yellow-700 font-semibold text-xs">CA Expert Answer</span>
                            <CheckCircle size={13} className="text-green-500" />
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-3 ml-12">Asked by: {faq.askedBy}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Ask Question Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl border border-gray-200 shadow-xl p-6">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle size={30} className="text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Question Sent!</h3>
                  <p className="text-gray-500 text-sm mb-4">Our CA will answer your question on WhatsApp shortly.</p>
                  <button onClick={() => setSent(false)} className="text-yellow-600 font-semibold text-sm hover:underline">
                    Ask another question
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center text-white font-bold text-sm">CA</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Ask CA Directly</h3>
                      <p className="text-xs text-gray-400">Get answer on WhatsApp</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Your Name *</label>
                      <input
                        required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Phone Number *</label>
                      <input
                        required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX" type="tel"
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
                      <select
                        value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm bg-white"
                      >
                        <option value="">Select category...</option>
                        {CATEGORIES.filter((c) => c !== "All").map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Your Question *</label>
                      <textarea
                        required value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })}
                        placeholder="Type your question here..."
                        rows={4}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
                    >
                      <Send size={15} /> Send Question via WhatsApp
                    </button>
                  </form>

                  <div className="mt-4 p-3 bg-blue-50 rounded-xl">
                    <p className="text-xs text-blue-600 text-center">⏱ Typical response time: <strong>within 2 hours</strong> during business hours</p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
