# To run locally
- Create a database called my_uni_app_db with the command `createdb my_uni_app_db`
- In your terminal, from within the project directory, run the following commands:
  - `npm install` to install project dependencies
  - `node server/db/seed.js` to seed the database
  - `npm run start:dev` to start the server

# To deploy on render.com

#### Create the Database
- Create a new PostgreSQL service in the render dashboard, and fill out the following input fields:
  - Name
  - Region (take note of the region as you will use it later)
- Create the database
- Copy the internal database url for use when creating the Web Service

#### Create the Web Service
- Create a new Web Service
  - Select the repo from the list of repos if you have linked your GitHub account. Alternatively, you can copy and paste a link to your repo if it is public. 
- Fill out the following input fields:
  - Name
  - Region (select the same region as the PostgreSQL service)
  - Build Command:
    - `npm install && npm run build && node server/db/seed.js`
  - Start Command:
    - `node server/index.js`
  - Scroll down and select "Advanced" to add the following environment variables:
    - NODE_VERSION: 14.18.1
    - DATABASE_URL: {internal connection URL from the PostgreSQL database}
  - NOTE: As you develop your applications, you may need to add additional environment variables. Any variable you reference from within the code from `process.env.KEY_NAME` will need to be added to your production environment.
  - <img width="1225" alt="Screen Shot of Render Environment Variables" src="https://user-images.githubusercontent.com/47865037/226444595-c9f7efe8-0a32-429c-bd13-f4767817d9ca.png">

