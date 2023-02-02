const argv = require("yargs").argv;
const { hideBin } = require("yargs/helpers");
const contactsOperations = require("./db");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "listContacts":
      const contacts = await contactsOperations.listContacts();
      console.log("listContacts", contacts);
      break;
    case "getContactById":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log("getContactById", contact);
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
// const id = "1";
// invokeAction({ action: "getContactById", id });

// const arr = hideBin(process.argv);

// const { argv } = yargs(arr);
invokeAction(argv);
