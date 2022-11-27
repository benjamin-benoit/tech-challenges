import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyDetails from '../views/SurveyDetails/SurveyDetails';
import SurveyList from '../views/SurveysList/SurveysList';
import { StackNavigationScreens } from './types';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={StackNavigationScreens.SurveysList}
          component={SurveyList}
          options={{ title: 'Surveys List' }}
        />
        <Stack.Screen
          name={StackNavigationScreens.SurveyDetails}
          component={SurveyDetails}
          options={{ title: 'Survey Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
