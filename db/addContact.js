const { v4 } = require("uuid");
const fs = require("fs/promises");

const contactsPath = require("./contactsPath");
const listContacts = require("./listContacts");

const addContact = async (name, email, phone) => {
  const allContacts = await listContacts();
  const newContact = { name: name, email: email, phone: phone, id: v4() };
  allContacts.push(newContact);
  console.log("++", contactsPath);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  console.table(allContacts);
  return newContact;
};
module.exports = addContact;
