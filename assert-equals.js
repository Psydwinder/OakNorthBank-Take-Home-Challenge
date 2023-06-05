function assertEquals(expected, actual) {
  // Check if they are non-array objects
  if (
    typeof expected === "object" &&
    !Array.isArray(expected) &&
    typeof actual === "object" &&
    !Array.isArray(actual)
  ) {
    const expectedKeys = Object.keys(expected);
    const actualKeys = Object.keys(actual);
    if (expectedKeys.length !== actualKeys.length) {
      throw new Error(
        `Expected ${JSON.stringify(expected)} and actual ${JSON.stringify(
          actual
        )} objects don't have the same length`
      );
    } else {
      for (let key of expectedKeys) {
        if (actual[key] === undefined) {
          throw new Error(`Expected key "${key}" not found in actual`);
        } else if (expected[key] !== actual[key]) {
          throw new Error(
            `The values are NOT equal. The expected object ${key}: "${expected[key]}" is NOT equal to the actual object ${key}: "${actual[key]}"`
          );
        }
      }
    }
  }

  // Check if they are arrays
  if (Array.isArray(expected) && Array.isArray(actual)) {
    if (expected.length !== actual.length) {
      throw new Error(
        `Expected array length ${expected.length} but found ${actual.length}`
      );
    }
    for (let i = 0; i < expected.length; i++) {
      assertEquals(expected[i], actual[i]);
    }
    return;
  }

  // Check if types match
  if (typeof expected !== typeof actual) {
    throw new Error(
      `Expected type ${typeof expected} but found type ${typeof actual}`
    );
  }

  // Check values
  if (expected !== actual) {
    throw new Error(
      `Expected ${JSON.stringify(expected)} but found ${JSON.stringify(actual)}`
    );
  }
}

module.exports = assertEquals;
