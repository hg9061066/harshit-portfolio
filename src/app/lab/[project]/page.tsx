import Link from 'next/link';
import CodeBlock from '@/components/lab/CodeBlock';

export default async function ProjectDeepDive({ params }: { params: Promise<{ project: string }> }) {
  // In Next.js 15+, dynamic route params are asynchronous.
  // const resolvedParams = await params;
  // In a real build, you would fetch project data based on the 'resolvedParams.project' slug.
  // For now, we are using a robust template focused on Federated Learning.

  return (
    <article className="space-y-12 animate-in fade-in duration-700 ease-out max-w-4xl mx-auto">

      {/* Breadcrumb Navigation */}
      <nav className="mb-8">
        <Link href="/lab" className="text-sm font-mono text-gray-500 hover:text-[#0055FF] transition-colors">
          &larr; Back to Lab Index
        </Link>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4 border-b border-[#EAEAEA] pb-8">
        <h1 className="font-labHeading text-4xl font-bold leading-tight">
          TriModal FloodNet: Multi-Modal Data Fusion via Heterogeneous Federated Learning
        </h1>
        <div className="flex flex-wrap gap-4 font-mono text-xs text-gray-600">
          <span className="bg-gray-100 px-2 py-1 rounded">HeteroFL</span>
          <span className="bg-gray-100 px-2 py-1 rounded">CNN</span>
          <span className="bg-gray-100 px-2 py-1 rounded">TSMixer</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Edge AI</span>
        </div>
      </header>

      {/* Section 1: Methodology & Architecture */}
      <section className="space-y-4">
        <h2 className="font-labHeading text-2xl font-bold border-l-4 border-gray-300 pl-4">
          1. Methodology &amp; Architecture
        </h2>
        <p className="text-gray-800 leading-relaxed font-labBody">
          Traditional disaster management systems rely on centralized data lakes, which create severe latency and privacy bottlenecks. To resolve this, a decentralized multi-modal fusion architecture was engineered to synchronize disparate sensor streams (Satellite Imagery, Rainfall Data, and Water Levels) across geographically non-IID regions.
        </p>
        <p className="text-gray-800 leading-relaxed font-labBody">
          The global model aggregation utilizes a weighted federated averaging mechanism, ensuring that resource-constrained edge devices can participate without transmitting raw data. The core aggregation logic follows the standard FedAvg formulation:
        </p>

        {/* LaTeX Math Block for rigorous deep tech representation */}
        <div className="bg-gray-50 py-6 px-4 rounded border border-gray-200 text-center overflow-x-auto my-6">
          $$w_{t + 1} = \sum_{k = 1}^K \frac{n_k}{n} w_{t + 1}^k$$
        </div>
      </section>

      {/* Section 2: Implementation & Code */}
      <section className="space-y-4">
        <h2 className="font-labHeading text-2xl font-bold border-l-4 border-gray-300 pl-4">
          2. Edge Deployment
        </h2>
        <p className="text-gray-800 leading-relaxed font-labBody">
          Deploying the models required strict optimization for edge-inference latency. Below is an abstracted representation of the custom data loader and client initialization for the Flower framework on the embedded devices.
        </p>

        <CodeBlock
          language="python"
          filename="fl_client.py"
          code={`import flwr as fl
import tensorflow as tf

class FloodNetClient(fl.client.NumPyClient):
    def __init__(self, model, x_train, y_train):
        self.model = model
        self.x_train = x_train
        self.y_train = y_train

    def get_parameters(self, config):
        return self.model.get_weights()

    def fit(self, parameters, config):
        self.model.set_weights(parameters)
        # Optimizing latency for Edge AI inference
        self.model.fit(self.x_train, self.y_train, epochs=1, batch_size=32, verbose=0)
        return self.model.get_weights(), len(self.x_train), {}

# Initialize Federated Learning Client
fl.client.start_numpy_client(server_address="[::]:8080", client=FloodNetClient(model, x_train, y_train))`}
        />
      </section>

    </article>
  );
}
