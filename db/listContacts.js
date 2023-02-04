const fs = require("fs/promises");
const contactsPath = require("./contactsPath");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  // console.table(contacts);
  return contacts;
};
module.exports = listContacts;
