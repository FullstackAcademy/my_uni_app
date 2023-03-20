# To run locally
- create a database called `my_uni_app_db`
- `npm install`
- `node server/db/seed.js` to seed the db
- `npm run start:dev` to start the server

# To deploy on render.com
- create a new PostgreSQL service
  - name it
  - take note of the region
  - create the database
  - copy the internal database url for use when creating the Web Service

- create a new Web Service
  - name it
  - choose same region as the PostgreSQL service
  - build command
    - `npm install && npm run build && node server/db/seed.js`
  - start command
    - `node server/index.js`
  - set environment variables
    - NODE_VERSION 14.18.1
    - DATABASE_URL internal URL from postgres service
