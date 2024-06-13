const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

class CommandLineApp {
  constructor() {
    this._actions = new Map();
    this.rl = readline.createInterface({ input, output });
    this._store = new Map();
  }

  get store() {
    return this._store;
  }

  get actions() {
    return this._actions;
  }

  registerCommand(actionInstance) {
    this._actions.set(actionInstance._type, actionInstance);
  }

  getNextCommand = async () => {
    return new Promise((resolve, reject) => {
      this.rl.on("line", (answer) => {
        resolve(answer);
      });
    });
  };

  processCommand(command) {
    const parts = command.trim().split(" ");
    const action = parts[0];
    const args = parts.slice(1);
    if (this._actions.has(action)) {
      try {
        this._actions.get(action).process(args);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.error("ERROR, unknown command. Type HELP for a list of commands.");
    }
  }

  async start() {
    while (true) {
      const command = await this.getNextCommand();
      this.processCommand(command);
    }
  }
}

module.exports = CommandLineApp;
