import HeadersBlock from "./HeadersBlock";

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="category-section__container">
        <HeadersBlock blockName={"category-section"} title={"category"}/>
        <div className="category-section__list-container">
          <ul className="category-section__list">
            <li className="category-section__item">
            <a href="#">
              <h3 className="category-section__header">Protein & Nutrition</h3>
              <img
                className="category-section__img"
                src="src/images/Protein.svg"
                alt=""
              />
              </a>
            </li>
            <li className="category-section__item">
            <a href="#"><h3 className="category-section__header">Sports Outfit</h3>
              <img
                className="category-section__img"
                src="src/images/outfit.svg"
                alt=""
              />
              </a>
            </li>
            <li className="category-section__item">
            <a href="#"><h3 className="category-section__header">Sports Bags</h3>
              <img
                className="category-section__img"
                src="src/images/bags.svg"
                alt=""
              />
              </a>
            </li>
            <li className="category-section__item">
            <a href="#"><h3 className="category-section__header">GYM Accessories</h3>
              <img
                className="category-section__img"
                src="src/images/accessories.svg"
                alt=""
              />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
