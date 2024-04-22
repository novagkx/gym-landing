import Navbar from "./Navbar";
import SearchInput from "./SerchInput";
import Modal from "../Modal/Modal.jsx";
import {useState} from "react";

const Header = ({isSmartphone, isSmallestScreen}) => {
    const [modalActive, setModalActive] = useState(false);
    const [visibility, setVisibility] = useState(true);
    return (
        <>
            {!isSmartphone && (<header className="header">
                <div className="header__container-1">
                    <img
                        className="header__logo"
                        src="src/images/gym-logo.svg"
                        alt="Логотип сайта"
                    />
                    <Navbar blockName={"header"}/>

                    <div className="header__container">
                        <div className="header__input-container">
                            <SearchInput blockName={"header"}/>
                        </div>

                        <div className="header__links">
                            <a href="" className="header__sign-in">
                                login
                            </a>
                            <span className="header__span">/</span>
                            <a href="" className="header__sign-up">
                                register
                            </a>
                        </div>

                        <div className="header__icons">
                            <div className="header__circle">
                                <a className="header__basket" href="#">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21.08 7.00001C20.9072 6.70063 20.6598 6.45114 20.3618 6.27588C20.0639 6.10062 19.7256 6.00557 19.38 6.00001H6.58L6 3.74001C5.9414 3.52184 5.81066 3.32995 5.62908 3.19558C5.44749 3.06121 5.22576 2.99227 5 3.00001H3C2.73478 3.00001 2.48043 3.10536 2.29289 3.2929C2.10536 3.48044 2 3.73479 2 4.00001C2 4.26522 2.10536 4.51958 2.29289 4.70711C2.48043 4.89465 2.73478 5.00001 3 5.00001H4.24L7 15.26C7.0586 15.4782 7.18934 15.6701 7.37092 15.8044C7.55251 15.9388 7.77424 16.0077 8 16H17C17.1847 15.9994 17.3656 15.9478 17.5227 15.8507C17.6798 15.7536 17.8069 15.6149 17.89 15.45L21.17 8.89001C21.3122 8.59202 21.3783 8.26348 21.3626 7.93369C21.3469 7.6039 21.2498 7.28313 21.08 7.00001ZM16.38 14H8.76L7.13 8.00001H19.38L16.38 14Z"
                                            fill="#F5F5F5"
                                        />
                                        <path
                                            d="M7.5 21C8.32843 21 9 20.3284 9 19.5C9 18.6716 8.32843 18 7.5 18C6.67157 18 6 18.6716 6 19.5C6 20.3284 6.67157 21 7.5 21Z"
                                            fill="#F5F5F5"
                                        />
                                        <path
                                            d="M17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z"
                                            fill="#F5F5F5"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="header__circle">
                                <a className="header__favorites" href="#">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_3_58)">
                                            <path
                                                d="M12 21C11.8684 21.0007 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.22999C1.99866 7.84442 2.54536 6.51481 3.51999 5.52999C4.50226 4.5505 5.83283 4.00046 7.21999 4.00046C8.60716 4.00046 9.93773 4.5505 10.92 5.52999L12 6.60999L13.08 5.52999C14.0623 4.5505 15.3928 4.00046 16.78 4.00046C18.1672 4.00046 19.4977 4.5505 20.48 5.52999C21.4546 6.51481 22.0013 7.84442 22.0013 9.22999C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0007 12 21Z"
                                                fill="#F5F5F5"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3_58">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>)}

            {isSmartphone && <header className="header">
                <div className="header__container-1">
                    <img
                        className="header__logo"
                        src="src/images/gym-logo.svg"
                        alt="Логотип сайта"
                    />
                    <div className="header__container">
                        <div className="header__input-container">
                            <SearchInput blockName={"header"}/>
                        </div>

                        <div className="header__links">
                            <a href="" className="header__sign-in">
                                login
                            </a>
                            <span className="header__span">/</span>
                            <a href="" className="header__sign-up">
                                register
                            </a>
                        </div>

                        <div className="header__icons">
                            <div className="header__circle">
                                <a className="header__basket" href="#">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21.08 7.00001C20.9072 6.70063 20.6598 6.45114 20.3618 6.27588C20.0639 6.10062 19.7256 6.00557 19.38 6.00001H6.58L6 3.74001C5.9414 3.52184 5.81066 3.32995 5.62908 3.19558C5.44749 3.06121 5.22576 2.99227 5 3.00001H3C2.73478 3.00001 2.48043 3.10536 2.29289 3.2929C2.10536 3.48044 2 3.73479 2 4.00001C2 4.26522 2.10536 4.51958 2.29289 4.70711C2.48043 4.89465 2.73478 5.00001 3 5.00001H4.24L7 15.26C7.0586 15.4782 7.18934 15.6701 7.37092 15.8044C7.55251 15.9388 7.77424 16.0077 8 16H17C17.1847 15.9994 17.3656 15.9478 17.5227 15.8507C17.6798 15.7536 17.8069 15.6149 17.89 15.45L21.17 8.89001C21.3122 8.59202 21.3783 8.26348 21.3626 7.93369C21.3469 7.6039 21.2498 7.28313 21.08 7.00001ZM16.38 14H8.76L7.13 8.00001H19.38L16.38 14Z"
                                            fill="#F5F5F5"
                                        />
                                        <path
                                            d="M7.5 21C8.32843 21 9 20.3284 9 19.5C9 18.6716 8.32843 18 7.5 18C6.67157 18 6 18.6716 6 19.5C6 20.3284 6.67157 21 7.5 21Z"
                                            fill="#F5F5F5"
                                        />
                                        <path
                                            d="M17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z"
                                            fill="#F5F5F5"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="header__circle">
                                <a className="header__favorites" href="#">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_3_58)">
                                            <path
                                                d="M12 21C11.8684 21.0007 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.22999C1.99866 7.84442 2.54536 6.51481 3.51999 5.52999C4.50226 4.5505 5.83283 4.00046 7.21999 4.00046C8.60716 4.00046 9.93773 4.5505 10.92 5.52999L12 6.60999L13.08 5.52999C14.0623 4.5505 15.3928 4.00046 16.78 4.00046C18.1672 4.00046 19.4977 4.5505 20.48 5.52999C21.4546 6.51481 22.0013 7.84442 22.0013 9.22999C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0007 12 21Z"
                                                fill="#F5F5F5"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3_58">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header__burger">
                        <a href="#" className="header__burger-link" onClick={()=>setModalActive(true)}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M5 12H20" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path>
                                <path d="M5 17H20" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path>
                                <path d="M5 7H20" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path>
                            </g>
                        </svg>
                        </a>
                    </div>
                </div>
            </header>}
        <Modal isSmallestScreen={isSmallestScreen} active={modalActive} setActive={setModalActive}/>
        </>
    );
};

export default Header;
