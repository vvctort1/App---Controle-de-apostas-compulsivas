
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import Stack from './src/navigations/Stack';


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
      <Stack/>
    </NavigationContainer>
  );
}

