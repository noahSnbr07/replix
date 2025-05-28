'use server';

import { compressedUniversalItem } from "@/interfaces/aside-content";
import Image from "next/image";
import Link from "next/link";

interface props {
    list: compressedUniversalItem[];
    rounded?: boolean;
    routePrefix: string;
}

// return a unstyled list of either collections, artists or songs
export default async function UniversalList({ list, rounded = false, routePrefix }: props) {

    return (
        list.map((item, _i) =>
            <Link
                key={_i}
                title={`${item.name}`}
                className="size-16"
                href={`/${routePrefix}/${item.id}`}>
                <Image
                    style={{ borderRadius: rounded ? 999 : 8 }}
                    src={item.avatar}
                    alt={`${item.name}`}
                    className="size-full"
                    height={64}
                    width={64}
                />
            </Link>

        )
    );
}