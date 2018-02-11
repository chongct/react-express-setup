# Setting up a React + GraphQL + Express + MongoDB project

## Backend Express server with GraphQL

1. Run `yarn install` to install the below dependencies.
```
"dependencies": {
  "babel-cli": "^6.26.0",
  "babel-preset-node6": "^11.0.0",
  "babel-register": "^6.26.0",
  "express": "^4.16.2",
  "express-graphql": "^0.6.11",
  "graphql": "^0.13.0",
  "lodash": "^4.17.5",
  "nodemon": "^1.14.12"
}
```
2. Require modules in server.js and configure express app to use GraphQL.

3. Create **schema.js**. This holds the configuration for GraphQL.

4. The server is ready. Test GraphQL query on <http://localhost:3001/graphql>. For example:
```
{
  places{
    id,
    name,
    latitude,
    longitude
  }
}
```

## React client with GraphQL

1. Run `create-react-app [client project name]` in a separate folder.

2. Create a component file **ApiService.js**. This file holds the configuration and calls the backend Express server using GraphQL.

3. Configure App.js and PlaceListContainer.js, which is the child component of App.js.

4. In PlaceListContainer, an async function is needed to call ApiService.js to get the data from the backend.

## Connect express server with MongoDB

1. Run `yarn add mongodb` and `yarn add mongoose`. Require them in server.js and connect to Mongodb in server.js.

2. Create a model/place.js file for the MongoDB model.

3. Set up the local database and add data using `db.places.insert({"data": "data"})`.

4. In schema.js, require this model instead of the arbitrary data/places.js file. In QueryRootType, add the additional query to MongoDB and return these results.

## References

* <https://levelup.gitconnected.com/using-graphql-api-with-node-js-and-react-forms-8b13f4b26361>
* <https://github.com/applification/graphql-express-mongodb>
