const chalk = require("chalk");
const yargs = require("yargs");

// Add command
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    body: {
      describe: "Note body",
      demandOption: true, // required: true;
      type: "string",
    },
    title: {
      describe: "Note Title",
      demandOption: true, // required: true;
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

// Remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing the note");
  },
});

// Read Command
yargs.command({
  command: "read",
  describe: "Read the note",
  handler: () => {
    console.log("Reading the note");
  },
});

// List Command
yargs.command({
  command: "list",
  describe: "List the note",
  handler: () => {
    console.log("Listing out all notes");
  },
});

yargs.parse();
