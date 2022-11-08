import React from "react";

export default function ButtonRow(props) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {props.children.map((element) => {
                return (
                    <div style={{ margin: "0 10px 10px 0" }}>
                        {element}
                    </div>
                );
            })}
        </div>
    );
}