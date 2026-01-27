/**
 * Reusable Test Functions for aldeed:tabular
 * 
 * These functions are used across multiple test files to reduce
 * code duplication and improve test maintainability.
 * 
 * NOTE: The actual implementations have been moved to tests/helpers/testHelpers.js
 * These are kept here for backward compatibility with the existing test files.
 */

import { LogResults, GenerateBothColumns, createRegExpField } from './helpers/testHelpers.js';

// Export as global functions for backward compatibility with existing tests
// (The global window assignments are in this file only, not duplicated in testHelpers.js)
if (typeof window !== 'undefined') {
  window.LogResults = LogResults;
  window.GenerateBothColumns = GenerateBothColumns;
  window.createRegExpField = createRegExpField;
}
