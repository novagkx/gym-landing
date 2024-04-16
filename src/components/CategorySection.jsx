import HeadersBlock from "./HeadersBlock";

export default function CategorySection({blockName, title, info}) {
  return (
    <section className={blockName}>
      <div className={blockName +"__container"}>
        <HeadersBlock blockName={blockName} title={title}/>
        <div className={blockName + "__list-container"}>
          <ul className={blockName + "__list"}>
            {info.map((item) => 
              <li key={item.header} className={blockName +"__item"}>
              <a key={item.src} href="#">
                <h3 key={item.alt}className={blockName +"__header"}>{item.header}</h3>
                <img key={item.id}
                  className={blockName +"__img"}
                  src={item.src}
                  alt={item.alt}
                />
                </a>
              </li>
            )}
          
          </ul>
        </div>
      </div>
    </section>
  );
}
