const assertEquals = require("./assert-equals");

// Test with String
try {
  assertEquals("abc", "abc"); // Passes
} catch (err) {
  console.error(err.message);
}

try {
  assertEquals("abcef", "abc"); // Throws
} catch (err) {
  console.error(err.message);
}

// Test with Number
try {
  assertEquals(1, 1); // Passes
} catch (err) {
  console.error(err.message);
}

try {
  assertEquals(1, 2); // Throws
} catch (err) {
  console.error(err.message);
}

try {
  assertEquals(1, "1"); // Throws
} catch (err) {
  console.error(err.message);
}

// Test with Array
try {
  assertEquals(["a", "b", "c"], ["a", "b", "c"]); // Passes
} catch (err) {
  console.error(err.message);
}

try {
  assertEquals(["a", "b"], ["a", "b", "c"]); // Throws
} catch (err) {
  console.error(err.message);
}

try {
  assertEquals(["a", "b"], ["a", "d"]); // Throws
} catch (err) {
  console.error(err.message);
}
