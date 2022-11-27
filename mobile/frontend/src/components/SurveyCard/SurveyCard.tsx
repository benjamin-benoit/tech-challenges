import { Text } from 'react-native';
import * as S from './layout';

interface Props {
  name: string;
}

export const SurveyCard = ({ name }: Props) => {
  return (
    <S.Container>
      <Text>{name}</Text>
    </S.Container>
  );
};

export default SurveyCard;
