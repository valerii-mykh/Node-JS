const contactsOperations = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.list();
      console.log("list", contacts);
      break;
    case "get":
      const contact = await contactsOperations.get(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log("get", contact);
      break;
    case "add":
      const newContact = await contactsOperations.add(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contactsOperations.remove(id);
      console.log(removeContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
