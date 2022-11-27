import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { StackNavigationScreens } from '../../routes/types';
import * as S from './layout';

interface Props {
  id: number;
  name: string;
}

export const SurveyCard = ({ id, name }: Props) => {
  const navigation = useNavigation();

  return (
    <S.Container
      onPress={() => {
        navigation.navigate(
          StackNavigationScreens.SurveyDetails as never,
          { surveyId: id } as never
        );
      }}>
      <S.SurveyLink>{name}</S.SurveyLink>
    </S.Container>
  );
};

export default SurveyCard;
