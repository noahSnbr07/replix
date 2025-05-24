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
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
            <HorizontalList
                items={artists}
                title="Artists"
                rounded />
            <HorizontalList
                items={collections}
                title="Collections" />
            <HorizontalList
                items={songs}
                title="Songs" />
        </div>
    );
}