import CategoryItem from "./CategoryItem";
import HeadersBlock from "./HeadersBlock";

export default function CategorySection({blockName, title, info}) {
    return (
        <section className={blockName}>
            <div className={blockName + "__container"}>
                <HeadersBlock blockName={blockName} title={title}/>
                <div className={blockName + "__list-container"}>
                    <ul className={blockName + "__list"}>
                        {info.map((item) =>
                            <CategoryItem key={item.id} header={item.header} blockName={blockName} alt={item.alt}
                                          src={item.src}/>
                        )}


                    </ul>
                </div>
            </div>
        </section>
    );
}
