import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import { SurveyInfos } from '../../api/types';
import Card from '../../components/Card/Card';
import { RootStackParamList } from '../../routes/types';
import * as S from './layout';
import dayjs from 'dayjs';

interface Props extends NativeStackScreenProps<RootStackParamList, 'SurveyDetails'> {}

const SurveyDetails = ({ route }: Props) => {
  const { data, error, isLoading } = useQuery<SurveyInfos[], any>(['getSurvey'], async () => {
    return await fetch(`/api/survey/${route.params.surveyId}`).then(data => data.json());
  });

  return (
    <ScrollView>
      <S.Container>
        {isLoading ? <Text>Loading...</Text> : null}
        {error ? <Text>{error}</Text> : null}

        <Card
          headerText="Average of number of products"
          body={
            <>
              {data
                ? data.map(survey =>
                    survey.type === 'numeric' ? (
                      <Text>
                        {typeof survey.answers.every(value => value == 'number')
                          ? survey.answers.reduce((a, b) => a + b, 0)
                          : null}
                      </Text>
                    ) : null
                  )
                : null}
            </>
          }
        />

        <Card
          headerText="Dates of answers"
          body={
            <>
              {data
                ? data.map(survey =>
                    survey.type === 'date'
                      ? survey.answers.map(date => (
                          <S.DateContainer>
                            <S.DateText>{dayjs(date).format('DD/MM/YYYY')}</S.DateText>
                          </S.DateContainer>
                        ))
                      : null
                  )
                : null}
            </>
          }
        />

        <Card
          headerText="Number of times each option was selected in the answers"
          body={
            <S.MCQContainer>
              <S.OptionsView>
                {data
                  ? data.map(survey =>
                      survey.type === 'mcq'
                        ? survey.options?.map(option => <Text>{option}</Text>)
                        : null
                    )
                  : null}
              </S.OptionsView>
              <S.AnswersView>
                {data
                  ? data.map(survey =>
                      survey.type === 'mcq'
                        ? survey.answers?.map((answer: boolean[]) => (
                            <Text>{answer.filter(value => value === true).length}</Text>
                          ))
                        : null
                    )
                  : null}
              </S.AnswersView>
            </S.MCQContainer>
          }
        />
      </S.Container>
    </ScrollView>
  );
};

export default SurveyDetails;
