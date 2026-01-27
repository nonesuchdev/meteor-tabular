# Test Helpers

This directory contains consolidated test utilities and helper functions for the aldeed:tabular package tests.

## Purpose

The test helpers in this directory are designed to:
- Reduce code duplication across test files
- Provide reusable test utilities and factories
- Improve test interoperability and maintainability
- Offer well-documented testing utilities for contributors

## Files

### `testHelpers.js`

Contains the core test utility functions:

- **`LogResults(Input, ExpectedOutput, Output, test)`** - Logs test results with detailed error information only when tests fail
- **`GenerateBothColumns(SpacedClassList)`** - Generates column definitions for testing table column parsing
- **`createRegExpField(SpacedClassList, searchString, PassedOptions)`** - Creates RegExp field structures for testing search functionality

## Usage

### In Test Files

The helpers are automatically made available globally through `tests/reusedFunctions.js` for backward compatibility:

```javascript
// In any test file that loads after reusedFunctions.js
Tinytest.add('My Test', function (test) {
  var columns = GenerateBothColumns(["name", "email"]);
  var result = SomeFunction(columns.columns);
  LogResults(columns, expectedResult, result, test);
});
```

### Direct Import (Recommended for New Tests)

You can also import the helpers directly:

```javascript
import { LogResults, GenerateBothColumns, createRegExpField } from './helpers/testHelpers.js';

Tinytest.add('My Test', function (test) {
  var columns = GenerateBothColumns(["name", "email"]);
  // ... test logic
});
```

## Examples

### Testing Column Generation

```javascript
const columns = GenerateBothColumns(["firstName lastName", "email"]);
// columns.columns: Array of column configurations
// columns.ExpectedOutput: Expected parsed output for assertions
```

### Testing Search Functionality

```javascript
const searchFields = createRegExpField(
  ["name", "email"], 
  "searchTerm",
  { regex: ['^\\D', '\\D?', '*'] }
);
// Returns array of field configs with search values
```

### Logging Test Results

```javascript
Tinytest.add('Util - myFunction', function (test) {
  var input = { foo: 'bar' };
  var expected = { foo: 'baz' };
  var actual = myFunction(input);
  LogResults(input, expected, actual, test);
  // Detailed logs only appear if the test fails
});
```

## Backward Compatibility

All functions are exported both as modules and as global functions to ensure backward compatibility with existing test files. Existing tests will continue to work without modification.

## Contributing

When adding new test utilities:

1. Add them to `testHelpers.js` with proper JSDoc documentation
2. Export them for module use
3. Add them to the global exports if needed for backward compatibility
4. Update this README with usage examples
5. Ensure all existing tests still pass

## Design Principles

- **DRY (Don't Repeat Yourself)**: Consolidate common test patterns
- **Well-Documented**: Each helper includes JSDoc comments and examples
- **Backward Compatible**: Don't break existing tests
- **Interoperable**: Helpers work well together and with TinyTest
