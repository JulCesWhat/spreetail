const Add = require("../commands/add");

describe("Add command", () => {
  let command = null;
  beforeEach(() => {
    command = new Add("ADD", new Map());
  });

  test("returns true if store size is 1", () => {
    command.process(["key", "value"]);
    expect(command.store.size).toBe(1);
  });

  test("returns true if store size is 1", () => {
    command.process(["key", "value1"]);
    command.process(["key", "value2"]);
    expect(command.store.size).toBe(1);
  });

  test("returns true if store size is 2", () => {
    command.process(["key1", "value"]);
    command.process(["key2", "value"]);
    expect(command.store.size).toBe(2);
  });

  test("throws an error if the key is already in the store", () => {
    expect(() => command.process(["key"])).toThrow();
  });

  test("throws an error if the member is already in the store", () => {
    command.process(["key", "value1"]);
    expect(() => command.process(["key", "value1"])).toThrow();
  });
});
