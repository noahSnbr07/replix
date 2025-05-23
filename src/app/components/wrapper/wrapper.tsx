'use server';

import React from "react";
import Aside from "./components/aside";
import Header from "./components/header";

interface props { children: React.ReactNode; }

export default async function Wrapper({ children }: props) {

    return (
        <div className="size-full flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Aside />
                <div className="flex-1 flex flex-col">
                    <main className="flex-1 bg-stack rounded-l-2xl p-4"> {children} </main>
                    <footer className="py-4">footer</footer>
                </div>
            </div>
        </div>
    );
}