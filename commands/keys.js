const Action = require("./action");

class Keys extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `KEYS - Returns all keys in the dictionary. Returns "EMPTY SET" if the dictionary is empty.`;
  }

  process(args) {
    const keys = Array.from(this._store.keys());
    if (keys.length === 0) {
      this.logMessage("(empty set)");
    } else {
      keys.forEach((key, i) => {
        this.logMessage(`${i + 1}) ${key}`);
      });
    }
  }
}

module.exports = Keys;
