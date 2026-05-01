import { Mongo } from 'meteor/mongo';

/**
 * SurveyQuestions collection
 *
 * Stores individual survey questions. Questions are soft-deleted by setting
 * the `deleted` flag to true, so historical survey results remain intact.
 *
 * Schema:
 *   text        {String}   - The question prompt shown to respondents.
 *   type        {String}   - Question type: 'text', 'rating', 'yes_no', or 'multiple_choice'.
 *   options     {[String]} - Available choices (only used when type === 'multiple_choice').
 *   deleted     {Boolean}  - Soft-delete flag; deleted questions are hidden from new surveys.
 *   createdAt   {Date}
 *   updatedAt   {Date}
 */
export const SurveyQuestions = new Mongo.Collection('surveyQuestions');

export default SurveyQuestions;
