# React Blog App

To run the application

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
<br/>

## Built With

* HTML
* CSS
* Javascript
* React
* styled-components
* React Router
* React Hooks
* React Context API 
<br/>

## Environmental Variables

### Server Base URL

Add the backend server base url `REACT_APP_BASE_URL` in:

* `src/pages/Register.js`
* `src/context/authContext.js`
* `src/pages/Home.js`
* `src/pages/Single.js`
* `src/pages/Write.js`
* `src/components/Menu.js`

Or create .env file for React app

`REACT_APP_BASE_URL=http://localhost:3000/api/` 

then use it like this

 `process.env.REACT_APP_BASE_URL`
<br/>
<br/>

### Server Uploads URL

Add the url where the the images are stored on the server `REACT_APP_UPLOAD_URL` in:

* `src/pages/Home.js`
* `src/pages/Single.js`
* `src/components/Menu.js`

Or create .env file for React app

`REACT_APP_UPLOAD_URL=http://localhost:3000/uploads`

then use it like this

`process.env.REACT_APP_UPLOAD_URL`
<br/>

## Deployment
Deployed on 


## Authors

- **Ali Darraji** - [https://github.com/adarraji](https://github.com/adarraji)
