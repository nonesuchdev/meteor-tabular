# Testing Guide for aldeed:tabular

This guide explains how to run and write tests for the aldeed:tabular Meteor package.

## Running Tests

To run the test suite, use Meteor's test command:

```bash
meteor test-packages ./ --driver-package meteortesting:mocha
```

Or with TinyTest:

```bash
meteor test-packages ./
```

## Test Structure

The test suite is organized as follows:

```
tests/
├── helpers/
│   ├── README.md           # Documentation for test helpers
│   └── testHelpers.js      # Consolidated test utilities
├── reusedFunctions.js      # Backward-compatible helper imports
├── util.js                 # Tests for utility functions
├── mongoDBQuery.js         # Tests for MongoDB query generation
└── utilIntegration.js      # Integration tests
```

## Test Organization

### Helper Functions (`tests/helpers/`)

This directory contains consolidated, reusable test utilities to reduce duplication and improve maintainability. See `tests/helpers/README.md` for detailed documentation.

### Unit Tests (`tests/util.js`)

Tests for individual utility functions in isolation:
- `cleanFieldName` - Field name cleaning
- `cleanFieldNameForSearch` - Search field name cleaning
- `sortsAreEqual` - Sort comparison
- `objectsAreEqual` - Object equality
- `getMongoSort` - MongoDB sort generation
- `parseMultiFieldColumns` - Column parsing
- `createRegExp` - Regular expression creation

### Query Tests (`tests/mongoDBQuery.js`)

Tests for MongoDB query generation:
- Single column queries
- Multiple column queries
- Queries with existing selectors
- Column-specific search queries

### Integration Tests (`tests/utilIntegration.js`)

Tests that verify multiple components working together:
- `getPubSelector` - Complete selector generation pipeline

## Writing Tests

### Basic Test Structure

```javascript
Tinytest.add('Category - functionName', function (test) {
  var input = /* test input */;
  var expectedOutput = /* expected result */;
  var output = FunctionToTest(input);
  LogResults(input, expectedOutput, output, test);
});
```

### Using Test Helpers

```javascript
import { LogResults, GenerateBothColumns } from './helpers/testHelpers.js';

Tinytest.add('My New Test', function (test) {
  // Generate test data
  var testData = GenerateBothColumns(["column1", "column2"]);
  
  // Run the function under test
  var result = myFunction(testData.columns);
  
  // Assert and log results
  LogResults(testData, expectedResult, result, test);
});
```

### Test Naming Conventions

Tests follow this naming pattern:
- `Util - functionName` - Unit tests for utility functions
- `Util Integration - featureName` - Integration tests
- `Util createMongoDBQuery - scenario` - Specific scenario tests

## Test Coverage

The current test suite covers:

✅ Field name manipulation
✅ Column parsing and configuration
✅ MongoDB query generation
✅ Sort order handling
✅ Regular expression creation for search
✅ Object and array comparison

## Best Practices

1. **Use Test Helpers**: Leverage the helpers in `tests/helpers/` to reduce duplication
2. **Descriptive Names**: Use clear, descriptive test names that indicate what's being tested
3. **Log Results**: Always use `LogResults` to get detailed error output on failures
4. **Test Edge Cases**: Include tests for edge cases and error conditions
5. **Keep Tests Focused**: Each test should verify one specific behavior
6. **Maintain Backward Compatibility**: Don't break existing tests when refactoring

## Debugging Failed Tests

When a test fails, the `LogResults` helper will output:
- The test name
- Input values
- Expected output
- Actual output

This information appears in the browser console and helps quickly identify issues.

## Adding New Tests

1. Determine the appropriate test file (util.js, mongoDBQuery.js, etc.)
2. Add your test using the `Tinytest.add` pattern
3. Use test helpers to generate test data
4. Use `LogResults` for assertions and debugging
5. Run the test suite to verify
6. Update this documentation if adding new test categories

## Continuous Integration

Tests should be run in CI before merging pull requests to ensure:
- All existing tests pass
- New features have test coverage
- Refactoring doesn't break existing functionality

## Further Reading

- [TinyTest Documentation](https://docs.meteor.com/api/tinytest.html)
- [Meteor Testing Guide](https://guide.meteor.com/testing.html)
- Test Helpers: See `tests/helpers/README.md`
