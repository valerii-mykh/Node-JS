const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => String(contact.id) === String(id));
  if (!result) {
    return null;
  }

  return result;
};
module.exports = getContactById;
