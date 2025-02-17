import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "putu-angga_crypto-test",
  description: "putu-angga_crypto-test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <TopBar />
        <main className="mx-4 lg:w-10/12 lg:mx-auto">{children}</main>
        <img src="/images/body-background.png" alt="" className="fixed -z-10 bottom-0 w-full"/>
      </body>
    </html>
  );
}
