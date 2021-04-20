import React from 'react'
import { NavLink, Route, Switch } from "react-router-dom"
import Chords from './Chords'

export default function home() {
    return (
        <div>
            <div className="large ui celled horizontal list center aligned" style={{ fontWeight: 'bold', marginLeft: '34%', marginTop: 40, marginBottom: 50 }}>
                Keys:&nbsp;&nbsp;&nbsp;
                <NavLink to="/home/chords/All" className="item ">All</NavLink>
                <NavLink to="/home/chords/C" className="item">C</NavLink>
                <NavLink to="/home/chords/Db" className="item">C# / Db</NavLink>
                <NavLink to="/home/chords/D" className="item">D</NavLink>
                <NavLink to="/home/chords/Eb" className="item">D# / Eb</NavLink>
                <NavLink to="/home/chords/E" className="item">E</NavLink>
                <NavLink to="/home/chords/F" className="item">F</NavLink>
                <NavLink to="/home/chords/Gb" className="item">F# / Gb</NavLink>
                <NavLink to="/home/chords/G" className="item">G</NavLink>
                <NavLink to="/home/chords/Ab" className="item">G# / Ab</NavLink>
                <NavLink to="/home/chords/A" className="item">A</NavLink>
                <NavLink to="/home/chords/Bb" className="item">A# / Bb</NavLink>
                <NavLink to="/home/chords/B" className="item">B</NavLink>
            </div>

            <Switch>
                <Route path="/home/chords/:id/:suffix">
                    <Chords />
                </Route>
                <Route path="/home/chords/:id">
                    <Chords />
                </Route>
                <Route path="/home">
                    <div style={{ marginLeft: '6%' }}>
                        <div className="ui raised very padded text container segment">
                            <h1 className="ui centered header">A great support in your musical compositions!</h1><br />
                            <img className="ui centered large circular image" src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Not found" />
                            <br /><h3 className='ui centered header' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt laboriosam quis explicabo autem ea suscipit necessitatibus sapiente fuga est dignissimos quibusdam perferendis officia, iusto, id dolorem nemo nulla? Pariatur.</h3>
                            <p></p>
                        </div>
                    </div>

                </Route>
            </Switch>


        </div >
    )
}
