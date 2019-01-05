import * as React from 'react';
import {Link} from 'react-router-dom';

// Stylings
import './Hero-new.scss';

const TRANSITION_CLASSNAME = 'active';

export const ANIMATIONS = {
    INTRO: 'intro',
    OUTRO: 'outro',
    NONE: Symbol()
}

export default class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horizontals: this.generateSpans(25, 1),
            transitionClass: TRANSITION_CLASSNAME,
            animCounter: 1
        }
    }
    componentDidUpdate(prev) {
        console.log(prev)
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
        const {height, animation} = this.props;

        return (
            <div className={`anim-intro backdrop ${animation}`} style={{height}}>
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
                        <div className="text-frame subtitle"><h3 className="text-subtitle">CODES</h3></div>
                        <div className="text-frame enter-btn"><Link to="/app"><button>ENTER SITE</button></Link></div>
                    </div>
                </div>
            </div>
        )
    }
}
