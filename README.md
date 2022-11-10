# React Blog App

To run the application

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

## Built With

* HTML
* CSS
* Javascript
* React
* styled-components
* React Router
* React Hooks
* React Context API 

## Environmental Variables

### Server Base URL

Add the backend server base url `REACT_APP_BASE_URL` in:

* `src/pages/Register.js`
* `src/context/authContext.js`
* `src/pages/Home.js`
* `src/pages/Single.js`
* `src/pages/Write.js`
* `src/components/Menu.js`

Or create .env file for React app and `REACT_APP_BASE_URL=http://localhost:3000/api/` then use it like this `process.env.REACT_APP_BASE_URL`


### Server Uploads URL

The location where the the images are stored on the server. Used om `src/pages/Home.js`, `src/pages/Single.js`, `src/components/Menu.js`


You can create .env file for you application and use the following for example:

`REACT_APP_UPLOAD_URL=http://localhost:3000/uploads`

Then use it in the application as  `process.env.REACT_APP_UPLOAD_URL`

## Deployment
Deployed on 


## Authors

- **Ali Darraji** - [https://github.com/adarraji](https://github.com/adarraji)
