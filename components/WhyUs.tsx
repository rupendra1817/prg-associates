import { Clock, HeadphonesIcon, Lock, TrendingUp, Users, Zap } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Fast Turnaround", desc: "Quick processing with minimal documentation hassle." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Personal CA assigned for every client account." },
  { icon: Lock, title: "100% Confidential", desc: "Your financial data is always secure and private." },
  { icon: TrendingUp, title: "Tax Optimization", desc: "Maximize savings with smart tax planning strategies." },
  { icon: Users, title: "Expert Team", desc: "Qualified CAs with 12+ years of combined experience." },
  { icon: Zap, title: "Digital First", desc: "Fully online process — no office visits required." },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">We Make Compliance Simple & Stress-Free</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              With over 12 years of experience, PRG Associates has helped hundreds of businesses stay compliant, save taxes, and grow confidently. We combine expertise with technology to deliver fast, accurate, and affordable services.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm font-medium text-green-700">500+ Happy Clients</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-yellow-50 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 group-hover:bg-yellow-400 flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={18} className="text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
