import React, {createRef, useEffect, useState} from 'react';
import "./Navbar.css";
import logo from "logo.svg";
import Icon from "component/text/Icon";

const STORAGE_MENU_OPEN = "NAVBAR_MENU_OPEN";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(localStorage.getItem(STORAGE_MENU_OPEN) === "true");

    useEffect(() => {
        localStorage.setItem(STORAGE_MENU_OPEN, menuOpen.toString());

        let menu = document.getElementById("nav-menu");
        menu.style.transform = menuOpen ? "none" : "translate(-100%, 0)";
    }, [menuOpen]);

    function NavLink(props) {
        return (
            <a className="nav-link" href={props.link}>
                <div className="nav-icon-container">{props.icon ? <Icon>{props.icon}</Icon> : <></>}</div>
                {props.children}
            </a>
        );
    }

    function DropDown(props) {
        const [toggled, setToggled] = useState(false);
        const container = createRef();

        useEffect(() => {
            container.current.style.maxHeight = toggled ? container.current.scrollHeight + "px" : "0px";
        }, [toggled, container]);

        return (
            <>
                <button className="nav-button" onClick={ () => setToggled(!toggled) } style={props.icon ? {} : { marginLeft: "30px", width: "calc(100% - 30px)" }}>
                    {props.icon ? <div className="nav-dropdown-icon-container"><Icon>{props.icon}</Icon></div> : <></>}
                    <p style={{ float: "left", margin: 0 }}>{props.label}</p>
                    <p style={{ float: "right", margin: 0 }}><Icon>{toggled ? "fas fa-caret-down" : "fas fa-caret-right"}</Icon></p>
                </button>
                <div ref={container} className="nav-dropdown" style={{ marginLeft: "50px", maxHeight: 0 }}>
                    {props.children}
                </div>
            </>
        );
    }

    return (
        <div id="nav-container">
            <div id="nav-head">
                <div id="nav-toggle">
                    <input type="checkbox" id="menu-toggle" checked={menuOpen} onClick={ () => setMenuOpen(!menuOpen) } />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="nav-logo-container">
                    <img id="nav-logo" src={ logo } alt="Logo" onClick={() => { window.location = '/' }} />
                </div>


            </div>
            <div id="nav-menu" style={{ transform: menuOpen ? "none" : "translate(-100%, 0)" }}>
                <div id="nav-header">
                    <p>MAX GODDARD</p>
                    <div></div>
                </div>

                <NavLink link="/" icon="fa-solid fa-home">Home</NavLink>
                <NavLink link="https://discord.gg/HCP6PAV" icon="fa-brands fa-discord">Discord Server</NavLink>
                <NavLink link="https://github.com/Buckell" icon="fa-brands fa-github">GitHub</NavLink>

                <DropDown label="Rebar">
                    <NavLink link="/rebar" icon="fa-solid fa-home">About</NavLink>
                    <NavLink link="https://github.com/Buckell/Rebar/tree/jit" icon="fab fa-github">Repository</NavLink>
                </DropDown>

                <DropDown label="Featured Projects">
                    <NavLink link="https://github.com/Buckell/JavaLuaJIT">Java-Lua-JIT</NavLink>
                </DropDown>
            </div>
            <div id="closeDiv"
                 style={{
                     display: menuOpen ? "block" : "none",
                     position: "absolute",
                     top: 0,
                     left: 0,
                     width: "100vw",
                     height: "100vh"
                 }}
                 onClick={() => {
                     setMenuOpen(false);
                 }}
            ></div>
        </div>
    );
}