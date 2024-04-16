import FooterItem from "./FooterItem"
const FooterList = ({info}) => {
    return (
        <ul className="footer__list">
            {info.map((item)=><FooterItem key={item.info}>{item.info}</FooterItem>)}
            </ul>
    )
}

export default FooterList;
