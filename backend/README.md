# Getting Started with Country Info API

This project sets up the backend for the Country Info application using Node.js and Express.

## Available Scripts

In the `backend` directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The server will restart automatically if you make edits.\
You will also see any errors in the console.

## API Endpoints

### `GET /api/countries`

Returns a list of all countries with their names and ISO codes.

### `GET /api/countries/:isoCode`

Returns the details of a specific country identified by its ISO code.

### `POST /api/countries`

Adds a new country to the list. Validates the data before adding.

## Installation and Setup

1. Clone the repository:

   ```sh
   git@github.com:neto112/country-info-app.git

   ```

2. Navigate to the backend directory:

```
   cd country-info-app/backend
```

3. Install the dependencies:

```
   npm install
```

4. Start the server:

```
   node src/server.js
```
