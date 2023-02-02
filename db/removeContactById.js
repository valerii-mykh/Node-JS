const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContactById = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  console.table(contacts);
  return "Success remove";

  //   const newContacts = contacts.filter((_, index) => index.id !== idx);
  //   await updateContacts(newContacts);
  //   return contacts[idx];
};
module.exports = removeContactById;
