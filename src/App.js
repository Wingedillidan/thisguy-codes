import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

// Components
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
                            <HEROUI animation={location.pathname === '/' ? ANIMATIONS.INTRO : ANIMATIONS.OUTRO} />
                            <Navbar className={location.pathname === '/' ? "anim-hidden" : "anim-intro"} />
                            <TransitionGroup>
                                <CSSTransition key={location.pathname} timeout={{enter: 0, exit: 3000}} classNames="intrsglmo">
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
