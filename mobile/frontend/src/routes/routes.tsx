import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyList from '../views/SurveyList/SurveyList';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Survey List" component={SurveyList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
