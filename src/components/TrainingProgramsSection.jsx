import {sportsVarieties, sportsVarieties1024, sportsVarieties360} from "../data";
import TrainingItem from "./TrainingItem";

export default function TrainingProgramsSection({isSmallScreen, isSmartphone, isLargeScreen, isMediumScreen}) {
    return (
        <section className="sport-section">
            <div className="sport-section__container">
                <h2 className="sport-section__header">
                    Explore Our Dynamic Training Programs
                </h2>
                <ul className="sport-section__list">
                    {isSmartphone && sportsVarieties360.map((item) => <TrainingItem key={item.src} src={item.src}
                                                                                alt={item.alt}>{item.name}</TrainingItem>)}
                    {isSmallScreen && sportsVarieties1024.map((item) => <TrainingItem key={item.src} src={item.src}
                                                                                alt={item.alt}>{item.name}</TrainingItem>)}
                    {isLargeScreen && sportsVarieties.map((item) => <TrainingItem key={item.src} src={item.src}
                                                                             alt={item.alt}>{item.name}</TrainingItem>)}
                    {isMediumScreen && sportsVarieties.map((item) => <TrainingItem key={item.src} src={item.src}
                                                                            alt={item.alt}>{item.name}</TrainingItem>)}

                </ul>
            </div>
        </section>
    );
}
