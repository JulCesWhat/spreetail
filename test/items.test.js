const Items = require("../commands/items");

describe("Items command", () => {
  test("returns true if there are 0 items", () => {
    const command = new Items("ITEMS", new Map());
    const result = command.process([]);
    expect(result.length).toBe(0);
  });

  test("returns true if there is one item", () => {
    const command = new Items("ITEMS", new Map([["key", new Set(["value"])]]));
    const result = command.process([]);
    expect(result.length).toBe(1);
    expect(result[0]).toBe("key: value");
  });

  test("returns true if there are 3 items", () => {
    const command = new Items(
      "ITEMS",
      new Map([
        ["key1", new Set(["value1", "value2"])],
        ["key2", new Set(["value1"])],
      ])
    );
    const result = command.process([]);
    expect(result.length).toBe(3);
    expect(result[1]).toBe("key1: value2");
  });
});
