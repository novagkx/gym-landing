import React from 'react';
import "./modal.css"
import Navbar from "../components/Navbar.jsx";

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <Navbar blockName={"modal-content"} onclick={e => e.stopPropagation()}/>
        </div>
    );
};

export default Modal;