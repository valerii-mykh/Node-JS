const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const allContacts = await listContacts();
  const result = allContacts.find((contact) => contact.id === id);
  return result ? result : null;
};
module.exports = getContactById;
