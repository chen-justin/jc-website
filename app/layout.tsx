import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// const font = Poppins({ subsets: ['latin'] })
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "chen-justin.com",
  description: "Justin Chen's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="./icon.png" />
      <body className={font.className}>{children}</body>
    </html>
  );
}
