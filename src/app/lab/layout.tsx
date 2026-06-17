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
        <a href="/" className="text-sm font-semibold hover:text-[#0055FF] transition-colors">
          Return to Index &rarr;
        </a>
      </nav>

      <main className="w-full max-w-4xl mx-auto px-6 mt-16">
        {children}
      </main>
    </div>
  );
}