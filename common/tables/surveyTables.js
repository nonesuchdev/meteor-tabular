import Tabular from '../Tabular';
import { SurveyQuestions } from '../collections/SurveyQuestions';
import { Surveys } from '../collections/Surveys';
import { SurveyResponses } from '../collections/SurveyResponses';

/**
 * Tabular table definitions for the survey data model.
 *
 * These tables are defined in common code so they are available on both the
 * client and server.  Import this file from your application's common
 * entry-point (or from the relevant template file) to register the tables.
 */

/**
 * SurveyQuestions table
 * Shows all non-deleted questions along with their type and, where applicable,
 * the available answer options.
 */
Tabular.Tables = Tabular.Tables || {};

Tabular.Tables.SurveyQuestions = new Tabular.Table({
  name: 'SurveyQuestions',
  collection: SurveyQuestions,
  selector() {
    return { deleted: { $ne: true } };
  },
  columns: [
    { data: 'text',    title: 'Question' },
    { data: 'type',    title: 'Type' },
    { data: 'options', title: 'Options',
      render(val) {
        return Array.isArray(val) ? val.join(', ') : '';
      }
    },
    { data: 'createdAt', title: 'Created',
      render(val) {
        return val ? val.toLocaleDateString() : '';
      }
    },
  ],
});

/**
 * Surveys table
 * Shows all non-deleted surveys with the tour types they cover.
 */
Tabular.Tables.Surveys = new Tabular.Table({
  name: 'Surveys',
  collection: Surveys,
  selector() {
    return { deleted: { $ne: true } };
  },
  columns: [
    { data: 'name',       title: 'Survey Name' },
    { data: 'tourTypes',  title: 'Tour Types',
      render(val) {
        return Array.isArray(val) ? val.join(', ') : '';
      }
    },
    { data: 'questionIds', title: '# Questions',
      render(val) {
        return Array.isArray(val) ? val.length : 0;
      }
    },
    { data: 'createdAt', title: 'Created',
      render(val) {
        return val ? val.toLocaleDateString() : '';
      }
    },
  ],
});

/**
 * SurveyResponses table
 * Shows all survey responses (both pending and submitted).  Rows where
 * submittedAt is null represent outstanding invites.
 */
Tabular.Tables.SurveyResponses = new Tabular.Table({
  name: 'SurveyResponses',
  collection: SurveyResponses,
  columns: [
    { data: 'surveyId',    title: 'Survey' },
    { data: 'tourId',      title: 'Tour' },
    { data: 'tourType',    title: 'Tour Type' },
    { data: 'driverId',    title: 'Driver' },
    { data: 'busId',       title: 'Bus' },
    { data: 'submittedAt', title: 'Submitted',
      render(val) {
        return val ? val.toLocaleString() : 'Pending';
      }
    },
    { data: 'answers', title: '# Answers',
      render(val) {
        return Array.isArray(val) ? val.length : 0;
      }
    },
  ],
});
