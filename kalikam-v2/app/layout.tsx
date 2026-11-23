import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "KALIKAM — Stories. Ideas. Perspectives.",
  description: "Independent space for stories, ideas and perspectives.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
