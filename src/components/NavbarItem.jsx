const NavbarItem = ({ blockName, isActive, children }) => {
  return (
    <li className={blockName + "__li"}>
      <a href="#" className= {isActive ? (blockName + "__link--active" )  : (blockName + "__link")}>
        {children}
      </a>
    </li>
  );
};

export default NavbarItem;
