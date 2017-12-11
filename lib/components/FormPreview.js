import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import uiSchema from './../../formPreview-ui-schema.json';

class FormPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {schema: {
      title: 'Sprout',
      type: 'object',
      properties: {}
    }};
  }

  _reduceTypesIntoSchema = (types) =>
    types.reduce((acc, curr) => {
      acc[curr.id] = curr.schema;
      return acc;
    }, {});
  
  componentWillReceiveProps(nextProps) {
    const schema = {...this.state.schema};
    schema.properties = this._reduceTypesIntoSchema(nextProps.types);
    this.setState({ schema: schema });
  }

  render(){
    return (
      <Form
        schema={this.state.schema}
        uiSchema={uiSchema}
        liveValidate = {true} >
        <span></span>
      </Form>
    );
  }
}

export default FormPreview;
