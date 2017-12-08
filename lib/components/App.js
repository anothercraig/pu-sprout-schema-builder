import React, { Component } from 'react';
import axios from 'axios';
import config from 'config';
import TypeSelector from './TypeSelector';
import TypeEntitiesList from './TypeEntitiesList';
import FormPreview from './FormPreview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {types: [], selectedTypes:[]};
  }

  async componentDidMount() {
    const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    this.setState({types: resp.data.types});
  }

  selectType = (type) => {
    this.setState({selectedTypes:[...this.state.selectedTypes, type]});
  }

  unselectType = (typeId) => {
    this.setState({
      selectedTypes: this.state.selectedTypes.filter((type) => type.id !== typeId)
    });
  }

  render() {
    return (
      <div className="container">
        <TypeSelector
          types={this.state.types}
          onAddSelectedType={this.selectType}
        />
        <TypeEntitiesList
          types={this.state.selectedTypes}
          onDeleteSelectedType={this.unselectType}
        />
        <FormPreview
          types={this.state.selectedTypes}
        />
      </div>
    );
  }
}

export default App;