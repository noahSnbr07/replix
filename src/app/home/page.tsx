'use server';

import getAsideContent from "../server/get-aside-content";
import HorizontalList from "./components/horizontal-list";

export default async function page() {

    // get content
    //TODO: better error handling
    const data = await getAsideContent();
    if (!data.data || data.error) return;
    const { artists, collections, songs } = data.data;

    return (
        <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
            <HorizontalList
                routePrefix="artist"
                items={artists}
                title="Artists"
                rounded />
            <HorizontalList
                routePrefix="collection"
                items={collections}
                title="Collections" />
            <HorizontalList
                routePrefix="focus"
                items={songs}
                title="Songs" />
        </div>
    );
}