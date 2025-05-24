'use server';

import { compressedUniversalItem } from "@/interfaces/aside-content";
import Image from "next/image";
import Link from "next/link";

interface props {
    list: compressedUniversalItem[];
    rounded?: boolean;
}

// return a unstyled list of either collections, artists or songs
export default async function UniversalList({ list, rounded = false, }: props) {

    return (
        list.map((artist, _i) =>
            <Link
                key={_i}
                title={`${artist.name}`}
                className="size-16"
                href={"/"}>
                <Image
                    style={{ borderRadius: rounded ? 999 : 8 }}
                    src={artist.avatar}
                    alt={`${artist.name}`}
                    className="size-full"
                    height={64}
                    width={64}
                />
            </Link>

        )
    );
}