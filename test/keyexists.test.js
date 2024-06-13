const KeyExists = require("../commands/keyexists");

describe("KeyExists command", () => {
  let command = null;
  beforeEach(() => {
    command = new KeyExists(
      "KEYEXISTS",
      new Map([
        ["key1", new Set(["value1", "value2"])],
        ["key2", new Set(["value1"])],
      ])
    );
  });

  test("returns false if the key is not found", () => {
    const res = command.process(["key"]);
    expect(res).toBe(false);
  });

  test("returns true if the key is found", () => {
    const res = command.process(["key1"]);
    expect(res).toBe(true);
  });
});
