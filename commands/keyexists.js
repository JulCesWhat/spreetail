const Action = require("./action");

class KeyExists extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `KEYEXISTS <key> - Returns whether a key exists in the dictionary. Returns "true" if the key exists, "false" otherwise.`;
  }

  process(args) {
    const errorMsg = this.validate(args);
    if (errorMsg) {
      throw new Error(errorMsg);
    }

    if (this.store.has(args[0])) {
      this.logMessage("true");
      return true;
    } else {
      this.logMessage("false");
      return false;
    }
  }

  validate(args) {
    if (args.length < 1) {
      return "ERROR, KEYEXISTS requires a key";
    }
    return null;
  }
}

module.exports = KeyExists;
