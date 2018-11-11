import * as React from 'react';

// Stylings
import './Intro.scss';

export default class Intro extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render () {
        return (
            <div className="backdrop">
                <p>HELLO</p>
                <div className="horizon">
                    <span id="verticals-left-1" />
                    <span id="verticals-left-2" />
                    <span id="horizontals-1" />
                    <span id="horizontals-2" />
                </div>
            </div>
        )
    }
}