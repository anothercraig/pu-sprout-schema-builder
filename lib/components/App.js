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
    //type.disabled = true;
    this.setState(
      {
        selectedTypes:[...this.state.selectedTypes, type], 
        types: this.state.types.map((item) => 
          item.id === type.id ? {...item, disabled: true} : item
        )
      });
  }

  unselectType = (typeId) => {
    this.setState({
      selectedTypes: this.state.selectedTypes.filter((type) => type.id !== typeId),
      types: this.state.types.map((item) => 
        item.id === typeId ? {...item, disabled: false} : item
      )
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="row">
              <div className="col-sm">
                <TypeSelector
                  types={this.state.types}
                  onAddSelectedType={this.selectType}
                />
              </div>
              <div className="col-sm">
                <TypeEntitiesList
                  types={this.state.selectedTypes}
                  onDeleteSelectedType={this.unselectType}
                />
              </div>
            </div>
          </div>
          <div className="col-sm">
            <FormPreview
              types={this.state.selectedTypes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;