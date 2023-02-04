// const yargs = require("yargs/yargs");
// const { hideBin } = require("yargs/helpers");
const contactsOperations = require("./db");
const { Command } = require("commander");
require("colors");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log("List of contacts:".magenta);
      console.table(contacts);
      break;
    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(`Contact with ID ${id}:`.magenta);
      console.table(contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log("Contact added successfully! New list of contacts:".magenta);
      console.table(newContact);
      break;
    case "remove":
      const removeContact = await contactsOperations.removeContactById(id);
      console.log(
        "Contact deleted successfully! New list of contacts:".magenta
      );
      console.table(removeContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
// const id = "1";
// invokeAction({ action: "getContactById", id });

// const arr = hideBin(process.argv);

// const { argv } = yargs(arr);
// invokeAction(argv);

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
invokeAction(argv);
