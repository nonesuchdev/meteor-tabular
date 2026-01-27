/**
 * Consolidated Test Helpers for aldeed:tabular
 * 
 * This module consolidates reusable test utilities and factories
 * to improve test interoperability and reduce code duplication across test files.
 * 
 * @module testHelpers
 */

import { _ } from 'meteor/underscore';

/**
 * Logs test results with detailed error information
 * 
 * This helper provides structured test result logging that only
 * displays detailed output when tests fail, making it easier to
 * debug test failures.
 * 
 * @param {*} Input - The input used for the test
 * @param {*} ExpectedOutput - The expected result
 * @param {*} Output - The actual result
 * @param {Object} test - TinyTest test object
 */
export const LogResults = function(Input, ExpectedOutput, Output, test) {
	// Actual Test:
	test.equal(Output, ExpectedOutput)

	// Make sure to open a dev tools console to view output
	// Should only appear for errors and solves 90% of typo issues:
	if (test.current_fail_count > 0) {
		console.log('#'+test.test_case.name+' (Failed)');
		console.log('> Input:')
		console.log(Input);
		console.log('> ExpectedOutput:')
		console.log(ExpectedOutput)
		console.log('> Actual Output:')
		console.log(Output)
		console.log('');
	}
}

/**
 * Generates column definitions for testing
 * 
 * Creates both the column configuration and expected output structures
 * used in testing table column parsing and manipulation.
 * 
 * @param {Array<string>} SpacedClassList - Array of space-separated class names
 * @returns {Object} Object with columns and ExpectedOutput properties
 * @example
 * const result = GenerateBothColumns(["one two", "three"]);
 * // result.columns: array of column configs
 * // result.ExpectedOutput: expected parsed output
 */
export const GenerateBothColumns = function(SpacedClassList) {
	var BothCols = {} // It's easier to return an object
	BothCols.columns = []
	BothCols.ExpectedOutput = []
	_.each(SpacedClassList, function(ClassList) {
		BothCols.columns.push({
			class: ClassList,
			query: ClassList,
			orderable: true,
			options: {
				sortfield: 'url'
			}
		})
		var Classes = ClassList.split(' ')
		BothCols.ExpectedOutput = BothCols.ExpectedOutput.concat(
			_.map(Classes, function(Class) {
				return {
					class: ClassList,
					query: Class,
					orderable: true,
					options: {
						sortfield: 'url'
					}
				}
			})
		)
	})
	return BothCols;
}

/**
 * Creates RegExp field structures for testing search functionality
 * 
 * Generates column configurations with search values and options
 * for testing regular expression search behavior.
 * 
 * @param {Array<string>} SpacedClassList - Array of space-separated class names
 * @param {string} searchString - The search string to use
 * @param {Object} PassedOptions - Options to apply to the field
 * @returns {Array} Array of field objects with search configurations
 * @example
 * const fields = createRegExpField(["name email"], "search", {});
 * // Returns array of field configs with search values
 */
export const createRegExpField = function(SpacedClassList, searchString, PassedOptions) {
	var columns = []
	_.each(SpacedClassList, function(ClassList) {
		var Classes = ClassList.split(' ')
		columns = columns.concat(
			_.map(Classes, function(Class) {
				return {
	      data: Class,
	      search: {
	        value: searchString
	      },
	      class: ClassList,
	      options: PassedOptions
	    	}
	    })
	   )
	})
	return columns;
}

// Note: Global exports are handled in tests/reusedFunctions.js for backward compatibility
