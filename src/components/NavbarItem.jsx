const NavbarItem = ({ blockName, isActive, children }) => {
  return (
    <li className={isActive ? (blockName + "__li active" )  : (blockName + "__li") }>
      <a href="#" className={blockName + "__link"}>
        {children}
      </a>
    </li>
  );
};

export default NavbarItem;
