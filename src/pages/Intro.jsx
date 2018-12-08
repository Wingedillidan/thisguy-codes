import * as React from 'react';

// Stylings
import './Intro.scss';

const TRANSITION_CLASSNAME = 'active';

export default class Intro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horizontals: this.generateSpans(25, 1),
            transitionClass: TRANSITION_CLASSNAME,
            animCounter: 1
        }
    }
    generateSpans(n, offset=0) {
        const result = [];

        for (let i = 0; i < n; i++) {
            result.push(<span key={i + offset} />);
        }

        return result;
    }
    render () {
        const {horizontals, transitionClass} = this.state;
        return (
            <div className="backdrop">
                <div className="backdrop-curtains">
                    {this.generateSpans(3)}
                </div>
                <div className="horizon">
                    <div className="verticals-left">
                        {this.generateSpans(12)}
                    </div>
                    <div className="verticals-center">
                        <span />
                        <span />
                    </div>
                    <div className="verticals-right">
                        {this.generateSpans(12)}
                    </div>
                    <div className={`horizontals ${transitionClass}`}>
                        {horizontals}
                    </div>
                </div>
                <div className="text-container">
                    <div className="text-list">
                        <div className="text-frame title"><h1 className="text-title">THIS GUY</h1></div>
                        <div className="text-frame subtitle1-left"><h3 className="text-subtitle">mentor</h3></div>
                        <div className="text-frame subtitle1-right"><h3 className="text-subtitle">devops</h3></div>
                        <div className="text-frame subtitle2"><h3 className="text-subtitle">codes</h3></div>
                        <div className="text-frame enter-btn"><button>ENTER SITE</button></div>
                    </div>
                </div>
            </div>
        )
    }
}