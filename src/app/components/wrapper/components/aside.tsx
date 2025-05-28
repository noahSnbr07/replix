'use server';

import getAsideContent from "@/app/server/get-aside-content";
import { Library } from "lucide-react";
import UniversalList from "../../universal-list/universal-list";


// left aside -> library
// contains saved artists, collections and songs
// TODO: expanding/ collapsing feature
export default async function Aside() {

    const response = await getAsideContent();
    if (response.error || !response.data) return;

    const { collections, artists } = response.data;

    return (
        <aside className="px-4 flex flex-col gap-4">
            <div className="flex gap-4 opacity-50">
                <Library />
                <b> Your Library </b>
            </div>
            <div className="flex-2 grid grid-cols-3 content-start gap-2 overflow-y-scroll">
                <UniversalList
                    routePrefix="artist"
                    rounded list={artists} />
                <UniversalList
                    routePrefix="collection"
                    list={collections} />
            </div>
        </aside>
    );
}