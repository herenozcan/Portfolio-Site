import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Divide from "../components/Divide";

function Home() {
  return (
    <>
      <div className="bg-gray-200 dark:bg-[#202125]">
        <div className="container mx-auto">
          <Header />
          <HeroSection />
          <div className="pt-5">
            <Divide />
          </div>
          <Projects />
          <div className="pb-10">
            <Divide />
          </div>
          <Contact />
          <div className="pb-10">
            <Divide />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home