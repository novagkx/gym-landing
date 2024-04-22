import React from 'react';
import "./modal.css"
import Navbar from "../components/Navbar.jsx";

const Modal = ({active, setActive, isSmallestScreen}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <Navbar isSmallestScreen={isSmallestScreen} blockName={"modal-content"} onclick={e => e.stopPropagation()}/>
        </div>
    );
};

export default Modal;