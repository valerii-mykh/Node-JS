const contactsOperations = require("./db");

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
    case "addContact":
      const newContact = await contactsOperations.addContact(data);
      console.log(newContact);
      break;
    default:
      console.log("Unknown action");
  }
};

const newContact = {
  name: "Vira Seva",
  email: "viraS@ukr.net",
  phone: "(030) 777-4444",
};

invokeAction({ action: "addContact", data: newContact });
