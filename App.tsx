import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/FirstScreen';



export default function App() {
  return (
    <View style={styles.container}>
        <FirstScreen/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
