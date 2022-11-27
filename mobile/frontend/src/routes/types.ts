export type RootStackParamList = {
  SurveysList: undefined;
  SurveyDetails: { surveyId: number };
};

export enum StackNavigationScreens {
  SurveysList = 'SurveysList',
  SurveyDetails = 'SurveyDetails',
}
