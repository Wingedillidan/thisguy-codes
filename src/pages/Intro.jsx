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

        this.bump = this.bump.bind(this);
    }
    componentDidMount() {
        // setTimeout(this.bump, 500);
    }
    generateSpans(n, offset=0) {
        const result = [];

        for (let i = 0; i < n; i++) {
            result.push(<span key={i + offset} />);
        }

        return result;
    }
    bumpReset () {

    }
    bump () {
        // const enterFrom = horizontals.slice(1);
        // const enterTo = horizontals.slice();
        const {animCounter} = this.state;
        let counter = animCounter;

        if (counter >= 25) {
            counter = 0;
        } else {
            counter += 1;
        }

        this.setState({transitionClass: '', horizontals: this.generateSpans(25, 1 + counter), animCounter: counter}, () => {
            this.setState({transitionClass: TRANSITION_CLASSNAME, horizontals: this.generateSpans(25, 0 + counter)});
            setTimeout(this.bump, 500);
        });
    }
    render () {
        const {horizontals, transitionClass} = this.state;
        return (
            <div className="backdrop">
                {this.generateSpans(3)}
                <div className="horizon">
                    <div className="verticals-left">
                        {this.generateSpans(10)}
                    </div>
                    <div className="verticals-center">
                        <span />
                        <span />
                    </div>
                    <div className="verticals-right">
                        {this.generateSpans(10)}
                    </div>
                    <div className={`horizontals ${transitionClass}`}>
                        {horizontals}
                    </div>
                </div>
                <h1 className="title">THIS GUY</h1>
            </div>
        )
    }
}