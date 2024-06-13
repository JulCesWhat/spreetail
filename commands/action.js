class Action {
  constructor(actionType, store) {
    this._type = actionType;
    this._store = store;
  }

  get type() {
    return this._type;
  }

  get store() {
    return this._store;
  }

  getDescription() {
    throw new Error("getDescription not implemented");
  }

  process(args) {
    throw new Error("process not implemented");
  }

  validate(args) {
    throw new Error("validate not implemented");
  }

  logMessage(msg) {
    if (process.env.ENV !== "TEST") {
      console.log(msg);
    }
  }
}

module.exports = Action;
