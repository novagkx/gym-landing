import MyButton from "./MyButton";
export default function SectionItem({blockName, src, header, price}) {
  return (
    <li className={blockName + "__item"}>
      <img
        src={src}
        alt=""
        className={blockName + "__img"}
      />
      <h3 className={blockName +"__header"}>{header}</h3>
      <span className={blockName +"__price"}>{price}</span>
      <MyButton>Add to cart</MyButton>
    </li>
  );
}
