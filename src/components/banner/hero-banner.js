import './hero-banner.css';

import React, { PureComponent } from 'react';

export class HeroBanner extends PureComponent {
  render() {
      return (
        <div className="banner-content">
          <div className="banner-title">
            <div>Welcome to React,</div>
            <div>{this.props.title}!</div>
          </div>
        </div>
      );
    }
}
