"use server";

import { Song } from "@prisma/client";
import Image from "next/image";

interface props {
    queue: Song[];
}

export default async function Queue({ queue }: props) {

    return (
        <div className="flex flex-col">
            {queue.map((song, _i) =>
                <button
                    key={_i}
                    className="flex p-2 gap-2 cursor-pointer hover:opacity-50 odd:bg-stack">
                    <Image
                        className="rounded-sm"
                        src={song.avatar}
                        alt={song.name}
                        title={`${song.name} avatar`}
                        height={32}
                        width={32} />

                    <b> {song.name} </b>
                </button>)}
        </div>
    );
}