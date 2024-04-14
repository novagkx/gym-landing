export default function TrainingProgramsSection() {
  return (
    <section className="sport-section">
      <div className="sport-section__container">
        <h2 className="sport-section__header">
          Explore Our Dynamic Training Programs
        </h2>
        <ul className="sport-section__list">
          <li className="sport-section__item">
            <a href="#" >
            <h3 className="sport-section__h3">yoga</h3>
            <img style={{width: "420px", height:"235px"}} src="src/images/yoga.jpg" alt="" />
            </a>
            
          </li>
          
          <li className="sport-section__item">
          <a href="#" >
            <h3 className="sport-section__h3">fitness</h3>
            <img style={{width: "420px", height:"235px"}} src="src/images/fitness.jpg" alt="" />
            </a>
          </li>

          <li className="sport-section__item">
          <a href="#" >
            <h3 className="sport-section__h3">cardio</h3>
            <img style={{width: "420px", height:"235px"}} src="src/images/cardio.jpg" alt="" />
            </a>
          </li>
          <li className="sport-section__item">
          <a href="#" >
            <h3 className="sport-section__h3">zumba</h3>
            <img style={{width: "420px", height:"235px"}} src="src/images/zumba.jpg" alt="" />
            </a>
          </li>
          <li className="sport-section__item">
          <a href="#" >
            <h3 className="sport-section__h3">workout</h3>
            <img style={{width: "420px", height:"235px"}} src="src/images/workout.jpg" alt="" />
            </a>
          </li>
          <li className="sport-section__item">
          <a href="#" >
            <h3 className="sport-section__h3">bodybuiding</h3>
            <img style={{width: "420px", height:"235px"}} src="src/images/bodybuilding.jpg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
