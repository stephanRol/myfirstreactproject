import React, { ReactElement } from "react"
import { NavLink } from "react-router-dom"

interface Props {
    children: ReactElement
}

export default function Layout(props: Props): ReactElement {
    return (
        <>
            <h1 className="ui left aligned header ui inverted segment" style={{ fontSize: 35, padding: 20, marginBottom: 0, opacity: 0.9 }}>
                Chords Database
                <img className='ui small image left floated' src="https://www.flaticon.com/svg/vstatic/svg/1389/1389396.svg?token=exp=1615242382~hmac=7e7d6dfbb278c097b361b1aa1824fd7b" alt=""
                    style={{ marginTop: 7, marginRight: 20 }} />
            </h1>

            <div className="ui large menu ui inverted segment" style={{ marginTop: 0, opacity: 0.8 }}>
                <NavLink exact to="/" className="item">Home</NavLink>
                <NavLink exact to="/theory" className="item">Theory</NavLink>
                <NavLink to="/Instruments" className="item">Test Progressions</NavLink>
            </div>

            <div className="" style={{ marginLeft: 120, marginRight: 200 }}>
                {props.children}
            </div>
        </>
    )
}
