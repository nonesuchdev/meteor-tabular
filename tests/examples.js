/**
 * Example Test File
 * 
 * This file demonstrates how to write tests using the consolidated
 * test helpers. It's intended as a reference for contributors.
 */

// Example 1: Basic test using the global helpers (backward compatible)
Tinytest.add('Example - Using Global Helpers', function (test) {
	// Generate test data using the helper
	var columns = GenerateBothColumns(["firstName lastName"]);
	
	// Verify the structure
	test.equal(columns.columns.length, 1);
	test.equal(columns.ExpectedOutput.length, 2); // firstName and lastName parsed separately
});

// Example 2: Testing with LogResults helper
Tinytest.add('Example - Using LogResults', function (test) {
	var input = {foo: 'bar'};
	var expectedOutput = {foo: 'bar'};
	var actualOutput = {foo: 'bar'}; // In a real test, this would be from a function call
	
	// LogResults will only show detailed output if the test fails
	LogResults(input, expectedOutput, actualOutput, test);
});

// Example 3: Creating RegExp fields for search tests
Tinytest.add('Example - RegExp Field Creation', function (test) {
	var searchFields = createRegExpField(
		["name", "email"],
		"testSearch",
		{}
	);
	
	test.equal(searchFields.length, 2);
	test.equal(searchFields[0].search.value, "testSearch");
	test.equal(searchFields[1].search.value, "testSearch");
});

/**
 * Example 4: Using helpers with ES6 imports (for new test files)
 * 
 * import { LogResults, GenerateBothColumns, createRegExpField } from './helpers/testHelpers.js';
 * 
 * Tinytest.add('My Test', function (test) {
 *   const columns = GenerateBothColumns(["col1", "col2"]);
 *   // ... test logic
 * });
 */
