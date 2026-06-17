export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Purely a theme wrapper. No navigation bar here!
    <div className="bg-[#0A0A0A] min-h-screen">
      {children}
    </div>
  );
}
