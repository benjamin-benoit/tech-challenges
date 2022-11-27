import { ScrollView, Text } from 'react-native';
import { useQuery } from 'react-query';
import { Survey } from '../../api/types';
import SurveyCard from '../../components/SurveyCard/SurveyCard';

export const SurveyList = () => {
  const { data, error, isLoading } = useQuery<Survey[], any>(['getSurveys'], async () => {
    return await fetch('/api/surveys').then(data => data.json());
  });

  return (
    <ScrollView>
      {isLoading ? <Text>Loading...</Text> : null}
      {error ? <Text>{error}</Text> : null}
      {data
        ? data?.map((survey: Survey) => (
            <SurveyCard key={survey.id} id={survey.id} name={survey.name} />
          ))
        : null}
    </ScrollView>
  );
};

export default SurveyList;
