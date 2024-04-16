import SectionItem from "./SectionItem";
import HeadersBlock from "./HeadersBlock";
const RegularSection = ({ blockName, info, title}) => {
  return (
    <section className={blockName}>
      <div className={blockName + "__container"}>
      <HeadersBlock blockName={blockName} title={title} />
        <ul className={blockName + "__list"}>
            {info.map(item => <SectionItem key={item.src} blockName={blockName} src={item.src} price={item.price} header={item.header}/>)}
        </ul>
      </div>
    </section>
  );
};

export default RegularSection;
