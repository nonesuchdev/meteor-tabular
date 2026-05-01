import { Mongo } from 'meteor/mongo';

/**
 * Surveys collection
 *
 * Each survey is a named set of question IDs applicable to one or more tour
 * types. No versioning is used; use soft deletes to retire a survey.
 *
 * Schema:
 *   name        {String}   - Human-readable survey name.
 *   questionIds {[String]} - Ordered list of SurveyQuestion _ids included in
 *                            this survey.
 *   tourTypes   {[String]} - Tour types this survey applies to.
 *                            Known values: 'charter', 'group_tour', 'student_tour'.
 *   deleted     {Boolean}  - Soft-delete flag.
 *   createdAt   {Date}
 *   updatedAt   {Date}
 */
export const Surveys = new Mongo.Collection('surveys');

export default Surveys;
