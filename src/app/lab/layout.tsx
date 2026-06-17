import Link from 'next/link';

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-labBody selection:bg-[#0055FF] selection:text-white pb-20">
      {/* Minimalist Top Navigation */}
      <nav className="w-full max-w-4xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#EAEAEA]">
        <span className="font-mono text-sm tracking-widest text-gray-500 uppercase">
          // The Lab
        </span>
        <div className="flex gap-8 items-center">
          <a
            href="https://drive.google.com/file/d/1MLmJm_WRpxBKYGKIxDXYwCg1Y7Fxks0k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[#111111] rounded-full text-[#111111] hover:bg-[#111111] hover:text-white transition-all"
          >
            Resume
          </a>
          <Link href="/contact" className="text-sm font-semibold hover:text-[#0055FF] transition-colors">
            Contact
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#0055FF] hover:text-[#0033CC] transition-colors">
            Index &rarr;
          </Link>
        </div>
      </nav>

      <main className="w-full max-w-4xl mx-auto px-6 mt-16">
        {children}
      </main>
    </div>
  );
}