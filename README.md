# Weather App

Author: [Mark Rea](https://github.com/markrea)

To view the deployed app [click here](https://weather-app-mark-rea.netlify.app/)

## Introduction

The Fridge Tracker app is a friendly web app made with React that lets you browse through recipes depending on what ingredients you have. Alternatively, you can also search for a particular recipe or simply get a random recipe. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the front end, and Express at the [back end](https://github.com/markrea/final-project-backend) to implement all routes.  
Other tools used to create the Fridge Tracker app are Vanilla Javascript, HTML, CSS, CSS grid & Axios in VS Code. This app has been tested using the React Testing Library.

The API used is [Spoonacular](https://spoonacular.com/food-api), and different endpoints are accessed to return results. In many cases, results from endpoints have been destructured and used as arguments to be passed down into queries for other endpoints.

## Getting Started

To get started, you can either click on the deployed link or clone down the app to your machine by opening a new terminal and typing:

`git clone git@github.com:markrea/weather-app.git`

Once the app has been successfully cloned, hit

 `npm install`
 
 to install any missing dependencies. 

`npm start`


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Once the app starts up, you should see a landing page with Manchester as the default city:

<p align="center">
<img height="330" width="600" src="https://github.com/markrea/Final-Project/blob/inputform/public/landing-page-fridge-tracker.png?raw=true">
</p>


**1. Search For another city**
Enter the name of another town or city to see a different forcast

<p align="center">
<img height="330" width="600" src="https://github.com/markrea/Final-Project/blob/inputform/public/FT-SearchByIngredients.png?raw=true">
</p>


**2. More Details**
Click the more details button to see additional information about each days forcast. 

<p align="center">
<img height="330" width="600" src="https://github.com/markrea/Final-Project/blob/inputform/public/FT-SearchByRecipe.png?raw=true">
</p>


## What more I could have done
- If I had more time I would have spent more time on styling the app.