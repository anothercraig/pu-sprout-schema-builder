import React, { Component } from 'react';
import axios from 'axios';
import config from 'config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {types: []};
    //this.getTypes();
  }

  async getTypes() {
    const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    this.setState({types: resp.types});
  }

  render() {
    return (
      <div> {this.state.types.forEach((type) => <p>type.id</p>)} </div>
    );
  }
}

export default App;