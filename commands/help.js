const Action = require("./action");

class Help extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `HELP - Displays this help message.`;
  }

  process(args) {
    this.logMessage("Available commands:");
    const descriptions = [];
    Array.from(this.store.values()).forEach((action) => {
      descriptions.push(`${action.getDescription()}`);
    });
    descriptions.forEach((desc, ind) => {
      this.logMessage(`${ind + 1}) ${desc}`);
    });
    return descriptions;
  }
}

module.exports = Help;
