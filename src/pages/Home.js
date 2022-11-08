// Copyright (C) Max Goddard 2022
// All rights reserved.

import React from "react";
import Navbar from "../component/navbar/Navbar";
import SlideTitle from "../component/slide_title/SlideTitle";
import {Card, CardContainer, CardDescription, CardTitle} from "../component/card/Card";
import ResponsiveContainer from "../component/container/ResponsiveContainer";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <ResponsiveContainer>
                <SlideTitle
                    top="Welcome to"
                    bottom="THE CENTRAL"
                />
                <CardContainer>
                    <Card color="rgb(120, 0, 0)" link="/rebar">
                        <CardTitle>Rebar</CardTitle>
                        <CardDescription>
                            A JIT-compiled scripting language with the goal of being familiar,
                            embeddable, robust, and most importantly: super fast.
                        </CardDescription>
                    </Card>
                </CardContainer>
            </ResponsiveContainer>
        </>
    );
}