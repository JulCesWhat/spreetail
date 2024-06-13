const Remove = require("../commands/remove");

describe("Remove command", () => {
  let command = null;
  beforeEach(() => {
    command = new Remove(
      "REMOVE",
      new Map([
        ["key1", new Set(["value1", "value2"])],
        ["key2", new Set(["value1"])],
      ])
    );
  });

  test("returns true if the size of the member for key1 is 1", () => {
    command.process(["key1", "value1"]);
    expect(command.store.get("key1").size).toBe(1);
  });

  test("returns true if store size is 2", () => {
    command.process(["key1", "value1"]);
    expect(command.store.size).toBe(2);
  });

  test("returns true if store size is 1", () => {
    command.process(["key2", "value1"]);
    expect(command.store.size).toBe(1);
  });

  test("throws an error if a value is not added", () => {
    expect(() => command.process(["key"])).toThrow();
  });

  test("throws an error if the key is not found", () => {
    expect(() => command.process(["key", "value1"])).toThrow();
  });

  test("throws an error if the value is not found", () => {
    expect(() => command.process(["key1", "value3"])).toThrow();
  });
});
