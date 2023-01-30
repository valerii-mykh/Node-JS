const fs = require("fs/promises");

fs.readFile("db/contacts.json")
  .then((data) => {
    const text = data.toString("utf-8");
    console.log(text);
  })
  .catch((error) => console.log(error.message));
