import { useState } from "react";
import { Button, Container, Divider } from "@mui/material";

import "./Home.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { useCookies } from "react-cookie";

function Home() {
  const [cookies, setCookie] = useCookies(["index"]);
  const [indexOfJoke, setIndexOfJoke] = useState(cookies.index || 0);

  let data = require("../Database/jokes.json");

  const nextJoke = (n) => {
    if (indexOfJoke === data.length) return;
    setCookie("index", indexOfJoke + 1);
    data[indexOfJoke].vote = n;
    setIndexOfJoke(indexOfJoke + 1);
  };

  return (
    <div className="Home">
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
              margin: "0 32px 0 16px",
              // height: "160px",
              flexGrow: "2",
            }}
          >
            {indexOfJoke !== data.length
              ? data[indexOfJoke].joke
              : "That's all the jokes for today! Come back another day!"}
          </p>
          <div
            style={{
              display: "flex",
              margin: "32px 0 32px 0",
              borderTop: "1px solid #ECECEC",
              paddingTop: "32px",
              justifyContent: "center",
              flexGrow: "1",
            }}
          >
            <Button
              variant="contained"
              disabled={indexOfJoke === data.length ? true : false}
              style={{
                backgroundColor:
                  indexOfJoke !== data.length ? "#2C7EDB" : "#E0E0E0",
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
              disabled={indexOfJoke === data.length ? true : false}
              style={{
                backgroundColor:
                  indexOfJoke !== data.length ? "#29B363" : "#E0E0E0",
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

export default Home;
