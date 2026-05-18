import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Onboarding from "@/components/Onboarding";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StorySection from "@/components/StorySection";
import ShowcaseBanner from "@/components/ShowcaseBanner";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-clip">
      <Header />
      <StorySection>
        <Hero />
      </StorySection>
      <ShowcaseBanner />
      <div className="bg-black">
        <Services />
      </div>
      
      <StorySection className="bg-black">
        <Process />
      </StorySection>
      {/* <StorySection className="bg-black">
        <Onboarding />
      </StorySection> */}
      {/* <StorySection className="bg-black">
        <Stats />
      </StorySection> */}
      <StorySection className="bg-black">
        <About />
      </StorySection>
      <StorySection className="bg-black">
        <Work />
      </StorySection>
      <StorySection className="bg-black">
        <Pricing />
      </StorySection>
      <StorySection className="bg-black">
        <FAQ />
      </StorySection>
      <StorySection className="bg-black">
        <Contact />
      </StorySection>
      <StorySection className="bg-black">
        <Footer />
      </StorySection>
    </main>
  );
}
