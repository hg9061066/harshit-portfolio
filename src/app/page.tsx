import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen w-full font-sans overflow-x-hidden">

      {/* LEFT SIDE: THE LAB */}
      <Link
        href="/lab"
        className="group relative flex w-full md:w-1/2 flex-col justify-center items-center bg-[#FAFAFA] text-[#111111] transition-all duration-500 md:hover:w-[60%] border-b md:border-b-0 md:border-r border-[#EAEAEA] min-h-[50vh] md:min-h-screen p-8"
      >
        <div className="z-10 text-center transition-transform duration-300 group-hover:scale-105">
          <h1 className="font-labHeading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The Lab
          </h1>
          <p className="font-labBody text-base md:text-lg max-w-xs mx-auto text-gray-600">
            Distributed Systems, Federated Learning, &amp; Deep Tech Architectures.
          </p>
          <div className="mt-8 text-xs md:text-sm font-mono text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            &gt; My Researcher Side
          </div>
        </div>

        {/* Subtle hover background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Link>

      {/* RIGHT SIDE: THE STUDIO */}
      <Link
        href="/studio"
        className="group relative flex w-full md:w-1/2 flex-col justify-center items-center bg-[#0A0A0A] text-[#EDEDED] transition-all duration-500 md:hover:w-[60%] min-h-[50vh] md:min-h-screen p-8"
      >
        <div className="z-10 text-center transition-transform duration-300 group-hover:scale-105">
          <h1 className="font-studioHeading text-4xl md:text-5xl font-bold tracking-wide mb-4 text-[#FF2A5F]">
            The Studio
          </h1>
          <p className="font-labBody text-base md:text-lg max-w-xs mx-auto text-gray-400">
            Digital Narratives, Workflow Automation, &amp; Full-Stack Builds.
          </p>
          <div className="mt-8 text-xs md:text-sm font-mono text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            &gt; My Engineer Side
          </div>
        </div>

        {/* Subtle hover background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF2A5F]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Link>

    </main>
  );
}