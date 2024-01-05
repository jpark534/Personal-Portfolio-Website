import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Experience from "../Experiences";



export default function Home () {
  return(
    <>
    <HeroSection />
    <MySkills/>
    <AboutMe/>
    <MyPortfolio/>
    <Experience/>
    <Footer/>
    </>
  );
}