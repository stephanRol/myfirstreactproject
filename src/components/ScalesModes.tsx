import React from 'react'
import { infoscale } from '../shared/infoscale'

interface Props {
    scaleType: string;
    notesProgression: {
        akkord: string[];
        nameNote: string;
        suffix: string;
    }[]
}
export default function ScalesModes(props: Props) {
    const infoOneScale = infoscale.filter(scale => props.scaleType == scale.name)[0]
    console.log(props.notesProgression);

    return (
        <div>
            {props.scaleType !== '' && props.notesProgression !== [] ?
                <div>
                    {props.notesProgression.map(note => {
                        return <div className="ui raised circular segment" style={{ width: 150, height: 150 }}>
                            <h2 className="ui header">
                                {note.nameNote}
                                <div className="sub header">{note.suffix}</div>
                            </h2>
                        </div>
                    })}
                    <br />
                    <div className="ui horizontal segments">
                        <div className="ui segment">
                            <h2 className='ui header'>{props.scaleType.charAt(0).toUpperCase() + props.scaleType.slice(1)}</h2>
                            <p>Sensations:</p>
                            <ul className="ui list">
                                <li>{infoOneScale.sensations[0]}</li>
                                <li>{infoOneScale.sensations[1]}</li>
                                <li>{infoOneScale.sensations[2]}</li>
                            </ul>
                            <img className='ui tiny image' src={infoOneScale.image} alt="Not found" />
                        </div>
                        <div className="ui segment">
                            <h3 className='ui header'>Recommended progressions:</h3><br />
                            <ul className="ui list">
                                <li>{infoOneScale.progressions[0]}</li>
                                <li>{infoOneScale.progressions[1]}</li>
                                <li>{infoOneScale.progressions[2]}</li>
                                <li>{infoOneScale.progressions[3]}</li>
                            </ul>
                        </div>
                        <div className="ui segment">
                            <h3 className='ui header'> Song Examples:</h3><br />
                            <ul className="ui list">
                                <li>{infoOneScale.songs[0]}</li>
                                <li>{infoOneScale.songs[1]}</li>
                                <li>{infoOneScale.songs[2]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                : ''}
        </div>
    )
}
