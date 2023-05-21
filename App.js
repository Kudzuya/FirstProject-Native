import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Holla!</Text>
      <Text>I'm very excited</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "#304ffe",
    fontSize: 20,
    padding: 20,
  },

  button: {
    borderRadius: 10,
    backgroundColor: '#29b6f6',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
