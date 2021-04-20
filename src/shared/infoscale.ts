import InfoScale from '../types/infoScale'

export const infoscale: InfoScale[] = [
    {
        name: 'major',
        sensations: ['Joyfulness', 'Bright sound', 'Harmony and beauty'],
        image: 'https://www.escribircanciones.com.ar/images/stories/modosgriegosyemociones/jonico.png',
        progressions: ['I - IV - vi - V - I', 'I - ii - IV - V - I', 'I - V - vi - IV - I', 'I - iii - vi - V - I'],
        songs: ['The Beatles – Twist and Shout', 'Jason Mraz – I’m Yours', 'Ritchie Valens - La bamba']
    },
    {
        name: 'lydian',
        sensations: ['Cheerful, positive or inspiring air', 'Fantasy, dreamy, mystical', 'Bright sound'],
        image: 'https://www.escribircanciones.com.ar/images/stories/modosgriegosyemociones/lidio.png',
        progressions: ['I - II - I - II - iv - V - iv - V - I', 'I - vi - II - V - I', 'I - V - I - II - I', 'I - II - I - II'],
        songs: ['REM – Man On The Moon', 'John Williams – E.T. Theme', 'Pearl Jam – Oceans']
    },
    {
        name: 'mixolydian',
        sensations: ['Summery and country', 'Youthful and carefree', 'Epic Sound and start of transition from brighter sounding modes to darker.'],
        image: 'https://www.escribircanciones.com.ar/images/stories/modosgriegosyemociones/mixo.png',
        progressions: ['I - VII - I - VII - I', 'I - vi - IV - V - VII - I', 'I - IV - I - VII - I', 'I - ii - IV - VII - I'],
        songs: ['Blind Melon – No Rain', 'Steppenwolf – Born to be Wild', 'Lynyrd Skynyrd – Sweet Home Alabama']
    },
    {
        name: 'dorian',
        sensations: ['Slightly dark sound', 'Melancholic tinge', 'Duality between happy and sad, transition from brighter sounding modes to darker. '],
        image: 'https://www.escribircanciones.com.ar/images/stories/modosgriegosyemociones/dorico.png',
        progressions: ['i - IV - i - VII - i', 'i - VII - i - VII - i', 'i - IV - ii - v - VII - i', 'i - III - IV - i - VII - i'],
        songs: ['The Beatles – Eleanor Rigby', 'The Doors - Light My Fire', 'Smash Mouth – Walking on the Sun']
    },
    {
        name: 'minor',
        sensations: ['Sadness, melancholy, anger', 'Often used as a variation of the Ionian mode', 'Dark and melancholic sound'],
        image: 'https://www.escribircanciones.com.ar/images/stories/modosgriegosyemociones/eolico.png',
        progressions: ['i - VI - VII - i', 'i - iv - v - i', 'i - iv V7 - i', 'i - III - i - VII - i'],
        songs: ['The Eagles - Hotel California', 'Oasis- Wonderwall', 'B.B. King – The Thrill is Gone']
    },
    {
        name: 'phrygian',
        sensations: ['Mystery, exotic', 'Malevolent, sinister, menacing', 'Dark sound'],
        image: 'https://www.escribircanciones.com.ar/images/stories/modosgriegosyemociones/frigio.png',
        progressions: ['i - II - III - i', 'i - V7 - i - II - i', 'i - iv - i - II - i', 'i - III - vii - i'],
        songs: ['Jefferson  Airplane – White Rabbit', 'David Bowie – Space Oddity (intro)', 'Iron Maiden – Remember Tomorrow']
    },
    {
        name: 'locrian',
        sensations: ['Unstable', 'Unpleasant, dark sound', 'Excessive tension, psycho'],
        image: 'https://www.escribircanciones.com.ar/images/stories/modosgriegosyemociones/locrio.png',
        progressions: ['i - V - i - V - i', 'i - iii - i - II - i', 'i - iii - vii - i', 'i - vii - i - vii - i'],
        songs: ['Björk - Army of Me', 'The Strokes - Juicebox', 'John Kirkpatrick  – Dust to Dust']
    },

]
