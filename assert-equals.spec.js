const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  describe("when expected and actual are the same", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals("abc", "abc")).not.toThrow();
      expect(() => assertEquals("1", "1")).not.toThrow();
      expect(() => assertEquals(1, 1)).not.toThrow();
      expect(() => assertEquals([1, 2, 3], [1, 2, 3])).not.toThrow();
    });
  });

  describe("when expected and actual are different", () => {
    it("throws an error", () => {
      expect(() => assertEquals("1", "2")).toThrow(Error);
      expect(() => assertEquals(1, "2")).toThrow(Error);
      expect(() => assertEquals(1, 2)).toThrow(Error);
      expect(() => assertEquals([1, 2], [1, 3])).toThrow(Error);
      expect(() => assertEquals([1, 2], 2)).toThrow(Error);
      expect(() => assertEquals([1, 2], "2")).toThrow(Error);
    });
  });
});

describe("Comparing object types", () => {
  describe("when expected and actual are different, it should throw an error", () => {
    it("returns an error if the type is different", () => {
      expect(() => assertEquals({ name: "Niete" }, 1)).toThrow(Error);
      expect(() => assertEquals({ name: "Niete" }, "1")).toThrow(Error);
      expect(() => assertEquals({ name: "Niete" }, [1, 2, 3])).toThrow(Error);
      expect(() => assertEquals({ name: "Niete" }, null)).toThrow(Error);
    });
    it("returns an error if both objects are not the same length", () => {
      expect(() =>
        assertEquals({ name: "Niete" }, { name: "Niete", name: "Steph" })
      ).toThrow(Error);
    });
    it("returns an error if both objects do not have the same key values", () => {
      expect(() => assertEquals({ name: "Niete" }, { name: "Steph" })).toThrow(
        Error
      );
      expect(() => assertEquals({ name: "Niete" }, { names: "Steph" })).toThrow(
        Error
      );
    });
  });
});
