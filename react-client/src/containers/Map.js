import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class Map extends Component {
  render() {
    return (
      <div>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom} style={{height: '100px'}}>
          <AnyReactComponent lat={59.95} lng={30.33} text={'Kreyser Avrora'} />
        </GoogleMapReact>
      </div>
    );
  }
}

Map.defaultProps = {
  center: {lat: 59.95, lng: 30.33},
  zoom: 11
}

export default Map;
