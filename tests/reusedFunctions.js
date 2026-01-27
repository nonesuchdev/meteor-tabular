/**
 * Reusable Test Functions for aldeed:tabular
 * 
 * These functions are used across multiple test files to reduce
 * code duplication and improve test maintainability.
 * 
 * NOTE: The actual implementations have been moved to tests/helpers/testHelpers.js
 * These are kept here for backward compatibility with the existing test files.
 */

import { LogResults as _LogResults, GenerateBothColumns as _GenerateBothColumns, createRegExpField as _createRegExpField } from './helpers/testHelpers.js';

// Export as global functions for backward compatibility with existing tests
LogResults = _LogResults;
GenerateBothColumns = _GenerateBothColumns;
createRegExpField = _createRegExpField;
