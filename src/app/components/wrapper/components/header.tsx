'use server';

import { banner } from "@/assets/assets";
import { Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {

    return (
        <header className="p-4 flex justify-between">
            <Link href="/" title="Replix" className="opacity-50">
                <Image src={banner} alt="Replix" title="Replix" height={32} />
            </Link>
            <form
                action={"/"}
                className="flex py-1 px-2 items-center gap-2 bg-stack rounded-full">
                <Search size={20} opacity={.5} />
                <input
                    type="text"
                    placeholder="search ..."
                    name="query"
                />
            </form>
            <Link
                className="size-8 rounded-full bg-stack grid place-content-center"
                href={"/"}
                title="Profile">
                <User size={16} opacity={.5} />
            </Link>
        </header>
    );
}