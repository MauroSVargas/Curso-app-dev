import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
     style={styles.container}
      colors={["#FEC0CE","#E3879E"]}>
      <Text style={styles.font}>npx me hiciste sufrir para abrirte correctamente pero
        aca esta la prueba. Texto modificado al fin!
      </Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font: {
    fontSize: 28,
  },
});
