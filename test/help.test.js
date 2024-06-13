const HELP = require("../commands/help");
const Add = require("../commands/add");
const Clear = require("../commands/clear");

describe("HELP command", () => {
  let command = null;
  beforeEach(() => {
    command = new HELP(
      "HELP",
      new Map([
        ["ADD", new Add("ADD", new Map())],
        ["CLEAR", new Clear("CLEAR", new Map())],
      ])
    );
  });

  test("returns true if there are two commands", () => {
    const result = command.process([]);
    expect(result.length).toBe(2);
  });

  test("returns true if the description is correct", () => {
    const result = command.process([]);
    expect(result[0]).toBe(
      "ADD <key> <value> - Adds a member to a collection for a given key. Displays an error if the member is already a member of the collection."
    );
  });
});
