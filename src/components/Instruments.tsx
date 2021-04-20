import React, { ReactElement, useEffect, useState } from 'react';
import * as Tone from 'tone'
import { chordProgression } from '../shared/chordprogressions'
import { majorScale } from '../shared/majorscale'
import { minorScale } from '../shared/minorscale'
import { dorianScale } from '../shared/dorianscale';
import { phrygianScale } from '../shared/phrygianscale';
import { lydianScale } from '../shared/lydianscale';
import { mixolydianScale } from '../shared/mixolydianscale';
import { locrianScale } from '../shared/locrianscale';
import ScalesModes from './ScalesModes'
import { guitarChords } from '../shared/guitarchords'
//import axios, { AxiosResponse } from 'axios';


export default function Instruments(): ReactElement {

    const [scale, setScale] = useState('')
    const [scaleType, setScaleType] = useState('')
    const [progression, setProgression] = useState('')
    const [akkorde, setAkkorde] = useState<any[]>([])
    const [showChordProgression, setShowChordProgression] = useState('')
    const [notesProgression, setNotesProgression] = useState<any[]>([])
    //const [chordsJson, setChordsJson] = useState<any[]>([])

    /*
    useEffect(() => {
        axios({
            method: 'get',
            url: ''
        })
            .then((response: AxiosResponse<any[]>) => {
                console.log(response.data)
            })
    })
    */

    const searchProgression = (e: any) => {
        akkorde.length = 0
        console.log('Primera entrada acorde:');
        console.log(akkorde);

        if (scale == '' || scaleType == '' || progression == '') {
            alert('Ein oder mehrere Felder sind nicht ausgewählt')
            return
        }
        let scaleName: any = []

        switch (scaleType) {
            case 'major':
                scaleName = majorScale
                break;
            case 'minor':
                scaleName = minorScale
                break;
            case 'dorian':
                scaleName = dorianScale
                break;
            case 'phrygian':
                scaleName = phrygianScale
                break;
            case 'lydian':
                scaleName = lydianScale
                break;
            case 'mixolydian':
                scaleName = mixolydianScale
                break;
            case 'locrian':
                scaleName = locrianScale
                break;
        }
        //Scale
        const listScale = scaleName.filter((note: any) =>
            scale == note.name
        )
        listScale[0].scale.map((Tonleiter: any) => {
            guitarChords.map(chord => {
                if (chord.key == Tonleiter.note && chord.suffix == Tonleiter.suffix) {
                    console.log(chord.positions[0].notes);
                    akkorde.push({
                        akkord: [...chord.positions[0].notes],
                        nameNote: chord.key,
                        suffix: chord.suffix
                    })
                    setAkkorde(akkorde)
                }
            })
        })
        console.log(listScale)
        console.log(scale);
        console.log(scaleType);
        console.log(progression);
        console.log('Akkorde List: ');
        console.log(akkorde)

        const progressionNumbers = chordProgression.filter((chord, index) =>
            chord.title == progression
        )[0].progression

        console.log('Number Progression');
        console.log(progressionNumbers);

        const notesProgression = progressionNumbers.map(number => {
            return akkorde.filter((akkord: any, index: any) =>
                index + 1 == number
            )[0]
        })
        console.log('Notes Progression');
        console.log(notesProgression);
        setNotesProgression(notesProgression);

        let showAll: string = '';
        notesProgression.forEach((note, index) => {
            let stringA: string = note.nameNote + (note.suffix == 'major' ? '' : (note.suffix == 'minor' ? 'm' : note.suffix))
            showAll = showAll + stringA + (notesProgression.length == index + 1 ? '' : ' - ')
        })
        setShowChordProgression(showAll)
    }

    const startPiano = () => {
        const sampler = new Tone.Sampler({
            urls: {
                "C4": "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                "A4": "A4.mp3",
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination();

        Tone.loaded().then(() => {
            const now = Tone.now()

            console.log('The progression is...');
            console.log(notesProgression);
            console.log('The note is...');
            console.log(notesProgression[0].nameNote);
            console.log('The chord is...');
            console.log(notesProgression[0].akkord);
            console.log('The first note of chord is...');
            console.log(notesProgression[0].akkord[0]);

            let deltaTime: number = 0

            notesProgression.forEach((note: any) => {
                note.akkord.forEach((noteAkk: any) => {
                    if (noteAkk !== 'X') sampler.triggerAttack(noteAkk, now + deltaTime);
                })
                deltaTime = deltaTime + 1.25
            })
        })
    }

    const startGuitar = () => {

        const sampler = new Tone.Sampler({
            urls: {
                "E2": "E2.mp3",
                "D3": "D3.mp3",
                "G3": "G3.mp3",
                "E4": "E4.mp3",
            },
            release: 1,
            baseUrl: "https://react-guitar.com/samples/",
        }).toDestination();

        Tone.loaded().then(() => {
            const now = Tone.now()

            console.log('The progression is...');
            console.log(notesProgression);
            console.log('The note is...');
            console.log(notesProgression[0].nameNote);
            console.log('The chord is...');
            console.log(notesProgression[0].akkord);
            console.log('The first note of chord is...');
            console.log(notesProgression[0].akkord[0]);

            let deltaTime1: number = 0

            notesProgression.forEach((note: any) => {
                let deltaTime2: number = 0
                note.akkord.forEach((noteAkk: any) => {
                    if (noteAkk !== 'X') sampler.triggerAttack(noteAkk, now + deltaTime2 + deltaTime1);
                    deltaTime2 = deltaTime2 + 0.05
                })
                deltaTime1 = deltaTime1 + 1.25
            })
        })
    }
    return (
        <div className="App">
            <select onChange={e => setScale(e.target.value)} name="scales" id="scales" className="ui dropdown">
                <option disabled selected>Select a scale</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
            <select onChange={e => setScaleType(e.target.value)} name="typeScale" id="typeScale" className="ui dropdown">
                <option disabled selected>Select a type</option>
                <option value="major">major</option>
                <option value="minor">minor</option>
                <option value="dorian">dorian</option>
                <option value="phrygian">phrygian</option>
                <option value="lydian">lydian</option>
                <option value="mixolydian">mixolydian</option>
                <option value="locrian">locrian</option>

            </select>
            <select onChange={e => setProgression(e.target.value)} name="progression" id="progression" className="ui dropdown">
                <option disabled selected>Select a progression</option>
                {chordProgression.map(progression => {
                    return <option >{progression.title}</option>
                })}
            </select>
            <button onClick={searchProgression} className='ui blue button'>
                <i className="search icon"></i>
                Search Progression</button>
            <h3 className='ui header'>{showChordProgression ? 'Progression: ' : ''}&nbsp;  {showChordProgression}</h3>
            {showChordProgression !== '' ?
                <div>
                    <button onClick={startGuitar} className='ui red button'>
                        <i className="play icon"></i>
                        Start Guitar
                    </button>
                    <button onClick={startPiano} className='ui red button'>
                        <i className="play icon"></i>
                        Start Piano
                    </button><br /><br />

                    {notesProgression.map(note => {
                        return <div className="ui left floated small images">
                            <img src={guitarChords.filter(chord => chord.key == note.nameNote && chord.suffix == note.suffix)[0].thumbnail[0].url} alt="Not Encontrado" />
                        </div>
                    })}
                    <br style={{ clear: 'both' }} />
                </div>
                : ''
            }
            <ScalesModes scaleType={scaleType} notesProgression={notesProgression} />
        </div >
    );
}
