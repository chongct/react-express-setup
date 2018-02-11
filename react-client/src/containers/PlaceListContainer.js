import React, { Component } from 'react';
import ApiService from '../ApiService';
import PlaceList from '../components/PlaceList';
import PlaceForm from '../forms/PlaceForm';

import { Container, Row, Col } from 'reactstrap';

class PlaceListContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
    this.search = this.search.bind(this);
  }

  async search(params) {
    try {
      // console.log(params);
      const places = await ApiService.getPlaces(params);
      this.setState({places});
    } catch (e) {
      console.error(`An error ${e.message} occured while searching places`);
    }
  }

  componentDidMount() {
    this.search();
  }

  async add(params) {
    try {
      await ApiService.addPlaces(params);
    } catch (e) {
      console.error(`An error ${e.message} occured while adding places`);
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <div className="place">
              <PlaceForm submitHandler={this.add} />
              <PlaceList places={this.state.places} />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PlaceListContainer;
