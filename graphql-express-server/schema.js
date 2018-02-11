const Place = require('./models/place');
// const Places = require('./data/places.js');
const find = require('lodash/find');
const filter = require('lodash/filter');
const sumBy = require('lodash/sumBy');
const {
  GraphQLInt,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
} = require('graphql');

const PlaceType = new GraphQLObjectType({
  name: 'Place',
  description: 'Place location',
  fields: () => ({
    _id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    latitude: {type: new GraphQLNonNull(GraphQLString)},
    longitude: {type: new GraphQLNonNull(GraphQLString)}
  })
});

// Query
const QueryRootType = new GraphQLObjectType({
  name: 'PlacesSchema',
  description: 'Root Place Schema',
  fields: () => ({
    places: {
      args: {
        _id: {type: GraphQLString},
        name: {type: GraphQLString},
        latitude: {type: GraphQLString},
        longitude: {type: GraphQLString}
      },
      type: new GraphQLList(PlaceType),
      description: 'List of Places',
      resolve: (parent, args) => {
        if (Object.keys(args).length) {
          return filter(Places, args);
        }
        Place.find({}).exec((err, places) => {
          Places = places;
        });
        console.log(Places);
        return Places;
      }
    }
  })
});

// Mutation
const MutationRootType = new GraphQLObjectType({
  name: 'NewPlacesSchema',
  description: 'Mutation Root Place Schema',
  fields: () => ({
    places: {
      args: {
        name: {name: 'name', type: new GraphQLNonNull(GraphQLString)},
        latitude: {latitude: 'latitude', type: new GraphQLNonNull(GraphQLString)},
        longitude: {longitude: 'longitude', type: new GraphQLNonNull(GraphQLString)}
      },
      type: new GraphQLList(PlaceType),
      description: 'Add Places',
      resolve: (parent, {name, latitude, longitude}) => {
        var newPlace = new Place({
          name: name,
          latitude: latitude,
          longitude: longitude
        });
        newPlace.save((err, res) => {
          if (err) console.log(err);
          return res;
        });
      }
    }
  })
});


const schema = new GraphQLSchema({
  query: QueryRootType,
  mutation: MutationRootType
});

module.exports = schema;
