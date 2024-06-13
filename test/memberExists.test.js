const MemberExists = require("../commands/memberExists");

describe("MemberExists command", () => {
  let command = null;
  beforeEach(() => {
    command = new MemberExists(
      "MEMBEREXISTS",
      new Map([
        ["key1", new Set(["value1", "value2"])],
        ["key2", new Set(["value1"])],
      ])
    );
  });

  test("returns false if there is no key in the store", () => {
    const res = command.process(["key", "value1"]);
    expect(res).toBe(false);
  });

  test("returns false if the member is not found in the store", () => {
    const res = command.process(["key2", "value2"]);
    expect(res).toBe(false);
  });

  test("returns true if value is found in the key", () => {
    const res = command.process(["key1", "value1"]);
    expect(res).toBe(true);
  });

  test("throws an error if too few arguments are passed", () => {
    expect(() => command.process(["key"])).toThrow();
  });
});
