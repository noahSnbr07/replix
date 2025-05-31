'use server';

import database from "@/config/database";
import Info from "../components/info";
import QueueBox from "../components/queue-box";
import { redirect } from "next/navigation";

export default async function page({ params }: { params: Promise<{ id: string }> }) {

    const id = await (await params).id
    const song = await database.song.findUnique({ where: { id } });
    if (!song) redirect("/home");

    return (
        <div className="size-full p-8 flex justify-between items-end">
            <Info
                avatar={song.avatar}
                name={song.name}
                artist={`[>ARTIST NAME<]`}
            />
            <QueueBox /*queue={[]}*/ />
        </div>
    );
}