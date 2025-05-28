"use server";

import { compressedUniversalItem } from "@/interfaces/aside-content";
import Image from "next/image";
import Link from "next/link";

interface props {
    items: compressedUniversalItem[];
    title: string;
    rounded?: boolean;
    routePrefix: string;
}

// render a list of either songs, collections or artists
// pre styled list with horizontal layout
// early prototype -> no actual URLs
export default async function HorizontalList({ items, title, rounded = false, routePrefix }: props) {

    return (
        <div className="flex gap-2 flex-col">
            <b> {title} </b>
            <div className="flex gap-2 overflow-x-scroll">
                {items.map((item, _i) =>
                    <Link
                        className="flex flex-col gap-2"
                        key={_i}
                        href={`/${routePrefix}/${item.id}`}>
                        <Image
                            alt={item.name}
                            style={{ borderRadius: rounded ? 999 : 16 }}
                            height={96}
                            width={96}
                            title={item.name}
                            src={item.avatar}
                        />
                        <p className="opacity-50 text-center"> {item.name} </p>
                    </Link>
                )}
            </div>
        </div>
    );
}