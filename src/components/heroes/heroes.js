import './heroes.css';

import React, { Component } from 'react';

const HeroCard = props => (
  <div className="hero-item">
    <div className="hero-title hero-name">{props.name}</div>
    <img className="hero-image" alt={props.name} src={props.image} />
  </div>
)

export class Heroes extends Component {
  renderHeroes = () => {
    if (Array.isArray(this.props.heroes) && this.props.heroes.length > 0) {
      return this.props.heroes.map((hero, key) => (
        <HeroCard key={key} name={hero.name} image={hero.image} />
      ))
    }
    return ''
  }
  render() {
    if (this.props.heroes === undefined) {
      return <p>Sem herois :/</p>
    }
    return (
      <div className="hero-list page-component">
        <div className="hero-title">{this.props.title}</div>
        { this.renderHeroes() }
      </div>
    )
  }
}
