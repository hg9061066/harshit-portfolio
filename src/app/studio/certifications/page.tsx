import Link from 'next/link';

// 1. The Expanded Authenticity Data (Now with AWS Skill Builder)
const verifiedProfiles = [
  {
    platform: "Credly Registry",
    ecosystem: "AWS & Industry Standards",
    stats: "08+ Verified Certs",
    description: "Verified certifications including AWS Solutions Architect and Machine Learning specializations.",
    url: "https://www.credly.com/users/harshit-gupta-hg/badges/credly",
    accent: "text-[#FF9900]",
    badgeColor: "bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20"
  },
  {
    platform: "AWS Skill Builder",
    ecosystem: "AWS Cloud Training",
    stats: "Official Course Badges",
    description: "Verified completions of official AWS learning plans, digital training courses, and cloud architecture deep dives.",
    url: "https://skillsprofile.skillbuilder.aws/user/harshit-gupta",
    accent: "text-[#FF9900]",
    badgeColor: "bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20"
  },
  {
    platform: "Microsoft Learn",
    ecosystem: "Azure AI & Ecosystem",
    stats: "25+ Earned Badges",
    description: "Public transcript validating technical depth in Azure AI (AI-900) and Data Engineering (DP-900).",
    url: "https://learn.microsoft.com/en-us/users/me/achievements#badges-section",
    accent: "text-[#00A4EF]",
    badgeColor: "bg-[#00A4EF]/10 text-[#00A4EF] border-[#00A4EF]/20"
  },
  {
    platform: "Google Cloud Skills",
    ecosystem: "GCP Infrastructure",
    stats: "10+ Cloud Badges",
    description: "Official Cloud Skills Boost profile focusing on GCP Infrastructure, ML, and Data Engineering paths.",
    url: "https://www.skills.google/profile/badges",
    accent: "text-[#34A853]",
    badgeColor: "bg-[#34A853]/10 text-[#34A853] border-[#34A853]/20"
  },
  {
    platform: "Google Dev Profile 01",
    ecosystem: "Ecosystem & Web",
    stats: "08+ Ecosystem Badges",
    description: "Verified badges for Web technologies, Chrome, and community leadership contributions.",
    url: "https://me.developers.google.com/u/me",
    accent: "text-[#4285F4]",
    badgeColor: "bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20"
  },
  {
    platform: "Google Dev Profile 02",
    ecosystem: "Mobile & Firebase",
    stats: "08+ Specialized Badges",
    description: "Verified achievements in Android development, Firebase architecture, and Flutter UI components.",
    url: "https://me.developers.google.com/u/116034872941669387004",
    accent: "text-[#EA4335]",
    badgeColor: "bg-[#EA4335]/10 text-[#EA4335] border-[#EA4335]/20"
  }
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans pb-24 selection:bg-[#FF2A5F] selection:text-white">

      <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#333333]">
        <span className="font-mono text-sm tracking-widest text-gray-500 uppercase">
          // The Vault
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://drive.google.com/file/d/1MLmJm_WRpxBKYGKIxDXYwCg1Y7Fxks0k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[#333333] rounded-full text-gray-300 hover:text-white hover:border-[#FF2A5F] transition-all"
          >
            Resume
          </a>
          <Link href="/studio" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
            &larr; Back to Studio
          </Link>
        </div>
      </nav>

      <main className="w-full max-w-6xl mx-auto px-6 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">

        <header className="mb-16">
          <h1 className="font-studioHeading text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-6">
            Verified <span className="text-[#FF2A5F]">Credentials.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            All technical achievements and ecosystem badges are cryptographically verified directly through their official issuing platforms to ensure absolute data integrity.
          </p>
        </header>

        {/* The Wall of Proof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* The 6 Technical Profiles */}
          {verifiedProfiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border border-[#222222] bg-[#111111] p-8 rounded-xl transition-all duration-500 hover:border-white/20 hover:bg-[#151515]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h2 className={`font-mono text-xs tracking-widest uppercase ${profile.accent}`}>
                    {profile.ecosystem}
                  </h2>
                  <span className={`h-2 w-2 rounded-full animate-pulse ${profile.accent.replace('text', 'bg')}`}></span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {profile.platform}
                </h3>

                <div className={`inline-block font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-md border mb-6 ${profile.badgeColor}`}>
                  {profile.stats}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {profile.description}
                </p>
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full py-4 bg-[#0A0A0A] border border-[#222222] rounded-lg text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-white hover:border-[#FF2A5F] transition-all"
              >
                Verify Badge Set
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  &#8599;
                </span>
              </a>
            </div>
          ))}

          {/* FINAL BLOCK: Soft Skills / Operations Bridge */}
          <div className="flex flex-col md:flex-row justify-between items-center border border-[#222222] bg-[#111111] p-8 rounded-xl lg:col-span-3 border-dashed mt-4">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-4">
                Soft Skills & Ops
              </h2>
              <h3 className="text-3xl font-bold text-white mb-4">
                Leadership Registry
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Verification of cross-functional leadership and operational management for 15+ high-impact university tech events.
              </p>
            </div>
            
            <div className="md:w-1/2 flex flex-col items-end w-full">
              <div className="w-full max-w-sm space-y-3 mb-6">
                {['Cross-Functional Communication', 'Crisis Management & Resolution', 'Logistics & Resource Allocation'].map(skill => (
                  <div key={skill} className="flex justify-between text-xs font-mono text-gray-400 border-b border-[#222] pb-2">
                    <span>{skill}</span>
                    <span className="text-[#FF2A5F]">Verified</span>
                  </div>
                ))}
              </div>

              {/* UPDATED: Now routes directly to the new dedicated page */}
              <Link 
                href="/studio/leadership" 
                className="group flex items-center justify-center gap-2 w-full max-w-sm py-4 bg-transparent border border-[#333333] rounded-lg text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-white hover:border-white transition-all"
              >
                View Leadership History
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
