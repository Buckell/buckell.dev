import React from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import nnfxDark from "react-syntax-highlighter/dist/cjs/styles/hljs/nnfx-dark";

SyntaxHighlighter.registerLanguage("cpp", cpp);

export default function CodeBox(props) {
    return (
        <SyntaxHighlighter language={props.language || "txt"} style={nnfxDark} showLineNumbers={props.showLineNumbers || false}>
            {props.children}
        </SyntaxHighlighter>
    );
}