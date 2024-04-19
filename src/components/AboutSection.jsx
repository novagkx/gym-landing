export default function AboutSection ({blockName, src, header, alt, children, isMediumScreen, isLargeScreen}) {
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
            {isLargeScreen && <img src={src} style={{width: "654px", height:"453px"}} alt={alt}/>}
            {isMediumScreen && <img src={src} style={{width: "420px", height:"291px"}} alt={alt}/>}
        </div>
      </div>
    </section>
    )
}