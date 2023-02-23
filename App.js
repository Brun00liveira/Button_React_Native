import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Alert } from 'react-native';


export default function App() {
  
  const showMessage = () => {
    Alert.alert(
      "Hi",
      "This is a message!!",
      [
        {
          text: "cancel",
        },
      ]);
  };
  
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <Button
        title="Click Here!!!"
        onPress={showMessage}
        color="black"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});
