import React, { Fragment } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { guitarChords } from '../shared/guitarchords'

export default function Chords() {
    const { id } = useParams<{ id: string }>()
    const { suffix } = useParams<{ suffix: string }>()

    let listChords = guitarChords.filter(chord =>
        suffix ? chord.key == id && chord.suffix == suffix : chord.key == id
    )
    let menuLeft = guitarChords.filter(chord =>
        chord.key == id
    )

    if (menuLeft.length == 0) {
        listChords = guitarChords
        menuLeft = guitarChords
    }

    return (
        <div>
            <div className="ui grid">

                <div className="three wide column" style={{ opacity: 0.7, marginTop: 10, marginRight: '1%', marginLeft: '2%' }}>
                    <div className="ui inverted vertical menu">
                        {menuLeft.map((chord => {
                            return <NavLink exact to={`/home/chords/${chord.key}/${chord.suffix}`} className="item">{chord.key} {chord.suffix}</NavLink>
                        }))}
                    </div>
                </div>

                <div className="twelve wide column">
                    <div>
                        <div className="ui four column doubling stackable grid container">
                            {
                                listChords.map(chord => {
                                    return (
                                        !suffix ?
                                            <div>
                                                <div className="column text center aligned">
                                                    <img className='ui small image centered' src={chord.thumbnail[0].url} alt="Not Found" />
                                                    <p className='text centered' style={{ color: 'DimGrey', marginTop: "3%", margin: "10%", textAlign: 'center', fontWeight: 'bold' }}>{chord.thumbnail[0].title}</p>
                                                </div>
                                            </div>
                                            :
                                            <>
                                                {chord.thumbnail.map(thumb =>
                                                    <div>
                                                        <div className="left floated column text center aligned">
                                                            <img className='ui small image centered' src={thumb.url} alt="Not Found" />
                                                            <p className='text centered' style={{ color: 'DimGrey', marginTop: "3%", margin: "10%", textAlign: 'center', fontWeight: 'bold' }}>{thumb.title}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
