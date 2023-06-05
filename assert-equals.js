function assertEquals(expected, actual) {
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
    throw new Error(`Expected "${expected}" but found "${actual}"`);
  }
}

module.exports = assertEquals;
