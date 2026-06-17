import { ThemeProvider } from "@/components/ThemeProvider";
import { Merriweather, Inter, Fira_Code, Bebas_Neue } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const merriweather = Merriweather({ weight: ["300", "400", "700", "900"], subsets: ["latin"], variable: "--font-labHeading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-labBody" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-studioHeading" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${merriweather.variable} ${inter.variable} ${firaCode.variable} ${bebasNeue.variable}`}>
      <body suppressHydrationWarning className="antialiased flex flex-col min-h-screen">
        <ThemeProvider>
          {/* The main content grows to push the footer to the bottom */}
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}