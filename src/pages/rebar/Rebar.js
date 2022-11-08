// Copyright (C) Max Goddard 2022
// All rights reserved.

import React from "react";
import Navbar from "component/navbar/Navbar";
import SlideTitle from "component/slide_title/SlideTitle";
import CodeBox from "component/syntax_highlighting/CodeBox";
import {SectionTitle} from "component/text/Title";
import ResponsiveContainer from "../../component/container/ResponsiveContainer";
import {SimpleDescription} from "../../component/text/Description";
import BlockButton from "../../component/button/BlockButton";
import ButtonRow from "../../component/button/ButtonRow";

const codeSample = `#include "rebar/rebar.hpp"

int main() {
    // Create the environment. This is where the magic happens.
    rebar::environment env;

    // Compile a string to print "Hello, world!" three times
    // and return "Goodbye, world!"
    rebar::function main_func = env.compile_string(R"(
        for (local i = 0; i < 3; ++i) {
            PrintLn("Hello, world!");
        }

        return "Goodbye, world!";
    )");

    // Call our compiled function and get the return value.
    rebar::object return_object = main_func();

    std::cout << return_object << std::endl; // "Goodbye, world!"
}`;

export default function RebarPage() {
    return (
        <>
            <Navbar />
            <ResponsiveContainer>
                <SlideTitle
                    top="This is"
                    bottom="Rebar"
                    color="#911"
                />
                <ButtonRow>
                    <BlockButton
                        color="#C22"
                        icon="fab fa-github"
                        link="https://github.com/Buckell/Rebar/tree/jit"
                    >GitHub</BlockButton>

                    <BlockButton
                        color="#C22"
                        icon="fa fa-book"
                    >Documentation</BlockButton>

                    <BlockButton
                        color="#C22"
                    >Test</BlockButton>
                </ButtonRow>
                <SectionTitle>Implementation Example</SectionTitle>
                <SimpleDescription>
                    This is an example of implementing Rebar in a host C++ application.
                </SimpleDescription>
                <CodeBox language="cpp">
                    {codeSample}
                </CodeBox>
            </ResponsiveContainer>
        </>
    );
}