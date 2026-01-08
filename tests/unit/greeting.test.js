const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {

  // --- TESTS EXISTANTS ---

  it("should return the default message when no name is provided", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("should include the name when provided", () => {
    expect(getGreeting("Alice")).toBe("Hello world! From Alice");
  });

  // --- LES 3 NOUVEAUX TESTS OK ---

  it("should work with a name containing numbers", () => {
    expect(getGreeting("Agent007")).toBe("Hello world! From Agent007");
  });

  it("should work with special characters in the name", () => {
    expect(getGreeting("Jean-Luc")).toBe("Hello world! From Jean-Luc");
  });

  it("should work with a long name", () => {
    const longName = "Jean-Sébastien de la Rochefoucauld";
    expect(getGreeting(longName)).toBe(`Hello world! From ${longName}`);
  });

  // --- TESTS KO ET SKIPPED (Pour la répartition dans le camembert) ---

  it("should fail this test for monitoring purposes", () => {
    expect(getGreeting()).toBe("This will fail");
  });

  it.skip("should be a skipped test", () => {
    expect(getGreeting("Bob")).toBe("Hello world! From Bob");
  });

});