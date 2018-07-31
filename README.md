# Design Choices and Overview

There are a few design choices I took while completing this assignment. This document serves to explain the finished product which is fully hosted and tested for the expected functionality. In addition, I can use this to refer back to how I can set up a similar stack in the future. This setup here is quite new to me and was an interesting way to build a web application as such.

This entire application used three technologies:
  1. Node.js: powering the rendering, routing, and database connection
  2. MongoDB: set up as the database for storing, retrieving, etc.
  3. HTML, CSS, JS: due to only having one simple input field and table, I did not want to use a framework which requires extra deploying measures.
  
I used Node.js with the following packages as the base which are essential for an application with MongoDB:
  1. express
  2. mongodb
  3. body-parser
Many other enhancer packages can be added but this allows for simple configuration given there is no use of MVC. 

Please review some of my comments for a basic understanding of the Node REST API functions. I thought about separating the front-end here, but decided to simply render the html file at the '/home' route and reading static files such as CSS and JS throughout the application.

Two functionalities exist in the current API: 
  1. POST: '/insertorders' will enter all 'documents' into the collection 'users' given an array of order json objects
  2. GET: '/getorders' will retrieve all orders regardless of duplicates
 
All hosting was done through heroku. The MongoDB was hosted by mLab's free sandbox tier. This embedded stacks allows easy deployment and access, although not ideal for larger applications.

# LINK : https://file-upload-server1.herokuapp.com/home
