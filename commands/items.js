const Action = require("./action");

class Items extends Action {
  constructor(actionType, store) {
    super(actionType, store);
  }

  getDescription() {
    return `ITEMS - Returns all keys and all members in the dictionary. Returns "EMPTY SET" if the dictionary is empty.`;
  }

  process(args) {
    const result = [];
    Array.from(this.store.keys()).forEach((key) => {
      Array.from(this.store.get(key)).forEach((value) => {
        result.push(`${key}: ${value}`);
      });
    });
    result.forEach((item, ind) => {
      this.logMessage(`${ind + 1}) ${item}`);
    });
    if (result.length === 0) {
      this.logMessage("(empty set)");
    }
    return result;
  }
}

module.exports = Items;
