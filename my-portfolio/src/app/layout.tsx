import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Ale-Janicki",
  description: "This page was designed solely to showcase the portfolio of Ale-Janicki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={exo2.className}>{children}</body>
    </html>
  );
}
