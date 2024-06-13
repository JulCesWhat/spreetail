const Action = require("./action");

class Remove extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `REMOVE - Removes a member from a set. If the last member is removed from the set, the key is removed from the dictionary.`;
  }

  process(args) {
    const errorMsg = this.validate(args);
    if (errorMsg) {
      throw new Error(errorMsg);
    }

    this._store.get(args[0]).delete(args[1]);
    if (this._store.get(args[0]).size === 0) {
      this._store.delete(args[0]);
    }

    this.logMessage("Removed");
  }

  validate(args) {
    if (args.length < 2) {
      return "ERROR, ADD requires two arguments";
    }
    if (!this._store.has(args[0])) {
      return "ERROR, key does not exist";
    }
    const content = this._store.get(args[0]);
    if (!content.has(args[1])) {
      return "ERROR, member does not exist";
    }
    return null;
  }
}

module.exports = Remove;
