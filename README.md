# General Assembly Project 3 - Beehive

[Deployed Project Link](https://j-beehive.herokuapp.com/)

Beehive was my third project at General Assembly. This project was done in a team of four and was our first attempt at building a full stack web application. This Project was done over seven-eight days.

## My Teammates were:
- [Abigail Foreman](https://github.com/abigailforeman1)
- [John Magnus Robertson](https://github.com/jaymagrob)
- [Nicolas Dolan](https://github.com/Nicolas-Dolan)

## Task Brief

* **Build a full-stack application**
* **Use an Express API**
* **Implement thoughtful user stories**
* **Be deployed online**
* **Have automated testing**

## Technologies Used

* JavaScript (ES6)
* HTML5
* CSS3
* Bulma
* React.js
* Express
* Mongoose
* MongoDB
* Mocha
* Chai
* Axios
* Git
* GitHub
* Insomnia
* Cloudinary

## Installation

* Clone or download the repo
* In the project root install all of project the dependancies with `yarn` 
* In the project room run the command `yarn start`
* Ensure the terminal respondes with 'app is listening on port 4000'
* Open your chosen browser and navigate to `http://localhost:4000/`

NEED TO ADD DATABASE STUFF HERE

## Overview

At the beginning of this project we spent half a day brain storming ideas and potential concepts for the web application. In the end we unanimously ended up settling on a platform for creatives who are looking for work or to show off their own work. We had a lot of influence from the website The Dots as a reference point along the way as in terms of functionality and design The Dots was a large source of inspiration. The core functionalty of the application is based around Users, Projects and how the two interact with eachother and themselves.

# Walkthrough

## Landing Page
The Landing page is the first page users see and has inputs for the user to enter a valid date. The background is pulled from the NASA Astronomical picture of the day API and so changes on a daily basis.

![Landing page](src/assets/readme/landing.png)

## Loading
The loading page that displays whilst the data is being retrieved.

![Loading](src/assets/readme/loading.png)

## Index Page
The main index page shows up to six of the closest asteroids to earth on the given chosen day

![Loading](src/assets/readme/index.png)

## Extra Functionality

Users are able to click on any of the asteroids displayed and a popup will show with some randomly generated stats about the distance of that object to earth.