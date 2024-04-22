import NavbarItem from "./NavbarItem";

const Navbar = ({blockName, isSmallestScreen}) => {
    return (
        <>
            {isSmallestScreen && <nav className={blockName + "__nav"}>
                <ul className={blockName + "__ul"}>
                    <NavbarItem blockName={blockName}>login</NavbarItem>
                    <NavbarItem blockName={blockName}>register</NavbarItem>
                    <NavbarItem blockName={blockName} isActive={true}>home</NavbarItem>
                    <NavbarItem blockName={blockName}>about us</NavbarItem>
                    <NavbarItem blockName={blockName}>packages</NavbarItem>
                    <NavbarItem blockName={blockName}>shop</NavbarItem>
                    <NavbarItem blockName={blockName}>blog</NavbarItem>
                    <NavbarItem blockName={blockName}>contact us</NavbarItem>
                </ul>
            </nav>
            }

            {
                !isSmallestScreen && < nav
                    className={blockName + "__nav"}>
                    < ul
                        className={blockName + "__ul"}>
                        < NavbarItem
                            blockName={blockName}
                            isActive={true}> home < /NavbarItem>
                        <NavbarItem blockName={blockName}>about us</NavbarItem>
                        <NavbarItem blockName={blockName}>packages</NavbarItem>
                        <NavbarItem blockName={blockName}>shop</NavbarItem>
                        <NavbarItem blockName={blockName}>blog</NavbarItem>
                        <NavbarItem blockName={blockName}>contact us</NavbarItem>
                    </ul>
                </nav>
            }
            </>
            )
            ;
            };

            export default Navbar;
