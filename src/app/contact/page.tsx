import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans selection:bg-[#0055FF] selection:text-white flex flex-col relative overflow-hidden">

      {/* Subtle Anthology Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#0055FF] blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#FF2A5F] blur-[150px] mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="w-full max-w-4xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#333333] z-10">
        <span className="font-mono text-sm tracking-widest text-gray-500 uppercase">
          // INITIATE TRANSMISSION
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
          <Link href="/" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
            Return to Index &rarr;
          </Link>
        </div>
      </nav>

      <main className="w-full max-w-4xl mx-auto px-6 mt-20 flex-grow flex flex-col md:flex-row gap-16 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out z-10">

        {/* Left Column: Typography & Links */}
        <div className="md:w-1/2 space-y-12">
          <header>
            <h1 className="font-studioHeading text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-6">
              Let's <br /> Build.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed font-mono text-sm">
              Whether it is a deep-tech federated learning architecture or a high-performance web platform, I am always open to discussing new systems, research, and engineering roles.
            </p>
          </header>

          {/* Direct Links */}
          <div className="space-y-6 font-mono text-sm">
            <div>
              <p className="text-gray-600 mb-2 uppercase tracking-widest text-xs">Direct Comms</p>
              <a href="mailto:hg9061066@gmail.com" className="text-xl text-white hover:text-[#0055FF] transition-colors border-b border-transparent hover:border-[#0055FF]">
                hg9061066@gmail.com
              </a>
            </div>

            <div className="flex gap-6 pt-4 border-t border-[#333333]">
              <a href="https://linkedin.com/in/harshit-gupta-hg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF2A5F] transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/hg9061066" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF2A5F] transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="md:w-1/2">
          {/* Replace 'YOUR_FORM_ENDPOINT' with a Formspree URL */}
          <form
            action="https://formspree.io/f/xpqenvgw"
            method="POST"
            className="space-y-6 bg-[#111111] border border-[#222222] p-8 rounded-xl shadow-2xl"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="font-mono text-xs text-gray-500 uppercase tracking-widest">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#0055FF] transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-xs text-gray-500 uppercase tracking-widest">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#0055FF] transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-xs text-gray-500 uppercase tracking-widest">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FF2A5F] transition-colors resize-none"
                placeholder="Let's discuss system architecture..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full font-mono text-sm uppercase tracking-widest bg-white text-black py-4 rounded-md hover:bg-gray-200 transition-colors font-bold"
            >
              Send Message
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}
