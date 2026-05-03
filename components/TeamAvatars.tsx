// Professional CA team SVG avatars - male and female in formal business attire
export default function TeamAvatars() {
  const members = [
    { gender: "male", name: "CA Rahul", title: "CA", color: "#1a3260" },
    { gender: "female", name: "CA Priya", title: "CS", color: "#1a3260" },
    { gender: "male", name: "Adv. Amit", title: "Advocate", color: "#1a3260" },
    { gender: "female", name: "CWA Neha", title: "CWA", color: "#1a3260" },
  ];

  return (
    <div className="flex items-end justify-center gap-2 sm:gap-4 mt-6">
      {members.map((m, i) => (
        <div key={i} className="flex flex-col items-center group">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md scale-110" />
            <svg
              width={i === 1 || i === 2 ? "80" : "68"}
              height={i === 1 || i === 2 ? "110" : "95"}
              viewBox="0 0 80 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative drop-shadow-xl"
            >
              {m.gender === "male" ? (
                <>
                  {/* Body - dark suit */}
                  <rect x="14" y="58" width="52" height="52" rx="6" fill="#0f1f3d" />
                  {/* Shirt */}
                  <rect x="32" y="58" width="16" height="30" fill="white" />
                  {/* Tie */}
                  <polygon points="38,60 42,60 41,80 39,80" fill="#c9a84c" />
                  {/* Lapels */}
                  <polygon points="32,58 40,70 32,75" fill="#1a3260" />
                  <polygon points="48,58 40,70 48,75" fill="#1a3260" />
                  {/* Neck */}
                  <rect x="34" y="48" width="12" height="12" rx="2" fill="#f5c5a3" />
                  {/* Head */}
                  <ellipse cx="40" cy="36" rx="18" ry="20" fill="#f5c5a3" />
                  {/* Hair */}
                  <ellipse cx="40" cy="18" rx="18" ry="10" fill="#2d1b00" />
                  <rect x="22" y="18" width="36" height="8" fill="#2d1b00" />
                  {/* Eyes */}
                  <ellipse cx="33" cy="35" rx="3" ry="3.5" fill="white" />
                  <ellipse cx="47" cy="35" rx="3" ry="3.5" fill="white" />
                  <circle cx="33" cy="36" r="1.8" fill="#2d1b00" />
                  <circle cx="47" cy="36" r="1.8" fill="#2d1b00" />
                  {/* Eyebrows */}
                  <path d="M29 30 Q33 28 37 30" stroke="#2d1b00" strokeWidth="1.5" fill="none" />
                  <path d="M43 30 Q47 28 51 30" stroke="#2d1b00" strokeWidth="1.5" fill="none" />
                  {/* Smile */}
                  <path d="M34 44 Q40 49 46 44" stroke="#c0785a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* Arms */}
                  <rect x="4" y="60" width="12" height="36" rx="6" fill="#0f1f3d" />
                  <rect x="64" y="60" width="12" height="36" rx="6" fill="#0f1f3d" />
                  {/* Hands */}
                  <ellipse cx="10" cy="98" rx="6" ry="5" fill="#f5c5a3" />
                  <ellipse cx="70" cy="98" rx="6" ry="5" fill="#f5c5a3" />
                  {/* Legs */}
                  <rect x="18" y="100" width="18" height="10" rx="3" fill="#0a1628" />
                  <rect x="44" y="100" width="18" height="10" rx="3" fill="#0a1628" />
                  {/* Shoes */}
                  <ellipse cx="27" cy="109" rx="10" ry="4" fill="#1a1a1a" />
                  <ellipse cx="53" cy="109" rx="10" ry="4" fill="#1a1a1a" />
                </>
              ) : (
                <>
                  {/* Body - formal blazer */}
                  <rect x="14" y="58" width="52" height="52" rx="6" fill="#1a3260" />
                  {/* Inner top */}
                  <rect x="30" y="58" width="20" height="28" fill="#e8c97a" />
                  {/* Blazer lapels */}
                  <polygon points="30,58 40,72 30,78" fill="#1a3260" />
                  <polygon points="50,58 40,72 50,78" fill="#1a3260" />
                  {/* Neck */}
                  <rect x="34" y="48" width="12" height="12" rx="2" fill="#f5c5a3" />
                  {/* Head */}
                  <ellipse cx="40" cy="36" rx="18" ry="20" fill="#f5c5a3" />
                  {/* Hair - long */}
                  <ellipse cx="40" cy="17" rx="19" ry="10" fill="#1a0a00" />
                  <rect x="21" y="17" width="6" height="28" rx="3" fill="#1a0a00" />
                  <rect x="53" y="17" width="6" height="28" rx="3" fill="#1a0a00" />
                  {/* Hair top */}
                  <ellipse cx="40" cy="20" rx="18" ry="8" fill="#2d1500" />
                  {/* Eyes */}
                  <ellipse cx="33" cy="35" rx="3" ry="3.5" fill="white" />
                  <ellipse cx="47" cy="35" rx="3" ry="3.5" fill="white" />
                  <circle cx="33" cy="36" r="1.8" fill="#2d1b00" />
                  <circle cx="47" cy="36" r="1.8" fill="#2d1b00" />
                  {/* Lashes */}
                  <path d="M30 32 Q33 30 36 32" stroke="#1a0a00" strokeWidth="1.2" fill="none" />
                  <path d="M44 32 Q47 30 50 32" stroke="#1a0a00" strokeWidth="1.2" fill="none" />
                  {/* Smile */}
                  <path d="M34 44 Q40 49 46 44" stroke="#c0785a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* Lips */}
                  <ellipse cx="40" cy="45" rx="4" ry="1.5" fill="#e07070" />
                  {/* Arms */}
                  <rect x="4" y="60" width="12" height="36" rx="6" fill="#1a3260" />
                  <rect x="64" y="60" width="12" height="36" rx="6" fill="#1a3260" />
                  {/* Hands */}
                  <ellipse cx="10" cy="98" rx="6" ry="5" fill="#f5c5a3" />
                  <ellipse cx="70" cy="98" rx="6" ry="5" fill="#f5c5a3" />
                  {/* Skirt */}
                  <path d="M18 86 L14 110 L66 110 L62 86 Z" fill="#0f1f3d" />
                  {/* Shoes */}
                  <ellipse cx="27" cy="109" rx="9" ry="4" fill="#1a1a1a" />
                  <ellipse cx="53" cy="109" rx="9" ry="4" fill="#1a1a1a" />
                </>
              )}
            </svg>
          </div>
          {/* Name badge */}
          <div className="mt-2 text-center">
            <span className="inline-block bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">
              {m.title}
            </span>
            <p className="text-gray-400 text-xs mt-1">{m.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
