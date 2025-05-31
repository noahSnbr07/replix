'use server';

import Queue from "@/app/components/queue/queue";
import database from "@/config/database";

/* interface _props {
    queue: Song[];
} */

export default async function QueueBox(/*{ queue }: _props*/) {

    //TODO: replace queue with actual queue
    //! not-actual queue fetching below
    const temporaryQueue = await database.artist.findUnique({ where: { id: "31aa5005-b6ec-47c5-a901-67f443c5e883" }, include: { discography: { select: { songs: true } } } });


    return (
        <div className="flex w-1/3 flex-col">
            <Queue queue={temporaryQueue!.discography.songs} />
        </div>
    );
}