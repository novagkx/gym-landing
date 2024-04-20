import {info, categoryInfo} from "./data"
import "./App.css";
import Header from "./components/Header";
import AdvantagesSection from "./components/AdvantagesSection";
import TrainingProgramsSection from "./components/TrainingProgramsSection";
import CategorySection from "./components/CategorySection";
import RegularSection from "./components/RegularSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import {useMediaQuery} from '@react-hook/media-query';

// import AboutUs from "./components/AboutUs";
function App() {
    const isSmartphone = useMediaQuery('(max-width: 768px)');
    const isSmallScreen = useMediaQuery('(min-width:769px) and (max-width: 1024px)');
    const isMediumScreen = useMediaQuery('(min-width: 1024px) and (max-width: 1281px)');
    const isLargeScreen = useMediaQuery('(min-width: 1281px)');

    return (
        <>
            {!isSmartphone && <Header isSmartphone={false}/>}
            {isSmartphone && <Header isSmartphone={true}/>}
            <main className="main">
                <AdvantagesSection/>
                <TrainingProgramsSection isSmall={isSmallScreen} is360={isSmartphone}/>
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
                {isLargeScreen && <AboutSection isLargeScreen={true}
                                                blockName={"about-us-section"}
                                                header={"about us"}
                                                src={"src/images/fun-img.jpg"}
                                                alt={"Fun sports people talking to each other"}
                >
                    Welcome to Our Gym, where fitness meets passion, and every drop of
                    sweat tells a story of dedication. Our gym isn&apos;t just a place to
                    work out; it&apos;s a community, a lifestyle, and a commitment to your
                    well-being.We are committe d to providing a safe, inclusive, and
                    inspiring space for individuals of all ages and fitness levels.
                    Whether you&apos;re a seasoned gym-goer or just starting, is here to
                    support you every step of the way.
                </AboutSection>}
                {isLargeScreen && <AboutSection isLargeScreen={true}
                                                blockName={"choose-us-section"}
                                                header={"why choose us"}
                                                src={"src/images/choose-us.jpg"}
                                                alt={"Girl with rope at the gym"}
                >
                    Welcome to Our Gym, where fitness meets passion, and every drop of
                    sweat tells a story of dedication. Our gym isn&apos;t just a place to work
                    out; it&apos;s a community, a lifestyle, and a commitment to your
                    well-being.We are committe d to providing a safe, inclusive, and
                    inspiring space for individuals of all ages and fitness levels.
                    Whether you&apos;re a seasoned gym-goer or just starting, is here to
                    support you every step of the way.
                </AboutSection>}
                {isMediumScreen && <AboutSection isMediumScreen={true}
                                                 blockName={"about-us-section"}
                                                 header={"about us"}
                                                 src={"src/images/fun-img420.jpg"}
                                                 alt={"Fun sports people talking to each other"}
                >
                    Welcome to Our Gym, where fitness meets passion, and every drop of
                    sweat tells a story of dedication. Our gym isn&apos;t just a place to
                    work out; it&apos;s a community, a lifestyle, and a commitment to your
                    well-being.We are committe d to providing a safe, inclusive, and
                    inspiring space for individuals of all ages and fitness levels.
                    Whether you&apos;re a seasoned gym-goer or just starting, is here to
                    support you every step of the way.
                </AboutSection>}
                {isMediumScreen &&
                    <AboutSection isMediumScreen={true}
                                  blockName={"choose-us-section"}
                                  header={"why choose us"}
                                  src={"src/images/choose-us420.jpg"}
                                  alt={"Girl with rope at the gym"}
                    >
                        Welcome to Our Gym, where fitness meets passion, and every drop of
                        sweat tells a story of dedication. Our gym isn&apos;t just a place to work
                        out; it&apos;s a community, a lifestyle, and a commitment to your
                        well-being.We are committe d to providing a safe, inclusive, and
                        inspiring space for individuals of all ages and fitness levels.
                        Whether you&apos;re a seasoned gym-goer or just starting, is here to
                        support you every step of the way.
                    </AboutSection>}


                {isSmallScreen && <AboutSection isSmallScreen={true}
                                                 blockName={"about-us-section"}
                                                 header={"about us"}
                                                 src={"src/images/fun-img320.jpg"}
                                                 alt={"Fun sports people talking to each other"}
                >
                    Welcome to Our Gym, where fitness meets passion, and every drop of
                    sweat tells a story of dedication. Our gym isn&apos;t just a place to
                    work out; it&apos;s a community, a lifestyle, and a commitment to your
                    well-being.We are committe d to providing a safe, inclusive, and
                    inspiring space for individuals of all ages and fitness levels.
                    Whether you&apos;re a seasoned gym-goer or just starting, is here to
                    support you every step of the way.
                </AboutSection>}
                {isSmallScreen &&
                    <AboutSection isSmallScreen={true}
                                  blockName={"choose-us-section"}
                                  header={"why choose us"}
                                  src={"src/images/choose-us320.jpg"}
                                  alt={"Girl with rope at the gym"}
                    >
                        Welcome to Our Gym, where fitness meets passion, and every drop of
                        sweat tells a story of dedication. Our gym isn&apos;t just a place to work
                        out; it&apos;s a community, a lifestyle, and a commitment to your
                        well-being.We are committe d to providing a safe, inclusive, and
                        inspiring space for individuals of all ages and fitness levels.
                        Whether you&apos;re a seasoned gym-goer or just starting, is here to
                        support you every step of the way.
                    </AboutSection>}

                {isSmartphone && <AboutSection isSmartphone={true}
                                                blockName={"about-us-section"}
                                                header={"about us"}
                                                src={"src/images/fun-img200.jpg"}
                                                alt={"Fun sports people talking to each other"}
                >
                    Welcome to Our Gym, where fitness meets passion, and every drop of
                    sweat tells a story of dedication. Our gym isn&apos;t just a place to
                    work out; it&apos;s a community, a lifestyle, and a commitment to your
                    well-being.We are committe d to providing a safe, inclusive, and
                    inspiring space for individuals of all ages and fitness levels.
                    Whether you&apos;re a seasoned gym-goer or just starting, is here to
                    support you every step of the way.
                </AboutSection>}
                {isSmartphone &&
                    <AboutSection isSmartphone={true}
                                  blockName={"choose-us-section"}
                                  header={"why choose us"}
                                  src={"src/images/choose-us200.jpg"}
                                  alt={"Girl with rope at the gym"}
                    >
                        Welcome to Our Gym, where fitness meets passion, and every drop of
                        sweat tells a story of dedication. Our gym isn&apos;t just a place to work
                        out; it&apos;s a community, a lifestyle, and a commitment to your
                        well-being.We are committe d to providing a safe, inclusive, and
                        inspiring space for individuals of all ages and fitness levels.
                        Whether you&apos;re a seasoned gym-goer or just starting, is here to
                        support you every step of the way.
                    </AboutSection>}
                <CategorySection blockName={"facilities-section"} title={"facilities"} info={categoryInfo[1]}/>

            </main>
            <Footer/>
        </>
    );
}

export default App;
