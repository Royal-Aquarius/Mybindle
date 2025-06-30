import Hero from "../components/Hero";
import Service from "../components/Service";
import About from "../components/About";
import Howitwork from "../components/Howitwork";
import Testinomial from "../components/Testinomial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#F2F2F2] text-black">
      <Hero />
      <Service />
      <About />
      <Howitwork />
      <Testinomial />
      <Footer />
    </main>
  );
}
