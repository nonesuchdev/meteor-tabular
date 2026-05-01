import { Mongo } from 'meteor/mongo';

/**
 * SurveyResponses collection
 *
 * Combines what was previously two collections (surveyInvites + surveyResponses)
 * into a single document per respondent per trip. A document is created when a
 * survey invite is issued (submittedAt is null at that point) and updated in
 * place when the respondent submits their answers.
 *
 * Schema:
 *   surveyId    {String}   - Reference to Surveys._id.
 *   tourId      {String}   - Reference to the tour (charter or group tour) _id.
 *   tourType    {String}   - Denormalized tour type: 'charter', 'group_tour',
 *                            or 'student_tour'.
 *   driverId    {String}   - Reference to the driver's user/profile _id.
 *   busId       {String}   - Reference to the bus/vehicle _id.
 *   answers     {[Object]} - Array of { questionId {String}, value {String} }
 *                            objects representing the respondent's answers.
 *                            Empty array until the survey is submitted.
 *   submittedAt {Date}     - Set when the respondent submits the survey;
 *                            null while the invite is still pending.
 *   createdAt   {Date}
 *   updatedAt   {Date}
 */
export const SurveyResponses = new Mongo.Collection('surveyResponses');

export default SurveyResponses;
