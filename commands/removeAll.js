const Action = require("./action");

class RemoveAll extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `REMOVEALL key - Removes all members for the key. Returns an error if the key does not exist.`;
  }

  process(args) {
    const errorMsg = this.validate(args);
    if (errorMsg) {
      throw new Error(errorMsg);
    }

    this.store.delete(args[0]);

    this.logMessage("Removed");
  }

  validate(args) {
    if (args.length < 1) {
      return "ERROR, REMOVEALL requires two arguments";
    }
    if (!this.store.has(args[0])) {
      return "ERROR, key does not exist";
    }
    return null;
  }
}

module.exports = RemoveAll;
