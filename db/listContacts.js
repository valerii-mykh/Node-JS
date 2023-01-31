const fs = require("fs/promises");
const path = require("path");

// const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(`${__dirname}, "contacts.json"`);
  return contacts;
};
module.exports = listContacts;

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   const contacts = JSON.parse(data);
//   return contacts;
// };
