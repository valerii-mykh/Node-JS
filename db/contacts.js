const fs = require("fs/promises");
const { v4 } = require("uuid");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const list = async () => {
  const dataString = await fs.readFile(contactsPath, "utf8");
  const data = JSON.parse(dataString);
  return data;
};

const get = async (id) => {
  const allContacts = await list();
  const contact = allContacts.find((contact) => contact.id === id);
  // if (!contact) {
  //   return null;
  // }
  // return contact;
  return contact ? contact : null;
};
const add = async (name, email, phone) => {
  const newProduct = {
    id: uuid.v4(),
    name: name,
    email: email,
    phone: phone,
  };
  const allContacts = await list();
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  return newContact;
};

const remove = async (id) => {
  const allContacts = await list();
  const idx = allContacts.findIndex((contact) => contact.id === id);
  const removeContact = allContacts.splice[index];
  if (idx === -1) {
    allContacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  }
  return removeContact ? removeContact : null;
};
module.exports = {
  list,
  get,
  add,
  remove,
};
