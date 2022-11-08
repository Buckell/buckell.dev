// Copyright (C) Max Goddard 2022
// All rights reserved.

import React, {createRef, useEffect} from "react";
import "./SlideTitle.css"

export default function SlideTitle(props) {
    const topRef = createRef();
    const bottomRef = createRef();

    useEffect(() => {
        window.onload = () => {
            topRef.current.style.transform = "none";
            bottomRef.current.style.transform = "none";
        }
    });

    return (
        <div className="slide-container">
            <p ref={topRef} className="slide-top">{props.top}</p><br/>
            <p ref={bottomRef} className="slide-bottom">{props.bottom}</p><br/>
            <div style={{
                width: "calc(100% - 60px)",
                height: "10px",
                backgroundColor: props.color || "#630381",
                margin: "20px 30px"
            }}></div>
        </div>
    );
}