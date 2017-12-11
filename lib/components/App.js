import React, { Component } from 'react';
import axios from 'axios';
import config from 'config';
import FormPreview from './FormPreview';
import TypesList from './TypesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {types: [], selectedTypes:[]};
  }

  async componentDidMount() {
    const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    this.setState({types: resp.data.types});
  }

  _processType = (type, disable, updateSelected) => {
    this.setState(
      {
        selectedTypes: updateSelected(type),
        types: this.state.types.map((item) => 
          item.id === type.id ? {...item, disabled: disable} : item
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
                <TypesList
                  label="Available Types"
                  types={this.state.types}
                  onClick={(type) => {this._processType(type, true, (type) =>
                    [...this.state.selectedTypes, type]
                  )}}
                />
              </div>
              <div className="col-sm">
                <TypesList
                  label="Selected Types"
                  types={this.state.selectedTypes}
                  onClick={(type) => {this._processType(type, false, (type) =>
                    this.state.selectedTypes.filter((item) => item.id !== type.id)
                  )}}
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