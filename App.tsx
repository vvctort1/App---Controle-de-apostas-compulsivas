
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import Stack from './src/navigations/Stack';


export default function App() {

  let [fontsLoaded] = useFonts({
    'Patrick Hand': PatrickHand_400Regular,
    'Inter': Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
}

