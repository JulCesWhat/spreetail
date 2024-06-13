const Action = require("./action");

class Clear extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `CLEAR - Removes all keys and all members from the dictionary.`;
  }

  process(args) {
    this.store.clear();
    this.logMessage("Cleared");
  }
}

module.exports = Clear;
