import "@/app/styles/base/reset.sass";
import "@/app/styles/base/variables.sass";

import Header from "@/app/components/Header";
import GetInTouch from "@/app/components/GetInTouch";
import Footer from "@/app/components/Footer";

import { Jost } from "next/font/google";

const jost = Jost({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata = {
  title: "Designo Multi-Page Website",
  description: "Designo is a web development and design agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        <main>{children}</main>
        <GetInTouch />
        <Footer />
      </body>
    </html>
  );
}
