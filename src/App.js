import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

// Components
import Intro from './pages/Intro';

// Styles
import './App.scss';
import './styles/fonts.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }
    componentDidMount() {
        window.addEventListener('load', () => this.setState({ loaded: true }));
    }

    componentWillUnmount() {
        window.removeEventListener('load', () => this.setState({ loaded: true }));
    }

    render() {
        const { loaded } = this.state;
        if (loaded) {
            return (
                <HashRouter>
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key}>
                                <Switch>
                                    <Route path="/" component={Intro} />
                                    <Route path="/home" />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </HashRouter>
            );
        } else {
            return (<div />);
        }
    }
}

export default App;
