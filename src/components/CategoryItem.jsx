export default function CategoryItem({header, blockName, alt, src}) {
  return (
    <>
      <li className={blockName + "__item"}>
        <a href="#">
          <h3  className={blockName + "__header"}>
            {header}
          </h3>
          <img
            className={blockName + "__img"}
            src={src}
            alt={alt}
          />
        </a>
      </li>
    </>
  );
}
