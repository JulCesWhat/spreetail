const Action = require("./action");

class Add extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `ADD <key> <value> - Adds a member to a collection for a given key. Displays an error if the member is already a member of the collection.`;
  }

  process(args) {
    const errorMsg = this.validate(args);
    if (errorMsg) {
      throw new Error(errorMsg);
    }

    if (!this._store.has(args[0])) {
      this._store.set(args[0], new Set());
    }
    this._store.get(args[0]).add(args[1]);

    this.logMessage("Added");
  }

  validate(args) {
    if (args.length < 2) {
      return "ERROR, ADD requires a key and a member";
    }
    if (this._store.has(args[0])) {
      const content = this._store.get(args[0]);
      if (content.has(args[1])) {
        return "ERROR, member already exists for key";
      }
    }
    return null;
  }
}

module.exports = Add;
