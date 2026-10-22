import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How many came back",
  description: "7 of 10 accounts have last at or after 100. That is 7000 bps. It is not a health grade. No pool is read.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
