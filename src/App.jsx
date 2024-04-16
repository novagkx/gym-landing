import { useState } from "react";
import {info, categoryInfo} from "./data"
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import AdvantagesSection from "./components/AdvantagesSection";
import TrainingProgramsSection from "./components/TrainingProgramsSection";
import CategorySection from "./components/CategorySection";
import RegularSection from "./components/RegularSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
function App() {
 

  return (
    <>
      <Header />
      <main className="main">
        <AdvantagesSection />
        <TrainingProgramsSection />
        <CategorySection blockName={"category-section"} title={"category"} info={categoryInfo[0]}/>
        <RegularSection
          blockName={"product-section"}
          info={info[0]}
          title={"new product"}
        />
        <RegularSection
          blockName={"trending-section"}
          info={info[1]}
          title={"trending product"}
        />
        <RegularSection
          blockName={"popular-section"}
          info={info[2]}
          title={"popular product"}
        />
        <AboutSection
          blockName={"about-us-section"}
          header={"about us"}
          src={"src/images/fun-img.jpg"}
          alt={"Fun sports people talking to each other"}
        >
          Welcome to Our Gym, where fitness meets passion, and every drop of 
          sweat tells a story of dedication. Our gym isn't just a place to 
          work out; it's a community, a lifestyle, and a commitment to your 
          well-being.We are committe d to providing a safe, inclusive, and 
          inspiring space for individuals of all ages and fitness levels. 
          Whether you're a seasoned gym-goer or just starting, is here to 
          support you every step of the way.
        </AboutSection>
        <AboutSection
          blockName={"choose-us-section"}
          header={"why choose us"}
          src={"src/images/choose-us.jpg"}
          alt={"Girl with rope at the gym"}
        >
          Welcome to Our Gym, where fitness meets passion, and every drop of
          sweat tells a story of dedication. Our gym isn't just a place to work
          out; it's a community, a lifestyle, and a commitment to your
          well-being.We are committe d to providing a safe, inclusive, and
          inspiring space for individuals of all ages and fitness levels.
          Whether you're a seasoned gym-goer or just starting, is here to
          support you every step of the way.
        </AboutSection>
        <CategorySection blockName={"facilities-section"} title={"facilities"} info={categoryInfo[1]}/>

      </main>
      <Footer/>
    </>
  );
}

export default App;
