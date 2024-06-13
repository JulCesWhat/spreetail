const Action = require("./action");

class Members extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `MEMBERS <key> - Returns the collection of members in the dictionary associated with the key. Returns "ERROR, key does not exist" if the key does not exist.`;
  }

  process(args) {
    const errorMsg = this.validate(args);
    if (errorMsg) {
      throw new Error(errorMsg);
    }
    const members = Array.from(this._store.get(args[0]));
    members.forEach((mem, i) => {
      this.logMessage(`${i + 1}) ${mem}`);
    });
    return members;
  }

  validate(args) {
    if (args.length < 1) {
      return "ERROR, MEMBERS requires a key";
    }
    if (!this._store.has(args[0])) {
      return "ERROR, key does not exist";
    }
    return null;
  }
}

module.exports = Members;
