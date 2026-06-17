export default function StudioPage() {
  return (
    <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      {/* Header Section */}
        <header className="space-y-6">
          <h1 className="font-studioHeading text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
            Engineering <br/> <span className="text-[#FF2A5F]">Execution.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
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
              {/* Timeline Node */}
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

        {/* 02. The Visual Grid: Projects & Capabilities */}
        <section>
          <h2 className="text-sm font-mono tracking-widest text-[#FF2A5F] mb-12 uppercase border-b border-[#333333] pb-4">
            02. Full-Stack Web Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Nanighar Project */}
            <div className="group relative overflow-hidden rounded-xl border border-[#222222] bg-[#111111] aspect-[4/5] hover:border-[#FF2A5F] transition-colors duration-500 flex flex-col justify-end p-8 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <div className="z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-mono text-xs text-[#FF2A5F] mb-2 block">Next.js • UI/UX Architecture</span>
                <h3 className="text-2xl font-bold text-white mb-2">Nanighar Web Platform</h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  A high-performance full-stack web build architected with Next.js, focusing on fluid routing, scalable component design, and seamless mobile application conversion pathways.
                </p>
              </div>
            </div>

            {/* StartupSaathi Project */}
            <div className="group relative overflow-hidden rounded-xl border border-[#222222] bg-[#111111] aspect-[4/5] hover:border-[#FF2A5F] transition-colors duration-500 flex flex-col justify-end p-8 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <div className="z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-mono text-xs text-[#FF2A5F] mb-2 block">Web Application • Ecosystem</span>
                <h3 className="text-2xl font-bold text-white mb-2">StartupSaathi</h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  A comprehensive digital platform designed to streamline networking, resource tracking, and operational visibility within the startup ecosystem.
                </p>
              </div>
            </div>

            {/* AstroSite Project */}
            <div className="group relative overflow-hidden rounded-xl border border-[#222222] bg-[#111111] aspect-[4/5] hover:border-[#FF2A5F] transition-colors duration-500 flex flex-col justify-end p-8 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <div className="z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-mono text-xs text-[#FF2A5F] mb-2 block">Interactive UI • Data Rendering</span>
                <h3 className="text-2xl font-bold text-white mb-2">The AstroSite</h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  A visually immersive interface built to handle dynamic data rendering, featuring highly interactive front-end components and fluid state management.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 03. Engineering Stack & Certifications */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Stack Canvas */}
          <div className="lg:col-span-2 bg-[#111111] border border-[#222222] p-8 rounded-xl hover:border-[#333333] transition-colors">
            <h2 className="text-sm font-mono tracking-widest text-gray-500 mb-8 uppercase">Engineering Stack</h2>
            <div className="flex flex-wrap gap-3">
              {['Python', 'Java', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Flower (Flwr)', 'NumPy', 'MATLAB', 'AWS', 'GCP', 'Docker', 'Git', 'React', 'Next.js', 'OpenCV', 'Raspberry Pi', 'ESP32'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-full text-sm font-mono text-gray-300 hover:text-white hover:border-[#FF2A5F] transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud Certs */}
          <div className="bg-[#111111] border border-[#222222] p-8 rounded-xl hover:border-[#333333] transition-colors flex flex-col justify-center">
             <h2 className="text-sm font-mono tracking-widest text-gray-500 mb-6 uppercase">Cloud & Ecosystem</h2>
             <ul className="space-y-4 text-sm text-gray-400 font-mono">
               <li className="flex justify-between items-center border-b border-[#222] pb-2">
                 <span className="text-white">AWS Certifications</span>
                 <span className="text-[#FF2A5F]">07+</span>
               </li>
               <li className="flex justify-between items-center border-b border-[#222] pb-2">
                 <span className="text-white">GCP Badges</span>
                 <span className="text-[#FF2A5F]">10+</span>
               </li>
               <li className="flex justify-between items-center border-b border-[#222] pb-2">
                 <span className="text-white">Microsoft Learn</span>
                 <span className="text-[#FF2A5F]">15+</span>
               </li>
             </ul>
          </div>

        </section>

    </div>
  );
}