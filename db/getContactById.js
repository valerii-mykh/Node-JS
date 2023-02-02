const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const allContacts = await listContacts();
  const contact = allContacts.find((contact) => contact.id === id);
  if (!contact) {
    return null;
  }
  return contact;
};
module.exports = getContactById;
