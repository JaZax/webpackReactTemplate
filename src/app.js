import React from 'react'
import ReactDOM from 'react-dom'
import { gsap } from 'gsap'

import './style.scss'
import Placeholder from './components/Placeholder'

const App = () => {

    return (
        <div className="App" >
            <Placeholder />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))