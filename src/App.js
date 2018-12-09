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
                            <CSSTransition key={location.pathname} timeout={{enter: 0, exit: 3000}} classNames="intro">
                                <Switch location={location}>
                                    <Route path="/" exact={true} component={Intro} />
                                    <Route path="/app" render={() => (<div>ag</div>)} />
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
