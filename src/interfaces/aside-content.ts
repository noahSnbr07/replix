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