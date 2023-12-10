
# Country API

RESTful API using Node.js, Express.js, and MongoDB.
This is a RESTful API built with Node.js, Express.js, and MongoDB for managing a collection of countries, codes and currencies.

## Prerequisites
- Node.js should be installed on your machine.
- Express.js should be installed.
- Mongoose should be installed and running on your local machine or a remote server.

### Installation
Clone this repository or download the files:

```bash
git clone https://github.com/your-username/express-mongodb-rest-api.git
```
Install the required packages:

``` bash
npm install
```
### Set up the environment variables:

Create a .env file in the root directory and specify the MongoDB connection URI:

MONGODB_URI=mongodb+srv://admin:12345Prodigy@countryapi.jlpwgyo.mongodb.net/country-api?retryWrites=true&w=majority

### Running the API
To start the API server, run:

```bash
npm run serve
```

### Running the unit suite
To run the test suite, run:

```bash
npm run test
``` 

The server will start at http://localhost:3000.

### Seeding the database with data

```bash
node seed.js
```

## Endpoints
- GET /countries: Retrieve all countries.
- GET /country/:id: Retrieve a specific country by ID.
- POST /country: Create a new country with JSON body.
- PUT /country/:id: Update a country by ID with JSON body containing the updated fields.
- DELETE /country/:id: Delete a country by ID.

Using the API, you can use tools like Postman or cURL to interact with the API endpoints.

For example:

- To get all countries: GET http://localhost:3000/countries/
- To get a country by ID: GET http://localhost:3000/country/1
- To add a new country: POST http://localhost:3000/country with JSON body.
- To update a country by ID: PUT http://localhost:3000/resource/1 with JSON body containing the updated fields.
- To delete a country by ID: DELETE http://localhost:3000/resource/1

### Running Tests
This project includes unit tests using Jest and Supertest. To run the tests, execute:

```bash
npm test
```