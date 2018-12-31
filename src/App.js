import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

// Components
import Hero from './components/Hero';
import {ANIMATIONS} from './components/Hero';

// Styles
import './App.scss';
import './styles/fonts.scss';

const HEROUI = (props) => <Hero {...props} />

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            heroHeight: '100vh'
        };
    }
    componentDidMount() {
        window.addEventListener('load', () => this.setState({ loaded: true }));
    }

    componentWillUnmount() {
        window.removeEventListener('load', () => this.setState({ loaded: true }));
    }

    render() {
        const { loaded, heroHeight } = this.state;
        if (loaded) {
            return (
                <HashRouter>
                    <Route render={({location}) => (
                        <div>
                            <Switch>
                                <Route path="/" exact={true} render={() => <HEROUI height="100vh" animation={ANIMATIONS.INTRO} />} />
                                <Route path="/app" render={() => <HEROUI height="40vh" animation={ANIMATIONS.OUTRO} />} />
                            </Switch>
                            <TransitionGroup>
                                <CSSTransition key={location.pathname} timeout={{enter: 0, exit: 3000}} classNames="intro">
                                    <Switch location={location}>
                                        <Route path="/" exact={true} render={() => <div />} />
                                        <Route path="/app" render={() => (<div>ag</div>)} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    )} />
                </HashRouter>
            );
        } else {
            return (<div />);
        }
    }
}

export default App;
