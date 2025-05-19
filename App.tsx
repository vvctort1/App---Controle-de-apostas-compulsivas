import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';

import FirstScreen from './src/screens/FirstScreen';
import { RootStack } from './src/types/rotas';
import LoginScreen from './src/screens/LoginScreen';
import IntroScreen from './src/screens/IntroScreen';
import Question1Screen from './src/screens/Question1Screen';
import CadastroScreen from './src/screens/CadastroScreen';
import Question2Screen from './src/screens/Question2Screen';
import Question3Screen from './src/screens/Question3Screen';

const Stack = createStackNavigator<RootStack>();

export default function App() {
  // Carregamento da fonte
  let [fontsLoaded] = useFonts({
    'Patrick Hand': PatrickHand_400Regular,
  });

  if (!fontsLoaded) {
    return null; // Retornamos null enquanto as fontes não carregam
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="FirstScreen"
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={
          {headerShown: false}
        }/>
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} options={
          {headerShown: false}
        }/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={
          {headerShown: false}
        }/>
        <Stack.Screen name="IntroScreen" component={IntroScreen}options={
          {headerShown: false}
        }/>
        <Stack.Screen name="Question1Screen" component={Question1Screen} options={{
          title: ""
        }}/>
        <Stack.Screen name="Question2Screen" component={Question2Screen} options={{
          title: ""
        }}/>
        <Stack.Screen name="Question3Screen" component={Question3Screen} options={{
          title: ""
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});