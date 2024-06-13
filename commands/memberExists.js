const Action = require("./action");

class MemberExists extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `MEMBEREXISTS <key> <value> - Returns whether a value exists within a key. Returns "true" if the value exists, "false" otherwise.`;
  }

  process(args) {
    const errorMsg = this.validate(args);
    if (errorMsg) {
      throw new Error(errorMsg);
    }
    if (this.store.has(args[0])) {
      const found = this.store.get(args[0]).has(args[1]);
      this.logMessage(found.toString());
      return found;
    } else {
      this.logMessage("false");
      return false;
    }
  }

  validate(args) {
    if (args.length < 2) {
      return "ERROR, MEMBEREXISTS requires key and a value";
    }
    return null;
  }
}

module.exports = MemberExists;
