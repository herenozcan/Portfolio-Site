import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Divide from "./components/Divide";
import Footer from "./components/Footer";

function App() {
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

export default App