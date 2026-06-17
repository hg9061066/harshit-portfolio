import Link from 'next/link';

// 1. The Operational Data Structure
const operationalHistory = [
  {
    title: "International Higher Education Fair (IHEF)",
    role: "Event Head (2026) // On-Ground Ops Lead (2025)",
    metrics: [
      { label: "International Delegates", value: "100+" },
      { label: "Task Force Volunteers", value: "30+" }
    ],
    description: "Transitioned from crowd management to leading the complete event trajectory. Orchestrated seamless cross-cultural summit operations, managing real-time logistics for international academic delegates.",
    accent: "border-[#FF2A5F]"
  },
  {
    title: "AdVITya Sports & TechFest",
    role: "Lead: Hospitality & Celebrity Mgmt (2025 – 2026)",
    metrics: [
      { label: "Core Team Managed", value: "15" },
      { label: "Flagship Fest", value: "AdVITya" }
    ],
    description: "Directed end-to-end execution for the university's flagship fest. Managed high-stakes vendor financial reconciliation, negotiated with multiple celebrity managers, and coordinated secure on-ground stage logistics.",
    accent: "border-[#333333]"
  },
  {
    title: "HealthHack (JHU x VIT Bhopal)",
    role: "Stage & Backstage Manager (2025 – 2026)",
    metrics: [
      { label: "International Partners", value: "Johns Hopkins" },
      { label: "Years Led", value: "02" }
    ],
    description: "Steward of technical stage operations for an exclusive international hackathon. Responsible for high-pressure live-event execution, audio-visual coordination, and real-time crisis communication.",
    accent: "border-[#333333]"
  },
  {
    title: "TiHan Drone Workshop (IIT-H)",
    role: "Project Manager & Event Lead",
    metrics: [
      { label: "Funding Institution", value: "IIT Hyderabad" },
      { label: "Duration", value: "2 Days" }
    ],
    description: "End-to-end operational manager for a highly technical drone workshop. Handled funding compliance, technical hardware setup, and participant lifecycle management.",
    accent: "border-[#333333]"
  }
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans pb-24 selection:bg-[#FF2A5F] selection:text-white">

      {/* Navigation */}
      <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#333333]">
        <span className="font-mono text-sm tracking-widest text-gray-500 uppercase">
          // Operational Command
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

        {/* Header */}
        <header className="mb-20">
          <h1 className="font-studioHeading text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-6">
            Ecosystem <br /> <span className="text-[#FF2A5F]">Management.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Technical execution requires operational context. A chronological mapping of cross-functional leadership, financial oversight, and high-stakes event execution.
          </p>
        </header>

        {/* Global Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-[#333333] py-8 mb-20">
          {[
            { label: "Major Summits", value: "15+" },
            { label: "Max Delegates", value: "100+" },
            { label: "Max Team Size", value: "30+" },
            { label: "Years Active", value: "03" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl font-black text-white">{stat.value}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* The Mission Logs (Case Studies) */}
        <div className="space-y-12">
          {operationalHistory.map((mission, index) => (
            <section
              key={index}
              className={`bg-[#111111] border border-[#222222] p-8 md:p-12 rounded-xl border-l-4 ${mission.accent} hover:border-l-[#FF2A5F] transition-colors`}
            >
              <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">

                {/* Core Narrative */}
                <div className="lg:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{mission.title}</h2>
                  <h3 className="font-mono text-sm tracking-widest text-[#FF2A5F] uppercase mb-6">{mission.role}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {mission.description}
                  </p>
                </div>

                {/* Specific Metrics */}
                <div className="lg:w-1/3 flex flex-row lg:flex-col gap-8 w-full border-t lg:border-t-0 lg:border-l border-[#333333] pt-8 lg:pt-0 lg:pl-8">
                  {mission.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <span className="block text-2xl font-bold text-white mb-1">{metric.value}</span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{metric.label}</span>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* Core Competencies Footer */}
        <div className="mt-20 pt-10 border-t border-[#333333]">
          <h2 className="font-mono text-xs tracking-widest text-gray-500 mb-6 uppercase text-center">
            Verified Operational Competencies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 font-mono text-xs uppercase tracking-widest text-gray-300">
            <span className="px-4 py-2 border border-[#333] rounded-full hover:border-[#FF2A5F] transition-colors">Stakeholder Negotiation</span>
            <span className="px-4 py-2 border border-[#333] rounded-full hover:border-[#FF2A5F] transition-colors">Crisis Communication</span>
            <span className="px-4 py-2 border border-[#333] rounded-full hover:border-[#FF2A5F] transition-colors">Vendor Finance</span>
            <span className="px-4 py-2 border border-[#333] rounded-full hover:border-[#FF2A5F] transition-colors">Live-Stage Orchestration</span>
            <span className="px-4 py-2 border border-[#333] rounded-full hover:border-[#FF2A5F] transition-colors">Task Force Mobilization</span>
          </div>
        </div>

      </main>
    </div>
  );
}
