const Clear = require("../commands/clear");

describe("Clear command", () => {
  let command = null;
  beforeEach(() => {
    command = new Clear(
      "CLEAR",
      new Map([
        ["key1", new Set(["value1", "value2"])],
        ["key2", new Set(["value1"])],
      ])
    );
  });

  test("returns true if the store is of size 0", () => {
    command.process([]);
    expect(command.store.size).toBe(0);
  });

  test("returns true if the store is of size 0", () => {
    command.process([]);
    command.process([]);
    expect(command.store.size).toBe(0);
  });
});
