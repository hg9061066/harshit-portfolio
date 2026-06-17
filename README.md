# The Anthology Architecture: A Dual-Theme Next.js Portfolio

A sophisticated, dynamically routed portfolio built to bridge the gap between rigorous machine learning research and high-fidelity frontend engineering. 

Rather than forcing disparate professional identities into a single aesthetic, this architecture introduces **The Anthology Concept**: a split-environment UI that actively adapts to the context of the data being presented.

## 🏗 The Anthology Concept

This platform is divided into two distinct, context-aware environments handled dynamically via Next.js routing and Tailwind CSS theming:

* **[ The Lab ]** (`/lab`): A clean, LaTeX-inspired light theme. Built strictly for high-information density. It houses distributed systems architectures, federated learning research, differential privacy math, and intellectual property (patents). 
* **[ The Studio ]** (`/studio`): A cinematic, high-contrast dark theme. Built for visual execution. It features masonry grids, timeline layouts, and interactive case studies for full-stack builds, UI/UX architecture, and digital narrative engines.
* **The Chameleon Footer**: A global, state-aware component that listens to the active route via `usePathname()` and seamlessly transitions color palettes to match the user's current environment.

## 💻 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Theme Management:** `next-themes` (For seamless, flicker-free Light/Dark mode transitions)
* **Typography:** Inter (Sans), Merriweather (Serif), Fira Code (Mono)
* **Deployment:** [Vercel](https://vercel.com/)

## 📂 Core Directory Structure

The application heavily utilizes Next.js dynamic routing to generate dedicated case study pages for both research and frontend projects.

```text
src/
└── app/
    ├── layout.tsx              # Global layout & Theme Provider wrapper
    ├── page.tsx                # The Split-Screen Index Gateway
    ├── lab/
    │   ├── layout.tsx          # Enforces the 'LaTeX' light theme
    │   ├── page.tsx            # Academic Dossier (Patents, Publications)
    │   └── [project]/page.tsx  # Dynamic deep dives (e.g., TriModal FloodNet)
    ├── studio/
    │   ├── layout.tsx          # Enforces the 'Graphic Novel' dark theme
    │   ├── page.tsx            # Professional Timeline & Visual Grid
    │   └── [project]/page.tsx  # Dynamic case studies (e.g., Nanighar, AstroSite)
    └── components/
        ├── Footer.tsx          # Dynamic Chameleon Footer
        ├── ThemeProvider.tsx   # Next-Themes configuration
        └── lab/                # Custom UI components (Accordions, Code Blocks)
