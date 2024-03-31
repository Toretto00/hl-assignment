import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function App() {
  const [indexOfJoke, setIndexOfJoke] = useState(0);

  let data = require("./Database/jokes.json");

  const nextJoke = (n) => {
    if (indexOfJoke === data.length) return;
    data[indexOfJoke].vote = n;
    setIndexOfJoke(indexOfJoke + 1);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.heading}>
          <Text style={[styles.text, styles.fontSize]}>
            A joke a day keeps the doctor away
          </Text>
          <Text style={styles.text}>
            If you joke wrong way, your teeth have to pay. (Serious)
          </Text>
        </View>
        <View style={styles.jokesContent}>
          <View style={styles.jokes}>
            <Text style={styles.jokesText}>
              {indexOfJoke !== data.length
                ? data[indexOfJoke].joke
                : "That's all the jokes for today! Come back another day!"}
            </Text>
          </View>
          <View style={styles.action}>
            <TouchableOpacity
              title="like"
              onPress={() => nextJoke()}
              style={[
                styles.button,
                indexOfJoke === data.length
                  ? styles.disabledColor
                  : styles.like,
              ]}
              disabled={indexOfJoke === data.length ? true : false}
            >
              <Text style={styles.buttonText}>This is Funny!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="dislike"
              onPress={() => nextJoke()}
              style={[
                styles.button,
                indexOfJoke === data.length
                  ? styles.disabledColor
                  : styles.dislike,
              ]}
              disabled={indexOfJoke === data.length ? true : false}
            >
              <Text style={styles.buttonText}>This is not funny.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
  },
  heading: {
    height: 140,
    color: "white",
    justifyContent: "center",
    backgroundColor: "#29B363",
  },
  jokesContent: {
    display: "flex",
    flex: 1,
  },
  jokes: {
    flexGrow: 1,
    margin: 36,
    alignContent: "center",
  },
  jokesText: {
    fontSize: 18,
    alignContent: "center",
  },
  text: {
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  fontSize: {
    fontSize: 20,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 32,
  },
  button: {
    flexGrow: 1,
    marginLeft: 32,
    marginRight: 32,
    padding: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
  like: {
    backgroundColor: "#2C7EDB",
  },
  dislike: {
    backgroundColor: "#29B363",
  },
  disabledColor: {
    backgroundColor: "#E0E0E0",
  },
});
