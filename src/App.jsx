import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import AdvantagesSection from "./components/AdvantagesSection";
import TrainingProgramsSection from "./components/TrainingProgramsSection";
import CategorySection from "./components/CategorySection";
import RegularSection from "./components/RegularSection";
import AboutSection from "./components/AboutSection";
// import AboutUs from "./components/AboutUs";
function App() {
  const info = [
    [
      {
        src: "src/images/t-shirt1.svg",
        header: "GYM T-Shirt",
        price: "৳250.00",
      },

      {
        src: "src/images/t-shirt2.svg",
        header: "Half Sleeve T-Shirt",
        price: "৳300.00",
      },

      {
        src: "src/images/t-shirt3.svg",
        header: "Sleeve-Less T-Shirt",
        price: "৳300.00",
      },
    ],
    [
      {
        src: "src/images/bag1.svg",
        header: "Black GYM Bag",
        price: "৳2550.00",
      },

      { src: "src/images/bag2.svg", header: "Best GYM Bag", price: "৳300.00" },

      { src: "src/images/bag3.svg", header: "Shoulder Bag", price: "৳300.00" },
    ],
    [
      {
        src: "src/images/protein1.svg",
        header: "Whey Protein Mexico",
        price: "৳2550.00",
      },

      {
        src: "src/images/protein2.svg",
        header: "Vegan Protein Powder",
        price: "৳300.00",
      },

      {
        src: "src/images/protein3.svg",
        header: "Organic Protein Powder",
        price: "৳300.00",
      },
    ],
  ];
  const categoryInfo = [[{
    id: 1,
    header: "Protein & Nutrition",
    src: "src/images/Protein.svg",
    alt: "Icon is about protein and nutrition"
  },

{
  id: 2,
  header: "Sports Outfit",
src: "src/images/outfit.svg",
    alt: "Outfit clothes icon"
},

{
  id: 3,
  header: "Sports Bags",
src: "src/images/bags.svg",
    alt: "Sports bag icon"
},

{id:4,
  header: "GYM Accessories",
src: "src/images/accessories.svg",
    alt: "Gym accessories icon"
}],
[
  {
    id: 1,
    header: "Fitness Equipment",
    src: "src/images/equipment.svg",
    alt: "Fitness equipment icon"
  },

{
  id: 2,
  header: "Qualified Trainer",
src: "src/images/trainer.svg",
    alt: "Fitness trainer icon"
},

{
  id: 3,
  header: "Individual Locker",
src: "src/images/locker.svg",
    alt: "Individual locker icon"
},

{id:4,
  header: "Fully Secured Area",
src: "src/images/secured.svg",
    alt: "Camera of viewing icon"
}
]]

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
    </>
  );
}

export default App;
