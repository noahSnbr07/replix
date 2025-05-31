'use server';

import Image from "next/image";

interface _props {
    avatar: string;
    name: string;
    artist: string;
}

export default async function Info({ avatar, name, artist }: _props) {


    return (
        <div className="flex gap-8 items-end">
            <Image
                className="rounded-lg"
                height={256}
                width={256}
                src={avatar}
                title={`${artist} - ${name}`}
                alt={`${artist} - ${name}`}
            />
            <div className="flex flex-col">
                <b className="text-5xl"> {name} </b>
                <i className="text-sm opacity-50"> {artist} </i>
            </div>
        </div>
    );
}