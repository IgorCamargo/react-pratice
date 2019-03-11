import './App.css';

import heroes from './json/heroes.json';

import React, { Component, Fragment } from 'react';

import { HeroBanner } from './components';
import { AddHeroForm } from './components';
import { Heroes } from './components';

class App extends Component {
  constructor(){
    super()

    this.state = {
      heroes: '',
      title: 'Heroes'
    }
  }
  componentDidMount() {
    this.setState({heroesState: heroes})
  }
  shouldComponentUpdate(prevProps, prevState) {
    return prevProps !== this.props || prevState !== this.state
  }
  addHero = (hero) => {
    let heroesList = this.state.heroesState
    heroesList.push(hero)
    this.setState({heroesState: heroesList})
  }
  render() {
    return (
      <Fragment>
        <HeroBanner title={this.state.title} />
        <AddHeroForm onAddHero={this.addHero} />
        <Heroes title={this.state.title} heroes={this.state.heroesState} />
      </Fragment>
    );
  }
}

export default App;
