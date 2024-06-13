const Keys = require("../commands/keys");

describe("Keys command", () => {
  let command = null;
  beforeEach(() => {
    command = new Keys("KEYS", new Map());
  });

  test("returns true if store has 0 keys", () => {
    command.process([]);
    expect(command.store.size).toBe(0);
  });
});
