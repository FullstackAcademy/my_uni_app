# to run locally
- create database my_uni_app_db
- node server/db/seed.js
- npm install
- npm run start:dev

# to deploy on render.com
- create postgres service
  - name it
  - note region
  - create database
  - copy internal database url for web service

- create web service
  - name it
  - choose same region as postgres service
  - build command
    - npm install && npm build && node server/db/seed.js
  - start command
    - node server/index.js
  - set environment variables
    - NODE_VERSION 14.18.1
    - DATABASE_URL internal URL from postgres service
