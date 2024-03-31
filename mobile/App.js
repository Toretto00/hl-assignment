import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function App() {
  const [indexOfJoke, setIndexOfJoke] = useState(0);

  var jokes = [
    {
      joke: 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
      vote: 0,
    },
    {
      joke: 'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
      vote: 0,
    },
    {
      joke: 'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, \'I am going to eat that pussy once Jimmy leaves for school today!\'"',
      vote: 0,
    },
    {
      joke: 'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it\'s either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"',
      vote: 0,
    },
  ];

  const nextJoke = (n) => {
    if (indexOfJoke === jokes.length) return;
    jokes[indexOfJoke].vote = n;
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
              {indexOfJoke !== jokes.length
                ? jokes[indexOfJoke].joke
                : "That's all the jokes for today! Come back another day!"}
            </Text>
          </View>
          <View style={styles.action}>
            <TouchableOpacity
              title="like"
              onPress={() => nextJoke()}
              style={[
                styles.button,
                indexOfJoke === jokes.length
                  ? styles.disabledColor
                  : styles.like,
              ]}
              disabled={indexOfJoke === jokes.length ? true : false}
            >
              <Text style={styles.buttonText}>This is Funny!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="dislike"
              onPress={() => nextJoke()}
              style={[
                styles.button,
                indexOfJoke === jokes.length
                  ? styles.disabledColor
                  : styles.dislike,
              ]}
              disabled={indexOfJoke === jokes.length ? true : false}
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
