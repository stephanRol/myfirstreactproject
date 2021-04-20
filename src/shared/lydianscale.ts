import GeneralScale from '../types/generalScale'

export const lydianScale: GeneralScale[] = [
    {
        name: 'C',
        scale: [
            { position: 1, note: 'C', suffix: 'major' },
            { position: 2, note: 'D', suffix: 'major' },
            { position: 3, note: 'E', suffix: 'minor' },
            { position: 4, note: 'Gb', suffix: 'dim' },
            { position: 5, note: 'G', suffix: 'major' },
            { position: 6, note: 'A', suffix: 'minor' },
            { position: 7, note: 'B', suffix: 'minor' },
        ]
    },
    {
        name: 'D',
        scale: [
            { position: 1, note: 'D', suffix: 'major' },
            { position: 2, note: 'E', suffix: 'major' },
            { position: 3, note: 'Gb', suffix: 'minor' },
            { position: 4, note: 'Ab', suffix: 'dim' },
            { position: 5, note: 'A', suffix: 'major' },
            { position: 6, note: 'B', suffix: 'minor' },
            { position: 7, note: 'Db', suffix: 'minor' },
        ]
    },
    {
        name: 'E',
        scale: [
            { position: 1, note: 'E', suffix: 'major' },
            { position: 2, note: 'Gb', suffix: 'major' },
            { position: 3, note: 'Ab', suffix: 'minor' },
            { position: 4, note: 'Bb', suffix: 'dim' },
            { position: 5, note: 'B', suffix: 'major' },
            { position: 6, note: 'Db', suffix: 'minor' },
            { position: 7, note: 'Eb', suffix: 'minor' },
        ]
    },
    {
        name: 'F',
        scale: [
            { position: 1, note: 'F', suffix: 'major' },
            { position: 2, note: 'G', suffix: 'major' },
            { position: 3, note: 'A', suffix: 'minor' },
            { position: 4, note: 'B', suffix: 'dim' },
            { position: 5, note: 'C', suffix: 'major' },
            { position: 6, note: 'D', suffix: 'minor' },
            { position: 7, note: 'E', suffix: 'minor' },
        ]
    },
    {
        name: 'G',
        scale: [
            { position: 1, note: 'G', suffix: 'major' },
            { position: 2, note: 'A', suffix: 'major' },
            { position: 3, note: 'B', suffix: 'minor' },
            { position: 4, note: 'Db', suffix: 'dim' },
            { position: 5, note: 'D', suffix: 'major' },
            { position: 6, note: 'E', suffix: 'minor' },
            { position: 7, note: 'Gb', suffix: 'minor' },
        ]
    },
    {
        name: 'A',
        scale: [
            { position: 1, note: 'A', suffix: 'major' },
            { position: 2, note: 'B', suffix: 'major' },
            { position: 3, note: 'Db', suffix: 'minor' },
            { position: 4, note: 'Eb', suffix: 'dim' },
            { position: 5, note: 'E', suffix: 'major' },
            { position: 6, note: 'Gb', suffix: 'minor' },
            { position: 7, note: 'Ab', suffix: 'minor' },
        ]
    },
    {
        name: 'B',
        scale: [
            { position: 1, note: 'B', suffix: 'major' },
            { position: 2, note: 'Db', suffix: 'major' },
            { position: 3, note: 'Eb', suffix: 'minor' },
            { position: 4, note: 'F', suffix: 'dim' },
            { position: 5, note: 'Gb', suffix: 'major' },
            { position: 6, note: 'Ab', suffix: 'minor' },
            { position: 7, note: 'Bb', suffix: 'minor' },
        ]
    }
]