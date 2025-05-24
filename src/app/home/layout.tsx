'use server';

import React from "react";
import Wrapper from "../components/wrapper/wrapper";

interface props {
    children: React.ReactNode;
}
export default async function layout({ children }: props) {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}