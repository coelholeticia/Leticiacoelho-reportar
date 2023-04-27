
import { StyleSheet, View} from 'react-native';
import Header from './src/components/header'
import Main from './src/components/Principal/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
});
