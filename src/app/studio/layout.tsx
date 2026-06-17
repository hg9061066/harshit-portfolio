import Link from 'next/link';

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans pb-20 selection:bg-[#FF2A5F] selection:text-white">
      {/* Studio Navigation */}
      <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#333333]">
        <span className="font-mono text-sm tracking-widest text-gray-500 uppercase">
          // The Studio
        </span>
        <Link href="/" className="text-sm font-semibold text-gray-300 hover:text-[#FF2A5F] transition-colors">
          Return to Index &rarr;
        </Link>
      </nav>

      <main className="w-full max-w-6xl mx-auto px-6 mt-16">
        {children}
      </main>
    </div>
  );
}
