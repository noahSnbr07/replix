'use server';

import React from "react";
import Aside from "./components/aside";
import Header from "./components/header";
import Footer from "./components/footer";

interface props { children: React.ReactNode; }

//! only use this component in layout files
// wraps a route with library, header, footer
export default async function Wrapper({ children }: props) {
    return (
        <div className="size-full flex flex-col">
            <Header />
            <div className="flex flex-1 min-h-0 overflow-hidden">
                <Aside />
                <div className="flex-1 flex flex-col min-h-0">
                    <main className="flex-1 overflow-y-auto bg-stack rounded-l-2xl">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
