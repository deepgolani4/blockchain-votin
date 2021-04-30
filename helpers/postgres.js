const { Client } = require("pg");

const client = new Client({
  host: "127.0.0.1",
  port: "5432",
  database: "voting",
});

const run = async () => {
  await client.connect();

  // await client.query("INSERT INTO VOTED(UID, VOTE) VALUES($1, $2)", [
  //   "123456789809",
  //   1,
  // ]);
  const res = await client.query("SELECT * FROM VOTED");
  console.log(res.rows);
  await client.end();
};

run();
