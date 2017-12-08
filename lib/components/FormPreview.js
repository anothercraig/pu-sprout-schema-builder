import React, { Component } from 'react';
import Form from 'react-jsonschema-form';

class FormPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {schema: {
      title: 'Sprout',
      type: 'object',
      properties: {}
    }};
  }

  componentWillReceiveProps(nextProps) {
    const schema = {...this.state.schema};
    schema.properties =  nextProps.types;
    this.setState({ schema: schema });
  }

  render(){
    return (
      <Form schema={this.state.schema} />
    );
  }
}

export default FormPreview;
