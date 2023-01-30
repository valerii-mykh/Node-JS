const contactsOperations = require("./db/contacts.json");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "listContacts":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;
    case "getContactById":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;
    default:
      console.log("Unknown action");
  }
};
const id = "1";
invokeAction({ action: "getContactById", id });
