export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="category-section__container">
        <div className="category-section__info-container">
          <h2 className="category-section__main-header">category</h2>
          <a href="#" className="category-section__link">See all</a>
        </div>
        <div className="category-section__list-container">
          <ul className="category-section__list">
            <li className="category-section__item">
              <h3 className="category-section__header">Protein & Nutrition</h3>
              <img
                className="category-section__img"
                src="src/images/Protein.svg"
                alt=""
              />
            </li>
            <li className="category-section__item">
              <h3 className="category-section__header">Sports Outfit</h3>
              <img
                className="category-section__img"
                src="src/images/outfit.svg"
                alt=""
              />
            </li>
            <li className="category-section__item">
              <h3 className="category-section__header">Sports Bags</h3>
              <img
                className="category-section__img"
                src="src/images/bags.svg"
                alt=""
              />
            </li>
            <li className="category-section__item">
              <h3 className="category-section__header">GYM Accessories</h3>
              <img
                className="category-section__img"
                src="src/images/accessories.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
