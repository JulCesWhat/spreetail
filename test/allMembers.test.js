const AllMembers = require("../commands/allMembers");

describe("AllMembers command", () => {
  test("returns true if the store has three members", () => {
    const command = new AllMembers(
      "ALLMEMBERS",
      new Map([
        ["key1", new Set(["value1", "value2"])],
        ["key2", new Set(["value1"])],
      ])
    );
    const result = command.process([]);
    expect(result.length).toBe(3);
  });

  test("returns true if the store has two members", () => {
    const command = new AllMembers(
      "ALLMEMBERS",
      new Map([
        ["key1", new Set(["value1"])],
        ["key2", new Set(["value1"])],
      ])
    );
    const result = command.process([]);
    expect(result.length).toBe(2);
  });

  test("returns true if the store has 0 members", () => {
    const command = new AllMembers("ALLMEMBERS", new Map());
    const result = command.process([]);
    expect(result.length).toBe(0);
  });
});
