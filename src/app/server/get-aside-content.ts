"use server";

import database from "@/config/database";
import ActionResponse from "@/interfaces/action-response";
import AsideContent from "@/interfaces/aside-content";

interface _props {

}

// fetch database columns on songs, artists, collections
// TODO: add take limit
export default async function getAsideContent({ }: _props): Promise<ActionResponse<AsideContent>> {

    //define query
    const queryConfig = { id: true, name: true, avatar: true, }

    try {

        //retrieve data
        const songs = await database.song.findMany({ select: queryConfig });
        const artists = await database.artist.findMany({ select: queryConfig });
        const collections = await database.collection.findMany({ select: queryConfig });

        return {
            status: 200,
            data: {
                artists,
                songs,
                collections,
            },
            error: null,
            success: true,
            message: "Successfully retrieved data",
        }

    } catch (error) {
        return {
            status: 500,
            data: null,
            error: error as Error,
            success: false,
            message: "Internal server error",
        }
    }

}