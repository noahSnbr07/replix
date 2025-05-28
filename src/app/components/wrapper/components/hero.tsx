'use server';

import Image from "next/image";

interface props {
    rounded?: boolean;
    name: string;
    avatar: string;
}

export default async function Hero({ name, avatar, rounded = false }: props) {


    return (
        <div className="flex gap-4 items-end bg-stack p-4">
            <Image
                style={{ borderRadius: rounded ? 999 : 8 }}
                alt={name}
                title={name}
                height={128}
                width={128}
                src={avatar} />
            <b className="text-[48px] "> {name} </b>
        </div>
    );
}