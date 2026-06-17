import Link from 'next/link';
import Image from 'next/image'; // 1. Import Next.js Image component

// 1. The Data Structure
// Simply leave the 'link' property empty ("") to automatically trigger the Maintenance UI.
const projectsData = [
  {
    title: "Nanighar Web Platform",
    category: "Consumer Platform • Next.js Engine", // Updated
    description: "A high-performance full-stack web build architected with Next.js, focusing on fluid routing, scalable component design, and seamless mobile application conversion pathways.",
    link: "https://nanighar-vercel.vercel.app/", // Has link -> Shows LIVE
    image: "/projects/nanighar.jpg" 
  },
  {
    title: "StartupSaathi",
    category: "B2B Platform • Operational Visibility", // Updated
    description: "A comprehensive digital platform designed to streamline networking, resource tracking, and operational visibility. Currently undergoing infrastructure upgrades.",
    link: "", // Empty link -> Shows UNDER MAINTENANCE
    image: "/projects/startupsaathi.jpg"
  },
  {
    title: "The AstroSite",
    category: "Immersive Interface • Real-Time Rendering", // Updated
    description: "A visually immersive interface built to handle dynamic data rendering, featuring highly interactive front-end components and fluid state management.",
    link: "", // Has link -> Shows LIVE
    image: "/projects/astrosite.jpg"
  }
];

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans pb-24 selection:bg-[#FF2A5F] selection:text-white">

      {/* THIS SHOULD BE THE ONLY NAV ON THE PAGE */}
      <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#333333]">
        <span className="font-mono text-sm tracking-widest text-gray-500 uppercase">
          // The Studio
        </span>
        <div className="flex gap-8 items-center">
          <a
            href="https://drive.google.com/file/d/1MLmJm_WRpxBKYGKIxDXYwCg1Y7Fxks0k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[#333333] rounded-full text-gray-300 hover:text-white hover:border-[#FF2A5F] transition-all"
          >
            Resume
          </a>
          <Link href="/contact" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#FF2A5F] hover:text-white transition-colors">
            Index &rarr;
          </Link>
        </div>
      </nav>

      <main className="w-full max-w-6xl mx-auto px-6 mt-8 space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">

        {/* Header Section */}
        <header className="relative space-y-6 pt-4 pb-8">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_0%_50%,#000_70%,transparent_100%)] opacity-30 -z-10" />
          <div className="absolute top-10 left-0 w-72 h-72 bg-[#FF2A5F] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse -z-10" />

          <div className="flex items-center gap-3 mb-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2A5F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF2A5F]"></span>
            </span>
            <span className="font-mono text-xs tracking-widest text-[#FF2A5F] uppercase">
              System Online // Deployment Ready
            </span>
          </div>

          <h1 className="font-studioHeading text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] drop-shadow-lg">
            Engineering <span className="text-[#FF2A5F]">Execution.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-none leading-relaxed relative z-10">
            A chronological mapping of professional experience, full-stack systemic capabilities, and interactive web architecture.
          </p>
        </header>

        {/* 01. Professional Timeline */}
        <section>
          <h2 className="text-sm font-mono tracking-widest text-[#FF2A5F] mb-12 uppercase border-b border-[#333333] pb-4">
            01. Professional Experience
          </h2>

          <div className="space-y-16 border-l border-[#333333] pl-8 md:pl-12 relative">
            {/* IISER Role */}
            <div className="relative group">
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 h-3 w-3 rounded-full bg-[#FF2A5F] ring-4 ring-[#0A0A0A] group-hover:scale-150 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-1">Research Intern</h3>
              <p className="font-mono text-xs text-gray-500 mb-4">Indian Institute of Science Education and Research (IISER) • May 2026 – Present</p>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                Spearheading the core development of a federated learning simulator. Architecting privacy-preserving, hierarchical frameworks specifically tuned for resource-constrained Edge AI environments. Optimizing deep learning backbones (ResNet, CNNs) to strike the critical balance between local computational efficiency and global model convergence.
              </p>
            </div>

            {/* Istanbul Aydin Role */}
            <div className="relative group">
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 h-3 w-3 rounded-full bg-[#333333] ring-4 ring-[#0A0A0A] group-hover:bg-[#FF2A5F] transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-white mb-1">Research Assistant</h3>
              <p className="font-mono text-xs text-gray-500 mb-4">Istanbul Aydin University / VIT Bhopal (Remote) • Dec 2024 – Dec 2025</p>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                Engineered a dual-component machine learning framework (Random Forest + Facebook Prophet) for coastal water quality forecasting, securing an F1-Score of 0.992. Designed a multi-modal hybrid ensemble processing distinct socio-economic and climate data streams to predict coastal vulnerability.
              </p>
            </div>
          </div>
        </section>

        {/* 02. The Visual Grid: Programmatic Projects */}
        <section className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-mono tracking-widest text-[#FF2A5F] mb-12 uppercase border-b border-[#333333] pb-4">
            02. Full-Stack Web Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {projectsData.map((project, index) => {
              const isLive = Boolean(project.link);

              if (isLive) {
                return (
                  <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl border border-[#222222] bg-[#111111] aspect-[4/5] hover:border-[#FF2A5F] transition-colors duration-500 flex flex-col justify-between p-8 cursor-pointer">
                    
                    {/* 3. Inject the Background Image */}
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-700 z-0"
                    />
                    
                    {/* Gradient Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
                    
                    {/* Live Badge */}
                    <div className="flex justify-end z-20">
                      <div className="flex items-center gap-2 bg-[#FF2A5F]/10 border border-[#FF2A5F]/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2A5F] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF2A5F]"></span>
                        </span>
                        <span className="text-[10px] font-mono text-[#FF2A5F] uppercase tracking-widest">Live System</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="font-mono text-xs text-[#FF2A5F] mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        {project.title}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm">&#8599;</span>
                      </h3>
                      <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                      </p>
                    </div>
                  </a>
                );
              }

              // Return the Maintenance UI if link is empty
              return (
                <div key={index} className="group relative overflow-hidden rounded-xl border border-[#222222] bg-[#111111] aspect-[4/5] flex flex-col justify-between p-8 cursor-not-allowed grayscale-[80%] hover:grayscale-0 transition-all duration-500">
                  
                  {/* Background Image for Maintenance Card */}
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-20 transition-opacity duration-700 z-0"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/40 z-10" />
                  
                  {/* Maintenance Badge */}
                  <div className="flex justify-end z-20">
                    <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">Under Maintenance</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-mono text-xs text-gray-500 mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-gray-300 mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 03. Credentials, Leadership, & Engineering Stack */}
        <section className="space-y-6">
          
          <h2 className="text-sm font-mono tracking-widest text-[#FF2A5F] mb-8 uppercase border-b border-[#333333] pb-4">
            03. Systems Capabilities & Proof of Work
          </h2>

          {/* ROW 1: Cloud & Ecosystem (Certifications) */}
          <div className="bg-[#111111] border border-[#222222] p-8 rounded-xl hover:border-[#333333] transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
             <div className="md:w-1/3">
               <h2 className="text-sm font-mono tracking-widest text-gray-500 mb-2 uppercase">Verified Credentials</h2>
               <h3 className="text-2xl font-bold text-white mb-6">Cloud & Ecosystem</h3>
               <Link href="/studio/certifications" className="inline-block w-full max-w-[250px] text-center font-mono text-xs uppercase tracking-widest border border-[#333333] py-3 rounded-md text-gray-300 hover:text-white hover:border-[#FF2A5F] hover:bg-[#FF2A5F]/10 transition-all">
                 View Complete Vault &rarr;
               </Link>
             </div>
             
             <div className="md:w-2/3 w-full border-t md:border-t-0 md:border-l border-[#333333] pt-6 md:pt-0 md:pl-8">
               <div className="flex flex-wrap gap-3">
                 {['AWS', 'Google Cloud Platform', 'Google Developers', 'Microsoft Learn', 'NVIDIA Deep Learning', 'Infosys SpringBoard'].map(provider => (
                   <span key={provider} className="px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-sm text-sm font-mono text-gray-300">
                     {provider}
                   </span>
                 ))}
               </div>
               <p className="mt-6 text-sm text-gray-500 font-mono italic">
                 // Verified certifications and technical training across global cloud and AI ecosystems.
               </p>
             </div>
          </div>

          {/* ROW 2: Operations & Leadership (Bridge to Dedicated Page) */}
          <div className="bg-[#111111] border border-[#222222] p-8 rounded-xl hover:border-[#333333] transition-colors flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="md:w-1/3">
              <h2 className="text-sm font-mono tracking-widest text-gray-500 mb-2 uppercase">Leadership & Ops</h2>
              <h3 className="text-2xl font-bold text-white mb-6">Ecosystem Management</h3>
              <Link href="/studio/leadership" className="inline-block w-full max-w-[250px] text-center font-mono text-xs uppercase tracking-widest border border-[#333333] py-3 rounded-md text-gray-300 hover:text-white hover:border-[#FF2A5F] hover:bg-[#FF2A5F]/10 transition-all">
                View Operational Log &rarr;
              </Link>
            </div>
            
            <div className="md:w-2/3 w-full border-t md:border-t-0 md:border-l border-[#333333] pt-6 md:pt-0 md:pl-8 text-gray-400 text-sm leading-relaxed">
              <h4 className="text-white text-lg font-bold mb-2">15+ Major Summits & TechFests</h4>
              <p className="mb-6">
                Technical execution requires operational context. Beyond system architecture, I have orchestrated scaling operational capacity—from directing 100+ international delegates at IHEF to managing complex vendor networks and backstage logistics for the flagship JHU x VIT hackathon.
              </p>
              
              <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest text-[#FF2A5F]">
                <span>// Cross-functional Leadership</span>
                <span>// Crisis Communication</span>
                <span>// Financial Oversight</span>
              </div>
            </div>
          </div>

          {/* ROW 3: Engineering Stack (Moved to bottom) */}
          <div className="bg-[#111111] border border-[#222222] p-8 rounded-xl hover:border-[#333333] transition-colors flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="md:w-1/3">
              <h2 className="text-sm font-mono tracking-widest text-gray-500 mb-2 uppercase">Core Capabilities</h2>
              <h3 className="text-2xl font-bold text-white">Engineering Stack</h3>
            </div>
            
            <div className="md:w-2/3 w-full border-t md:border-t-0 md:border-l border-[#333333] pt-6 md:pt-0 md:pl-8 flex flex-wrap gap-3">
              {['Python', 'Java', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Flower (Flwr)', 'NumPy', 'MATLAB', 'AWS', 'GCP', 'Docker', 'Git', 'React', 'Next.js', 'OpenCV', 'Raspberry Pi', 'ESP32'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-full text-sm font-mono text-gray-300 hover:text-white hover:border-[#FF2A5F] transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}