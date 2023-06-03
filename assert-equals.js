function assertEquals(expect, actual) {
  if (typeof expect !== typeof actual) {
    if (!Array.isArray(expect) && !Array.isArray(actual)) {
      throw new Error(
        `Expected type ${typeof expect} but found type ${typeof actual}`
      );
    } else if (Array.isArray(expect) && !Array.isArray(actual)) {
      throw new Error(`Expected type array but found type ${typeof actual}`);
    } else if (!Array.isArray(expect) && Array.isArray(actual)) {
      throw new Error(`Expected type ${typeof expect} but found type array`);
    } else if (
      (typeof expect === "object" && actual === null) ||
      (typeof actual === "object" && expect === null)
    ) {
      throw new Error(`It's not the same object`);
    }
  }

  //Checks for a number data type
  if (typeof expect === "number" && typeof actual === "number") {
    if (expect === actual) {
      console.log("No error");
    } else {
      throw new Error(`Expected ${expect} but found ${actual}`);
    }
  }

  //Checks for a string data type
  if (typeof expect === "string" && typeof actual === "string") {
    if (expect === actual) {
      console.log("No error");
    } else {
      throw new Error(`Expected ${expect} but found ${actual}`);
    }
  }

  //Checks for an array data type
  if (Array.isArray(expect) && Array.isArray(actual)) {
    if (expect.length === actual.length) {
      for (let i = 0; i < expect.length; i++) {
        if (expect[i] !== actual[i]) {
          throw new Error(`Expected ${expect[i]} but found ${actual[i]}`);
        }
      }
      console.log("No error");
      return;
      //Checks for an object data type
    } else if (expect.length !== actual.length) {
      throw new Error(
        `Expected array length ${expect.length} but found ${actual.length}`
      );
    }
  }

  //Checks for an object type
  if (typeof expect === "object" && typeof actual === "object") {
    const key1 = Object.keys(expect);
    const key2 = Object.keys(actual);
    if (key1.length !== key2.length) {
      throw new Error(`Expected and actual object don't have the same length`);
    } else if (key1.length === key2.length) {
      for (let key of key1) {
        if (expect[key] !== actual[key]) {
          throw new Error(
            `Expected and actual object do not have the same key value`
          );
        }
      }
      console.log("No error");
    }
  }
}
module.exports = assertEquals;
