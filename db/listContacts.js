const fs = require("fs/promises");
const contactsPath = require("./contactsPath");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  return contacts;
};
module.exports = listContacts;
