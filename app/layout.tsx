import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brunswick Builders, LLC",
  description:
    "Brunswick Builders, LLC is a construction management and general contracting firm delivering exceptional results with integrity, transparency and unmatched attention to detail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy-900 antialiased">{children}</body>
    </html>
  );
}
