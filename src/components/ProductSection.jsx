import HeadersBlock from "./HeadersBlock";
import MyButton from "./MyButton";

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="product-section__container">
        <HeadersBlock blockName={"product-section"} title={"new product"} />
        <ul className="product-section__list">
          <li className="product-section__item">
            <img
              src="src/images/t-shirt1.svg"
              alt=""
              className="product-section__img"
            />
            <h3 className="product-section__header">GYM T-Shirt</h3>
            <span className="product-section__price">৳250.00</span>
            <MyButton margin="52px">Add to cart</MyButton>
          </li>
          <li className="product-section__item">
            <img
              src="src/images/t-shirt2.svg"
              alt=""
              className="product-section__img"
            />
            <h3 className="product-section__header">Half Sleeve T-Shirt</h3>
            <span className="product-section__price">৳300.00</span>
            <MyButton margin="52px">Add to cart</MyButton>
          </li>
          <li className="product-section__item">
            <img
              src="src/images/t-shirt3.svg"
              alt=""
              className="product-section__img"
            />
            <h3 className="product-section__header">Sleeve-Less T-Shirt</h3>
            <span className="product-section__price">৳300.00</span>
            <MyButton margin="52px">Add to cart</MyButton>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ProductSection;
