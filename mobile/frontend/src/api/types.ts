export type Survey = {
  id: number;
  name: string;
};

export type SurveyInfos = {
  label: string;
  type: string;
  answers: [];
  options?: string[];
};
