
// song, collection and artist have similar props
// use this for compressed entries to show minimal information
// compressed items ensure small queries and good performance
export interface compressedUniversalItem {
    avatar: string;
    id: string;
    name: string;
}

export default interface AsideContent {
    songs: compressedUniversalItem[];
    artists: compressedUniversalItem[];
    collections: compressedUniversalItem[];
}