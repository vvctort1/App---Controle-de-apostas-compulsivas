import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import { RootStack } from './types/rotas';
import ThirdScreen from './screens/ThirdScreen';

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
        screenOptions={{
          headerShown: false // Oculta o cabeçalho padrão
        }}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
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