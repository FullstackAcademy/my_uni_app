const client = require('./client');

const seed = async()=> {
  try {
    await client.connect();
    const SQL = `
    DROP TABLE IF EXISTS things;
    CREATE TABLE things(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL
    );
    INSERT INTO things(name) VALUES('foo');
    INSERT INTO things(name) VALUES('bar');
    INSERT INTO things(name) VALUES('bazz');
    `;
    await client.query(SQL);
    console.log('data seeded');
  }
  catch(ex){
    console.log(ex);
  }
  finally{
    await client.end();
  }
};

seed();
