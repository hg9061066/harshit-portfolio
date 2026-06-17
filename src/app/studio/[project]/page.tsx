import Link from 'next/link';
import Image from 'next/image';

export default function StudioProjectDeepDive({ params }: { params: { project: string } }) {
  // In a production build, you would fetch the specific project data using params.project
  // For this template, we will structure it around the Nanighar build.

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans pb-24 selection:bg-[#FF2A5F] selection:text-white">
      
      {/* Studio Navigation */}
      <nav className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#333333]">
        <Link href="/studio" className="text-sm font-semibold text-gray-400 hover:text-[#FF2A5F] transition-colors flex items-center gap-2">
          &larr; Back to Studio
        </Link>
        <div className="flex items-center gap-6">
          <span className="font-mono text-sm tracking-widest text-gray-500 uppercase">
            // Case Study
          </span>
          <a
            href="https://drive.google.com/file/d/1MLmJm_WRpxBKYGKIxDXYwCg1Y7Fxks0k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[#333333] rounded-full text-gray-300 hover:text-white hover:border-[#FF2A5F] transition-all"
          >
            Resume
          </a>
        </div>
      </nav>

      <main className="w-full max-w-5xl mx-auto px-6 mt-16 space-y-20 animate-in fade-in duration-700 ease-out">
        <article>
        {/* Header & Metadata */}
        <header className="space-y-8">
          <h1 className="font-studioHeading text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
            Nanighar <br/> <span className="text-[#FF2A5F]">Web Platform.</span>
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[#333333] font-mono text-sm">
            <div>
              <p className="text-gray-500 mb-1 uppercase tracking-widest text-xs">Role</p>
              <p className="text-white">Full-Stack Architect</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1 uppercase tracking-widest text-xs">Timeline</p>
              <p className="text-white">2026</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1 uppercase tracking-widest text-xs">Core Stack</p>
              <p className="text-[#FF2A5F]">Next.js, Tailwind, Vercel</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1 uppercase tracking-widest text-xs">Live Link</p>
              <a href="#" className="text-white hover:text-[#FF2A5F] underline underline-offset-4 transition-colors">
                View Deployment &#8599;
              </a>
            </div>
          </div>
        </header>

        {/* Cinematic Hero Image */}
        <section className="relative w-full aspect-video border border-[#222222] rounded-xl overflow-hidden group shadow-2xl">
          <Image 
            src="/projects/nanighar.jpg" // In a real build, this comes dynamically from the data
            alt="Nanighar Dashboard UI"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority // Tells Next.js to load this image instantly for above-the-fold content
          />
          {/* Subtle vignette overlay to blend the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_#0A0A0A_120%)] pointer-events-none z-10" />
        </section>

        {/* The Narrative Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column: The Challenge */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-sm font-mono tracking-widest text-[#FF2A5F] uppercase border-l-2 border-[#FF2A5F] pl-4">
              01. The Architecture
            </h2>
          </div>
          
          {/* Right Column: Execution Details */}
          <div className="md:col-span-8 space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              The primary objective for the Nanighar platform was to architect a fluid, high-performance web application capable of handling dynamic data rendering without sacrificing SEO or initial load times. 
            </p>
            <p>
              By utilizing the Next.js App Router, I implemented hybrid rendering strategies—leveraging Server-Side Rendering (SSR) for real-time inventory and data grids, while relying on Static Site Generation (SSG) for marketing and narrative pages.
            </p>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111111] border border-[#222222] p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Mobile Conversion Pathway</h3>
            <p className="text-gray-400">
              Designed the component tree to inherently support Progressive Web App (PWA) standards, laying the exact groundwork required for a seamless wrapper conversion into native iOS and Android applications.
            </p>
          </div>
          <div className="bg-[#111111] border border-[#222222] p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Fluid State Management</h3>
            <p className="text-gray-400">
              Abstracted complex UI states away from the main rendering thread, ensuring that interactive components like data tables and modal overlays execute at 60fps without layout shifts.
            </p>
          </div>
        </section>

        </article> {/* <-- YOU ARE MISSING THIS TAG */}
      </main>
    </div>
  );
}
