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
    case "removeContactById":
      const removeContact = await contactsOperations.removeContactById(id);
      console.log(removeContact);
      break;
    default:
      console.log("Unknown action");
  }
};

// const newContact = {
//   name: "Vira Seva",
//   email: "viraS@ukr.net",
//   phone: "(030) 777-4444",
// };

// invokeAction({ action: "removeContactById", data: newContact });

const updateId = "82227751-3925-4565-b9af-18207559dee7";
invokeAction({ action: "removeContactById", id: updateId });
