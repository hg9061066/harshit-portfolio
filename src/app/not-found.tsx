import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-mono flex flex-col items-center justify-center selection:bg-[#FF2A5F] selection:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 -z-10" />
      
      <h1 className="text-9xl font-black text-[#FF2A5F] tracking-tighter mb-4 animate-pulse">404</h1>
      <h2 className="text-2xl uppercase tracking-widest text-gray-500 mb-8">// System Route Not Found</h2>
      <p className="text-gray-400 mb-12 max-w-md text-center">
        The architectural directory you are attempting to access does not exist or has been redacted.
      </p>
      
      <Link 
        href="/" 
        className="px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors"
      >
        Return to Core Index
      </Link>
    </div>
  );
}
