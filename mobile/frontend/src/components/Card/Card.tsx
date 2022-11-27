import React from 'react';
import { Text } from 'react-native';
import * as S from './layout';

interface Props {
  headerText: string;
  body: React.ReactNode;
}

export const Card = ({ headerText, body }: Props) => {
  return (
    <S.Bloc>
      <S.Header>
        <Text>{headerText}</Text>
      </S.Header>
      <S.Body>{body}</S.Body>
    </S.Bloc>
  );
};

export default Card;
