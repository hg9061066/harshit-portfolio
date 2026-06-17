import Accordion from "../../components/lab/Accordion";

export default function LabPage() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">

      {/* Title Block (arXiv Style) */}
      <header className="space-y-4 mb-8">
        <h1 className="font-labHeading text-4xl md:text-5xl font-black leading-tight">
          Decentralized Intelligence &amp; Applied Systems Architecture.
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 font-mono text-sm border-l-4 border-[#0055FF] pl-4">
          <p><strong>Principal Investigator:</strong> Harshit Gupta</p>
          <p className="hidden md:block text-gray-400">|</p>
          <p><strong>Affiliation:</strong> VIT Bhopal University</p>
          <p className="hidden md:block text-gray-400">|</p>
          <p><strong>Domain:</strong> Artificial Intelligence (M.Tech)</p>
        </div>
      </header>

      {/* The Master Dossier Section */}
      <article className="bg-white border border-[#EAEAEA] rounded-sm shadow-sm relative overflow-hidden">
        {/* Subtle decorative element mimicking formal paper formatting */}
        <div className="absolute top-0 left-0 w-1 h-full bg-[#0055FF]"></div>

        <div className="p-8 md:p-12 space-y-16">

          {/* I. Author Abstract */}
          <section>
            <h2 className="font-mono text-sm uppercase tracking-widest text-[#0055FF] mb-6 border-b border-gray-100 pb-2">
              I. Author Abstract
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 font-labBody">
              I am an AI researcher and systems engineer specializing in privacy-preserving machine learning, hierarchical federated architectures, and edge computing. My work bridges the critical gap between theoretical deep tech and deployable physical hardware. With five active patents and multiple academic proceedings, my research focuses on mitigating data silos across non-IID environments and optimizing inference latency for resource-constrained systems. This repository documents the engineering methodologies behind building resilient, decentralized intelligence for the real world.
            </p>
          </section>

          {/* II. Intellectual Property (Patents) */}
          <section>
            <h2 className="font-mono text-sm uppercase tracking-widest text-[#0055FF] mb-6 border-b border-gray-100 pb-2">
              II. Intellectual Property
            </h2>

            <div className="space-y-2">
              <Accordion
                title="A Federated Multi-Modal Data Fusion System for Flood Detection (TriModalFloodNet)"
                subtitle="Inventor • App. No: VITB/IPR/2025/UP-35"
              >
                <p>Engineered a decentralized multi-modal fusion architecture to mitigate data silos and label scarcity in flood monitoring, utilizing heterogeneous federated learning to synchronize disparate sensor streams across geographically non-IID regions.</p>
              </Accordion>

              <Accordion
                title="Distributed Meta-Learning Framework for Rapid Anomaly Adaptation"
                subtitle="Inventor • App. No: VITB/IPR/2025/UP-33"
              >
                <p>Developed a decentralized technical framework to address "cold start" challenges in data-scarce, non-identically distributed (non-IID) environments, such as rural financial networks.</p>
              </Accordion>

              <Accordion
                title="An Integrated Vehicle Compliance and Safety Co-Pilot System"
                subtitle="Inventor • App. No: VITB/IPR/2025/UP-25"
              >
                <p>Engineered a real-time monitoring system ensuring vehicle compliance standards and driver safety protocols using sensor fusion and dual-source speed verification.</p>
              </Accordion>

              <Accordion
                title="Portable IoT Image Analysis System for Child Malnutrition Detection"
                subtitle="Inventor • App. No: 202621031512"
              >
                <p>Developed a distributed learning framework tailored for early nutritional screening in resource-constrained environments using image-based anthropometric analysis via Hybrid Hierarchical Federated Learning.</p>
              </Accordion>

              <Accordion
                title="Smart Key Rack Device with Weight-based Authentication"
                subtitle="Inventor • App. No: 202621029283"
              >
                <p>Engineered an IoT-enabled key management system utilizing weight-based sensor authentication for secure access tracking and real-time user notifications.</p>
              </Accordion>
            </div>
          </section>

          {/* III. Publications & Proceedings */}
          <section>
            <h2 className="font-mono text-sm uppercase tracking-widest text-[#0055FF] mb-6 border-b border-gray-100 pb-2">
              III. Publications &amp; Proceedings
            </h2>

            <ul className="space-y-6 font-labBody text-gray-800">
              <li className="pl-4 border-l-2 border-[#EAEAEA] hover:border-[#0055FF] transition-colors">
                <p className="font-bold text-lg">Securing Financial Intelligence: A Systematic Review of Federated Learning Architectures.</p>
                <p className="font-mono text-sm text-gray-500 mt-1">Accepted: ASSIC Conference'26</p>
              </li>
              <li className="pl-4 border-l-2 border-[#EAEAEA] hover:border-[#0055FF] transition-colors">
                <p className="font-bold text-lg">TriModal FloodNet: A Heterogeneous Federated Learning Framework for Disaster Management.</p>
                <p className="font-mono text-sm text-gray-500 mt-1">Accepted: ASSIC Conference'26</p>
              </li>
              <li className="pl-4 border-l-2 border-[#EAEAEA] hover:border-[#0055FF] transition-colors">
                <p className="font-bold text-lg">Synthetic Image Generation of Monkeypox Lesions Using a Hybrid ACGAN-SRGAN Architecture.</p>
                <p className="font-mono text-sm text-gray-500 mt-1">Presented and Accepted: CIIA Conference 26</p>
              </li>
              <li className="pl-4 border-l-2 border-[#EAEAEA] hover:border-[#0055FF] transition-colors">
                <p className="font-bold text-lg">A Multi-Modal Hybrid Machine Learning Framework for Predicting Coastal Climate Vulnerability.</p>
                <p className="font-mono text-sm text-gray-500 mt-1">Presented and Accepted: Intl. Conf. on Recent Trends in Applied Science and Computing (ICRTASC'25)</p>
              </li>
              <li className="pl-4 border-l-2 border-[#EAEAEA] hover:border-[#0055FF] transition-colors">
                <p className="font-bold text-lg">A Machine Learning Framework for Forecasting Coastal Water Quality Hotspots in India.</p>
                <p className="font-mono text-sm text-gray-500 mt-1">Presented and Accepted: Intl. Conf. on Artificial Intelligence and Machine Learning (ICAIM'25)</p>
              </li>
              <li className="pl-4 border-l-2 border-[#EAEAEA] hover:border-[#0055FF] transition-colors">
                <p className="font-bold text-lg">FitFusion: Your Fitness and Wellness Hub.</p>
                <p className="font-mono text-sm text-gray-500 mt-1">Submitted: WorldSUAS 2026</p>
              </li>
            </ul>
          </section>

        </div>
      </article>

    </div>
  );
}