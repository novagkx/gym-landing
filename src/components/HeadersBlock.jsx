const HeadersBlock = ({blockName, title}) => {
    return(
        <div className={blockName + "__info-container"}>
          <h2 className={blockName + "__main-header"}>{title}</h2>
          <a href="#" className={blockName + "__link"} >See all</a>
        </div>
    )
}

export default HeadersBlock;