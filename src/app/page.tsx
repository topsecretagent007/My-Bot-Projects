"use client"
import Header from "@/components/Header";
import IndexPage from "@/components";
import Footer from "@/components/footer/Footer";
import FooterHead from "@/components/footer/FooterHead";

export default function Home() {

  return (
    <main className="w-full flex h-full min-h-screen flex-col items-center justify-between bg-[#0b192f]">
      <Header />
      <IndexPage />
      <FooterHead />
      <Footer />
    </main>
  );
}
