import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex h-screen w-full overflow-hidden font-sans">
      
      {/* THE CENTRAL BRANDING (Mix Blend Magic) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center mix-blend-difference text-white text-center w-full px-4">
        <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-[0.4em] font-bold">
          Harshit Gupta
        </h2>
        <p className="font-mono text-xs md:text-sm tracking-[0.2em] mt-3 opacity-90 uppercase">
          AI Researcher <span className="mx-2">||</span> Systems Engineer
        </p>
      </div>

      {/* LEFT SIDE: THE LAB */}
      <Link 
        href="/lab" 
        className="group relative flex w-1/2 flex-col justify-center items-center bg-[#FAFAFA] text-[#111111] transition-all duration-700 ease-in-out hover:w-[65%] border-r border-[#EAEAEA]"
      >
        <div className="z-10 text-center transition-transform duration-500 group-hover:scale-105">
          <h1 className="font-labHeading text-5xl md:text-7xl font-bold tracking-tight mb-4 h-16 md:h-24 flex items-center justify-center">
            The Lab.
          </h1>
          <p className="font-labBody text-lg max-w-xs mx-auto text-gray-600 hidden md:block h-16 md:h-20">
            Distributed Systems, Federated Learning, &amp; Deep Tech Architectures.
          </p>
          <div className="mt-8 text-sm font-mono text-gray-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100 h-6 flex items-center justify-center">
            &gt; View Research &amp; Patents
          </div>
        </div>
        
        {/* Subtle hover background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </Link>

      {/* RIGHT SIDE: THE STUDIO */}
      <Link 
        href="/studio" 
        className="group relative flex w-1/2 flex-col justify-center items-center bg-[#0A0A0A] text-[#EDEDED] transition-all duration-700 ease-in-out hover:w-[65%]"
      >
        <div className="z-10 text-center transition-transform duration-500 group-hover:scale-105">
          <h1 className="font-studioHeading text-5xl md:text-7xl font-bold tracking-wide mb-4 text-[#FF2A5F] h-16 md:h-24 flex items-center justify-center">
            THE STUDIO.
          </h1>
          <p className="font-labBody text-lg max-w-xs mx-auto text-gray-400 hidden md:block h-16 md:h-20">
            Full-Stack Architecture, Digital Narratives, &amp; Execution.
          </p>
          <div className="mt-8 text-sm font-mono text-gray-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 h-6 flex items-center justify-center">
            [ Explore Web Builds &amp; Timeline ]
          </div>
        </div>

        {/* Subtle hover background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF2A5F]/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </Link>

    </main>
  );
}