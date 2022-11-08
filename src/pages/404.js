// Copyright (C) Max Goddard 2022
// All rights reserved.

import React from "react";
import Navbar from "component/navbar/Navbar";
import SlideTitle from "component/slide_title/SlideTitle";
import CodeBox from "component/syntax_highlighting/CodeBox";
import {SectionTitle} from "component/text/Title";
import ResponsiveContainer from "component/container/ResponsiveContainer";
import {SimpleDescription} from "component/text/Description";
import BlockButton from "component/button/BlockButton";
import ButtonRow from "component/button/ButtonRow";


export default function Error404Page() {
    return (
        <>
            <Navbar />
            <ResponsiveContainer>
                <SlideTitle
                    top="This page was"
                    bottom="Not Found"
                />
                <ButtonRow>
                    <BlockButton
                        icon="fa-solid fa-home"
                        link="/"
                    >Home</BlockButton>
                </ButtonRow>
            </ResponsiveContainer>
        </>
    );
}