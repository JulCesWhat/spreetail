const RemoveAll = require("../commands/removeAll");

describe("RemoveAll command", () => {
  let command = null;
  beforeEach(() => {
    command = new RemoveAll(
      "REMOVEALL",
      new Map([
        ["key1", new Set(["value1", "value2"])],
        ["key2", new Set(["value1"])],
      ])
    );
  });

  test("returns true if store size is 1", () => {
    command.process(["key1"]);
    expect(command.store.size).toBe(1);
  });

  test("returns true if store size is 0", () => {
    command.process(["key1"]);
    command.process(["key2"]);
    expect(command.store.size).toBe(0);
  });

  test("throws an error if there is no arguments", () => {
    expect(() => command.process([])).toThrow();
  });

  test("throws an error if the key is does not exist", () => {
    expect(() => command.process(["key"])).toThrow();
  });
});
