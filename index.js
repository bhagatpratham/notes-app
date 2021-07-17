const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

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
    notes.addNotes(argv.title, argv.body);
  },
});

// Remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true, // required: true;
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNotes(argv.title);
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
