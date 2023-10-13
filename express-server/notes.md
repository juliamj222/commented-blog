Guiding myself through the Express

- Create a `package.json` file

- I write in the terminal: npm init -y
To create a package.json file

- In the terminal, I type: npm install express
To create a package-lock.js

- create a .gitignore file and add `/node_modules` to it

- create a file app.js
in that file, add:

const express=require("express"); // importing express to our project
const app=express(); // invoke the express method
const PORT= 4000; // the port number the server will listen to

app.listen (PORT, () => {
    console.log("server is running on port", PORT);
}
    
    )

type in the integrated terminal:
- npm i -g nodemon

in package.json, do:

  "main": "app.js", // switch the index.js for the name of my js file

  remember the Request Types

- GET
- POST
- PUT
- DELETE
