import {Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {StatusBar} from 'expo-status-bar';

export default function Pose() {
  return (
    <View style={styles.container}>
      <View style={styles.instructionsView}>
        <Text style={styles.instructionsText}>Playing Posele:</Text>
        <Text style={styles.instructionsText}>When you click Pose Now, you will see an image</Text>
        <Text style={styles.instructionsText}>Your device camera will start</Text>
        <Text style={styles.instructionsText}>
          You have five seconds to line up your shot and match the pose in the image.
        </Text>
      </View>
      <View style={styles.pose}>
        <Image style={styles.image} source={require('../assets/cameraWarning.jpg')}></Image>
        <Text style={styles.warning}>
          Please move to a location where you have room to move around and permission to take
          pictures. Be aware of other people, pets, and objects.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pose Now!</Text>
        </TouchableOpacity>
      </View>
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
  instructionsView: {
    flex: 1,
    marginTop: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  instructionsText: {
    color: 'darkgray',
  },
  pose: {flex: 3},
  warning: {
    color: 'red',
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 125,
    height: 125,
  },
  button: {
    backgroundColor: '#414BB2',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {flex: 2, width: '100%', alignItems: 'center'},
});
