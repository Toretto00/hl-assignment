import { StyleSheet, View } from "react-native";

import Home from "./screens/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
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
});
