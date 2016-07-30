import React from 'react';

export default class Greeting extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}!</h1>
        <p>Brought to you from a Docker container by Webpack Hot Module Replacement</p>
      </div>
    );
  }
}
