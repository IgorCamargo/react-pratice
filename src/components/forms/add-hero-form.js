import './add-hero-form.css';

import React, { Component } from 'react';

export class AddHeroForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      image: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onImageChange = this.onImageChange.bind(this)
  }
  onNameChange(event) {
    const heroName = event.target.value
    this.setState({ name: heroName })
  }
  onImageChange(event) {
    const heroImage = event.target.value
    this.setState({ image: heroImage })
  }
  handleAddHero = (event) => {
    event.preventDefault()

    const hero = {
      name: this.state.name,
      image: this.state.image
    }
    this.props.onAddHero(hero)
  }
  render() {
      return (
        <form className="form-hero page-component" onSubmit={this.handleAddHero}>
          <div className="form-item">
            <div className="form-span">Name</div>
            <input type="text" className="form-input" value={this.state.name} onChange={this.onNameChange} />
          </div>
          <div className="form-item">
            <div className="form-span">Image</div>
            <input type="text" className="form-input" value={this.state.image} onChange={this.onImageChange} />
          </div>
          <div className="form-item">
            <button className="form-button">Register</button>
          </div>
        </form>
      );
    }
}
