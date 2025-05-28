import React from "react";
import Wrapper from "../components/wrapper/wrapper";

export default async function layout({ children }: { children: React.ReactNode }) {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}