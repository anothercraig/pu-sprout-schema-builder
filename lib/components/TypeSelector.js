import React, { Component } from 'react';

class TypeSelector extends Component {
  constructor(props) {
    super(props);
    this.selectType.bind(this);
  }

  selectType(type){
    this.setState({selectedType: type});
  }

  render(){
    return (
      <form className="form-inline">
        <div className="form-group">
          <div className="dropdown">
            <button 
              className="btn btn-secondary dropdown-toggle" 
              type="button" 
              id="dropdownMenuButton" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
              Select Type
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">{
              Object.values(this.props.types).map((type) =>
                (<a 
                  className="dropdown-item" 
                  href="#" 
                  key={type.id} 
                  onClick={() => this.selectType(type)}
                >{type.id}</a>)
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.props.onAddSelectedType(this.state.selectedType)}
        >Add</button>
      </form>
    );
  }
}

export default TypeSelector;
