// Copyright (C) Max Goddard 2022
// All rights reserved.

import React from "react";
import styled from "styled-components";
import Icon from "../text/Icon";

export default function BlockButton(props) {
    const Button = styled.button`
        background-color: black;
        border: hidden;
        border-radius: 0;
        color: white;
        padding: 10px 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 18px;
        height: 45px;
        cursor: ${props.onClick || props.link ? "pointer" : "initial"};
      
        :hover {
            background-color: ${props.color || "#b84dea"};
        }
      
        :active {
            background-color: #333;
        }
    `;

    return (
        <Button
            onClick={props.link ?
                () => window.location = props.link
                : props.onClick
            }
        >
            {props.icon ?
                <>
                    <div style={{
                        float: "left",
                        width: "35px",
                        textAlign: "left"
                    }}>
                        <Icon>{props.icon}</Icon>
                    </div>
                    <div style={{ float: "right" }}>
                        {props.children}
                    </div>
                </>
                :
                <>{props.children}</>
            }
        </Button>
    );
}