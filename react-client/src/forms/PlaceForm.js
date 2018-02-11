import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class PlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      latitude: '',
      longitude: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    return this.props.submitHandler(this.state);
  }

  render() {
    // console.log(this.state);
    return (
      <Form className="user_form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="place">Place</Label>
          <Input type="text" name="name" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="latitude">Latitude</Label>
          <Input type="text" name="latitude" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="longitude">Longitude</Label>
          <Input type="text" name="longitude" onChange={this.handleChange} />
        </FormGroup>
        <Button>Add</Button>
      </Form>
    );
  }
}

export default PlaceForm;
