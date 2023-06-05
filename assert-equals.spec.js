const assertEquals = require("./assert-equals");

describe("Expected and actual are the same", () => {
  it("returns without throwing an error", () => {
    expect(() => assertEquals("abc", "abc")).not.toThrow();
    expect(() => assertEquals("1", "1")).not.toThrow();
    expect(() => assertEquals(1, 1)).not.toThrow();
    expect(() => assertEquals([1, 2, 3], [1, 2, 3])).not.toThrow();
  });
});

describe("when expected and actual are different", () => {
  it("throws an error", () => {
    expect(() => {
      try {
        assertEquals("abcdef", "abc");
      } catch (error) {
        console.error("Error:", error.message);
        throw error;
      }
    }).toThrow(Error);
    expect(() => {
      try {
        assertEquals(1, "1");
      } catch (error) {
        console.error("Error:", error.message);
        throw error;
      }
    }).toThrow(Error);

    expect(() => {
      try {
        assertEquals(1, 2);
      } catch (error) {
        console.error("Error:", error.message);
        throw error;
      }
    }).toThrow(Error);

    expect(() => {
      try {
        assertEquals([1, 2, 3], [1, 3]);
      } catch (error) {
        console.error("Error:", error.message);
        throw error;
      }
    }).toThrow(Error);

    expect(() => {
      try {
        assertEquals([1, 2], [1, 3]);
      } catch (error) {
        console.error("Error:", error.message);
        throw error;
      }
    }).toThrow(Error);

    expect(() => {
      try {
        assertEquals([1, 2], 2);
      } catch (error) {
        console.error("Error:", error.message);
        throw error;
      }
    }).toThrow(Error);

    expect(() => {
      try {
        assertEquals({ name: "Niete" }, "2");
      } catch (error) {
        console.error("Error:", error.message);
        throw error;
      }
    }).toThrow(Error);
  });
});

describe("Comparing object types", () => {
  describe("when expected and actual are different, it should throw an error", () => {
    it("returns an error if the type is different", () => {
      expect(() => {
        try {
          assertEquals({ name: "Niete" }, null);
        } catch (error) {
          console.error("Error:", error.message);
          throw error;
        }
      }).toThrow(Error);
      expect(() => {
        try {
          assertEquals({ name: "Niete" }, [1, 2, 3]);
        } catch (error) {
          console.error("Error:", error.message);
          throw error;
        }
      }).toThrow(Error);
      expect(() => {
        try {
          assertEquals({ name: "Niete" }, "1");
        } catch (error) {
          console.error("Error:", error.message);
          throw error;
        }
      }).toThrow(Error);
      expect(() => {
        try {
          assertEquals({ name: "Niete" }, 1);
        } catch (error) {
          console.error("Error:", error.message);
          throw error;
        }
      }).toThrow(Error);
    });

    it("returns an error if both objects do not have the same key values", () => {
      expect(() => {
        try {
          assertEquals({ name: "Niete" }, { name: "Steph" });
        } catch (error) {
          console.error("Error:", error.message);
          throw error;
        }
      }).toThrow(Error);
    });
  });
});
