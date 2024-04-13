import NavbarItem from "./NavbarItem";

const Navbar = ({blockName}) => {
  return (
    <nav className="header__nav">
      <ul className="header__ul">
        <NavbarItem blockName={blockName} isActive={true}>home</NavbarItem>
        <NavbarItem blockName={blockName}>about us</NavbarItem>
        <NavbarItem blockName={blockName}>packages</NavbarItem>
        <NavbarItem blockName={blockName}>shop</NavbarItem>
        <NavbarItem blockName={blockName}>blog</NavbarItem>
        <NavbarItem blockName={blockName}>contact us</NavbarItem>
      </ul>
    </nav>
  );
};

export default Navbar;
