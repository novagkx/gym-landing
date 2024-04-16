export default function AboutSection ({blockName, src, header, alt, children}) {
    return(
<section className={blockName}>
      <div className={blockName+ "__container"}>
        <div className={blockName+"__description"}>
          <h2 className={blockName+"__main-header"}>{header}</h2>
          <p className={blockName+"__text"}>
            {children}
          </p>
        </div>
        <div className={blockName+"__img"}>
            <img src={src} alt={alt}/>
        </div>
      </div>
    </section>
    )
}