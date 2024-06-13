const Members = require("../commands/members");

describe("Members command", () => {
  let command = null;
  beforeEach(() => {
    command = new Members(
      "MEMBERS",
      new Map([
        ["key1", new Set(["value1", "value2"])],
        ["key2", new Set(["value1"])],
      ])
    );
  });

  test("returns true if there are 2 members", () => {
    const members = command.process(["key1"]);
    expect(members.length).toBe(2);
  });

  test("returns true if there is 1 member", () => {
    const members = command.process(["key2"]);
    expect(members.length).toBe(1);
  });

  test("throws an error if the key is not passed", () => {
    expect(() => command.process([])).toThrow();
  });

  test("throws an error if the member is not passed", () => {
    expect(() => command.process(["key"])).toThrow();
  });
});
