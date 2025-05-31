"use server";

import settingsEntries from "@/assets/constants/settings-entries";
import Link from "next/link";

interface props {
    children: React.ReactNode;
}

export default async function layout({ children }: props) {

    return (
        <div className="size-full flex">
            <aside className="flex flex-col gap-4 p-4 border-r-2 border-stack">
                <b className="text-2xl"> Settings </b>

                {/* map settings entries */}
                <div className="flex flex-col">
                    {settingsEntries.map((entry) =>
                        <Link
                            className="flex gap-4 p-2 hover:bg-stack rounded-lg opacity-50 hover:opacity-100"
                            title={entry.title}
                            key={entry.id}
                            href={entry.href}>
                            {entry.icon}
                            <b> {entry.title} </b>
                        </Link>
                    )}
                </div>
            </aside>
            {/* main wrapper */}
            <div className="flex flex-1 justify-center">

                {/* render content here */}
                <div className="w-3xl p-4 h-full border-x-2 border-stack"> {children} </div>
            </div>
        </div>
    );

}