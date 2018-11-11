import React, { Component } from 'react';

// Components
import Intro from './pages/Intro';

// Styles
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }
  componentDidMount() {
    window.addEventListener('load', () => this.setState({loaded: true}));
  }

  componentWillUnmount() {
      window.removeEventListener('load', () => this.setState({loaded: true}));
  }

  render() {
    const {loaded} = this.state;
    if (loaded) {
      return (<Intro />);
    } else {
      return (<div />);
    }
  }
}

export default App;
