import { Award, Target, Eye } from "lucide-react";
import { TEAM, STATS, FIRM_NAME } from "@/lib/constants";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            12+ Years of Financial Excellence
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {FIRM_NAME} is a group of professionals dedicated to providing comprehensive financial, taxation, and compliance services to individuals and businesses across India and abroad.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow-500 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-gray-900">{s.value}</p>
              <p className="text-gray-800 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", color: "bg-blue-50 text-blue-600", desc: "To deliver accurate, timely, and affordable financial services that empower our clients to focus on growing their business while we handle compliance." },
            { icon: Eye, title: "Our Vision", color: "bg-yellow-50 text-yellow-600", desc: "To be the most trusted firm in India, known for integrity, innovation, and client-first approach in every service we deliver." },
            { icon: Award, title: "Our Values", color: "bg-green-50 text-green-600", desc: "Integrity, transparency, excellence, and continuous learning form the foundation of everything we do at PRG Associates." },
          ].map(({ icon: Icon, title, color, desc }) => (
            <div key={title} className="text-center p-8 rounded-2xl bg-gray-50 hover-lift">
              <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mx-auto mb-4`}>
                <Icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">From a Small Office to a Trusted Group of Professionals</h2>
            <p className="text-gray-500 mb-4 leading-relaxed">Founded in 2009 by Mr. Rahul Sharma, PRG Associates started as a small tax consultancy in Uttar Pradesh. Over the years, we expanded our services and team to serve clients across India and abroad.</p>
            <p className="text-gray-500 mb-6 leading-relaxed">Today, we are a group of professionals with expertise in taxation, audit, corporate law, and business compliance — serving startups, SMEs, and large corporations alike.</p>

          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { year: "2009", event: "Firm Founded" },
              { year: "2012", event: "100+ Clients Milestone" },
              { year: "2017", event: "GST Practice Launch" },
              { year: "2020", event: "Digital Services Launch" },
              { year: "2022", event: "500+ Clients Served" },
              { year: "2024", event: "Pan-India Operations" },
            ].map(({ year, event }) => (
              <div key={year} className="bg-white rounded-2xl p-5 border border-gray-100 hover-lift">
                <p className="text-2xl font-bold text-yellow-500">{year}</p>
                <p className="text-gray-700 text-sm font-medium mt-1">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Our Team</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Meet the Experts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => {
              const isCEO = member.name === "Mr. Rahul Sharma";
              return (
              <div key={member.name} className={`text-center p-8 rounded-2xl hover-lift border ${
                isCEO
                  ? "bg-gradient-to-b from-gray-900 to-gray-800 border-yellow-400 shadow-xl shadow-yellow-200 scale-105"
                  : "bg-gray-50 border-gray-100"
              }`}>
                {isCEO && (
                  <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">Founder & CEO</span>
                )}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold ${
                  isCEO ? "bg-yellow-400 text-gray-900" : "gradient-gold text-white"
                }`}>
                  {member.name.split(" ")[1]?.charAt(0)}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isCEO ? "text-white" : "text-gray-900"}`}>{member.name}</h3>
                <p className={`text-sm font-medium mb-2 ${isCEO ? "text-yellow-400" : "text-yellow-600"}`}>{member.role}</p>
                <span className={`inline-block text-xs px-3 py-1 rounded-full mt-2 ${
                  isCEO ? "bg-yellow-400 text-gray-900 font-semibold" : "bg-yellow-100 text-yellow-700"
                }`}>{member.specialization}</span>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Work With Our Expert Team</h2>
        <p className="text-gray-800 mb-8">Get a free consultation today and let us handle your compliance needs.</p>
        <Link href="/enquiry" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105">
          Get Free Consultation
        </Link>
      </section>
    </div>
  );
}
