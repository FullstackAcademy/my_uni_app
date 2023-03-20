const app = require('./app');
const client = require('./db/client');

const init = async()=> {
  try {
    await client.connect();
    const port = process.env.PORT || 3000;
    const server = app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();



