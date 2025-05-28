'use server';

import { Heart, Maximize, Volume2 } from "lucide-react";
import Image from "next/image";


export default async function Footer() {


    return (
        <footer className="p-4 items-center justify-between flex gap-4">
            <div className="flex gap-2 items-center">
                <Image
                    src={"https://placehold.co/400"}
                    height={32}
                    width={32}
                    className="rounded-sm"
                    title="Artist - Song"
                    alt="Artist - Song"
                />
                <b> Title </b>
            </div>
            <div className="flex gap-4">
                <Volume2 opacity={.5} size={16} />
                <Maximize opacity={.5} size={16} />
                <Heart opacity={.5} size={16} />
            </div>
        </footer>
    );
}