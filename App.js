import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pringles</Text>
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>

        <View style={styles.container}>
          <Text style={styles.subtitle}>Paprika</Text>
          <Image style={styles.tinyLogo}
        source={{uri: "https://senzacionalno.hr/upload/catalog/product/3327/classic-paprika-165g_62790eb9274ee.png",
        }}/>
        </View>

        <View style={styles.container}>
          <Text style={styles.subtitle}>Hot & Spicy</Text>
          <Image style={styles.tinyLogo} source={require("./assets/hot.png")} />
        </View>
      </View>

      {/* button component */}
      <View style={styles.button}>
      <Button title="Button" onPress={() => Alert.alert("Button pressed")} />
      </View>
      {/* touchable opacity component */}
      <TouchableOpacity
        style={styles.resolvedContainerStyle}
        onPress={() => Alert.alert("TouchableOpacity pressed")}
      >
        <Text style={styles.textStyle}>Touchable opacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#292828",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Bodoni",
  },
  header: {
    borderBottomWidth: 3,
    padding: 5,
  },
  subtitle: {
    color: "#f7f5f5",
    textAlign: "center",
    fontFamily: "Bodoni",
    fontSize: 24,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#f7f5f5",
    fontFamily: "Bodoni",
  },
  jumbotron: {
    flexDirection: "row",
    margin: 20,
  },
  tinyLogo: {
    margin: 25,
    width: 100,
    height: 200,
  },
  resolvedContainerStyle: {
    margin: 20,
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 20,
    width: 200
  },

  textStyle: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
