'use server';

import database from "@/config/database";
import { redirect } from "next/navigation";
import Queue from "@/app/components/queue/queue";
import Hero from "@/app/components/wrapper/components/hero";

export default async function page({ params }: { params: Promise<{ id: string }> }) {

    //retrieve artist by query param: id
    const id = (await params).id;
    const artist = await database.artist.findUnique({ where: { id }, include: { discography: { select: { songs: true } } } });
    if (!artist || !artist.discography) redirect("/home");

    return (
        <div className="size-full">
            <Hero
                rounded
                avatar={artist.avatar}
                name={artist.name} />
            <div className="p-4">
                <Queue queue={artist.discography.songs} />
            </div>
        </div>
    );
}