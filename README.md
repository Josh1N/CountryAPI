
# Country API

This is a RESTful API built with Node.js, Express.js, and MongoDB for managing a collection of countries, their codes and currencies.

## Prerequisites
- Node.js should be installed on your machine.
- Express.js should be installed.
- Mongoose should be installed and running on your local machine or a remote server.

### Installation
Clone this repository or download the files:

```bash
git clone https://github.com/Josh1N/CountryAPI.git
```
Install the required packages:

``` bash
npm install
```

### Running the API
To start the API server, run:

```bash
npm run serve
```

### Running the unit suite
This project includes unit tests using Jest and Supertest. To run the tests, execute:

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
- GET /countries?currencyCode="code": Retrieve all countries with currency code filter.
- GET /countries/:alpha2Code: Retrieve a specific country by alpha2Code.
- POST /countries: Create a new country with JSON body.
- PUT /countries/:id: Update a country by ID with JSON body containing the updated fields.
- DELETE /countries/:name: Delete a country by ID.

Using the API, you can use tools like Postman or cURL to interact with the API endpoints.

For example:

- To get all countries: GET http://localhost:3000/countries/
- To get a country by alpha2Code: GET http://localhost:3000/countries/:alpha2Code
- To add a new country: POST http://localhost:3000/countries with JSON body.
- To update a country by ID: PUT http://localhost:3000/countries/:id with JSON body containing the updated fields.
- To delete a country by ID: DELETE http://localhost:3000/countries/:name
