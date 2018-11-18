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
                {this.generateSpans(3)}
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
                    <div className="text">
                        <h1 className="title">THIS GUY</h1>
                        <h3 className="desc-1-left">mentor</h3>
                        <h3 className="desc-1-right">devops</h3>
                        <h3 className="desc-2">codes</h3>
                    </div>
                </div>
            </div>
        )
    }
}