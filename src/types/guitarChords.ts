export default interface GuitarChord {
    key: string;
    suffix: string;
    positions: [{
        frets: string[];
        notes: string[];
    }];
    thumbnail: Thumbnails[];
}

export interface Thumbnails {
    url: string;
    title: string;
}