// Copyright (C) Max Goddard 2022
// All rights reserved.

import React from "react";

export default function ButtonRow(props) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {Array.isArray(props.children) ? props.children.map((element) => {
                return (
                    <div style={{ margin: "0 10px 10px 0" }}>
                        {element}
                    </div>
                );
            }) :
                <div style={{ margin: "0 10px 10px 0" }}>
                    {props.children}
                </div>
            }
        </div>
    );
}