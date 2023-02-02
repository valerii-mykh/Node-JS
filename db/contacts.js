const fs = require("fs/promises");
const { v4 } = require("uuid");
const contactsPath = require("./contactsPath");

const contactsPath = path.join(__dirname, "contacts.json");
const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
  const allContacts = await listContacts();
  const contact = allContacts.find((contact) => contact.id === id);
  if (!contact) {
    return null;
  }
  return contact;
};
const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

const removeContactById = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return removeContact;
};
module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContactById,
};
