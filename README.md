# movieBrowser
Movie Browsing application

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a Movie Browsing Application made with ReactJS.  
You can browses movies using the OMDb API and show a specific movie's informations !  

## Technologies used 
-ReactJS  
-JavaScript  
-HTML  
-CSS  
-React Bootstrap  
-Framer Motion  
-NodeJS  
-Express  

## Setup 
To run this projects, you will need Node.js and NPM installed.  
You can check if you already have them
installed by opening a terminal and running `node --version` and `npm --version`.  
If numbers are printed, you're good to go.  
If not, [install them](https://nodejs.org/en/).  

Run the following commands :   
```
$ git clone https://github.com/MayaAusset/movieBrowser.git 
$ cd movieBrowser
$ cd client 
$ npm install
$ cd .. && server
$ npm install 
```
Before starting the app, you would encounter some errors because the ports and movieDB API Key are located in .env files (hence will not appear in your cloned code).  

### Some steps to follow in order to have the app work in your local machine :  

-Create your own movieDB API key :  
1. Create an account on [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Generate an API key (as described here : [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction) . Use version 3 of the API as its authentication mechanism is simpler than v4)  

3. In `server` create an `.env` file  
-Create these three variable inside that .env file : 
```
PORT=5000
ENV=development

API_KEY=(the Api Key you created in the previous step)
```
4. In `client` creat an `.env.development.local` file  
-Create one variable inside that .env.development.local file : 
```
REACT_APP_BASE_URL = http://localhost:5000/
```
5. Then, you will need to run the following commands :  

```
$ npm run concurrently
```
You should now be good to go ! 

