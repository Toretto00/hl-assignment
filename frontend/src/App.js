import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import { Button, Container, Divider } from "@mui/material";
import Footer from "./Footer/Footer";

function App() {
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
    <div className="App">
      <Container>
        <Header />
      </Container>
      <div
        style={{
          padding: "46px 0 46px 0",
          backgroundColor: "#29B363",
          color: "white",
        }}
      >
        <p style={{ fontSize: "36px", fontWeight: "bold" }}>
          A joke a day keeps the doctor away
        </p>
        <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
      </div>
      <Container
        style={{ flexGrow: "1", alignContent: "center", fontSize: "20px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            alignContent: "center",
          }}
        >
          <p
            style={{
              textAlign: "left",
              alignContent: "center",
              margin: "0 16px 0 16px",
              height: "160px",
              flexGrow: "2",
            }}
          >
            {indexOfJoke !== jokes.length
              ? jokes[indexOfJoke].joke
              : "That's all the jokes for today! Come back another day!"}
          </p>
          <div
            style={{
              margin: "32px 0 0 0",
              borderTop: "1px solid #ECECEC",
              paddingTop: "32px",
              flexGrow: "1",
            }}
          >
            <Button
              variant="contained"
              disabled={indexOfJoke === jokes.length ? true : false}
              style={{
                backgroundColor:
                  indexOfJoke !== jokes.length ? "#2C7EDB" : "#E0E0E0",
                padding: "12px 72px 12px 72px",
                borderRadius: "0",
                marginRight: "32px",
                textTransform: "none",
              }}
              onClick={() => nextJoke(1)}
            >
              This is Funny!
            </Button>
            <Button
              variant="contained"
              disabled={indexOfJoke === jokes.length ? true : false}
              style={{
                backgroundColor:
                  indexOfJoke !== jokes.length ? "#29B363" : "#E0E0E0",
                padding: "12px 72px 12px 72px",
                borderRadius: "0",
                textTransform: "none",
              }}
              onClick={() => nextJoke(-1)}
            >
              This is not funny.
            </Button>
          </div>
        </div>
      </Container>
      <Divider style={{ borderColor: "#D2D2D2" }} />
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
