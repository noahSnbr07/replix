'use server';

import Queue from "@/app/components/queue/queue";
import database from "@/config/database";
import { redirect } from "next/navigation";
import Hero from "../../components/wrapper/components/hero";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const param = (await params).id

    //catch errors and redirect
    //no column, empty queue, no queue -> redirect
    const collection = await database.collection.findUnique({ where: { id: param }, include: { queue: true } });
    if (!collection || !collection.queue || collection.queue.length < 1) redirect("/home");

    return (
        <div className="size-full flex flex-col">
            <Hero
                avatar={collection.avatar}
                name={collection.name} />
            <div className="p-4">
                <Queue queue={collection.queue} />
            </div>
        </div>
    );
}