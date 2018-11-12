import * as React from 'react';

// Stylings
import './Intro.scss';

const TRANSITION_CLASSNAME = 'active';

export default class Intro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horizontals: this.generateSpans(26),
            transitionClass: TRANSITION_CLASSNAME,
            poop: 0
        }

        this.bump = this.bump.bind(this);
    }
    componentDidMount() {
        setTimeout(this.bump, 2000);
    }
    generateSpans(n, poopSetter=0) {
        const result = [];

        for (let i = 0; i < n; i++) {
            if (i === poopSetter) {
                result.push(<span POOP="1" />);
            } else {
                result.push(<span />);
            }
        }

        return result;
    }
    bump () {
        const {horizontals, poop} = this.state;
        const enterFrom = horizontals.slice(1);
        const enterTo = horizontals.slice();

        // this.setState({transitionClass: '', horizontals: enterFrom}, () => {
        //     this.setState({transitionClass: TRANSITION_CLASSNAME, horizontals: enterTo});
        //     setTimeout(this.bump, 2000);
        // });

        this.setState({poop: poop + 1}, () => {
            this.setState({horizontals: this.generateSpans(25, this.state.poop)})
            setTimeout(this.bump, 2000);
        });

        // this.setState({transitionClass: '', horizontals: enterFrom});
        // this.forceUpdate(() => {
        //     this.setState({transitionClass: TRANSITION_CLASSNAME, horizontals: enterTo});
        //     setTimeout(this.bump, 2000);
        // })

    }
    render () {
        const {horizontals, transitionClass} = this.state;
        return (
            <div className="backdrop">
                <div className="horizon">
                    <div className="verticals-left">
                        {this.generateSpans(10)}
                    </div>
                    <div className="verticals-center">
                        <span />
                    </div>
                    <div className="verticals-right">
                        {this.generateSpans(10)}
                    </div>
                    <div className={`horizontals ${transitionClass}`}>
                        {horizontals}
                    </div>
                </div>
            </div>
        )
    }
}