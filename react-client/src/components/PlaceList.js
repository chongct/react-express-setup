import React from 'react';

const PlaceList = (props) => {
  const places = props.places;
  console.log(places);
  if (!places.length) {
    return <p>No data</p>;
  }
  const placeList = places.map(place => <p key={place._id}>{place.name}, latitude: {place.latitude}, longitude: {place.longitude}</p>)

  return (
    <div>
      {placeList}
    </div>
  )
}

export default PlaceList;
