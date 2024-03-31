import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/HL-logo.jpg")} style={styles.image} />
      <View style={styles.account}>
        <View style={styles.name}>
          <Text style={[styles.italic, styles.rightText]}>Handicrafted by</Text>
          <Text style={[styles.bold, styles.rightText]}>Jim HLS</Text>
        </View>
        <Image source={require("../assets/ava.png")} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 46,
    marginRight: 8,
    marginBottom: 16,
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    height: 64,
    width: 64,
  },
  account: {
    flexDirection: "row",
  },
  name: {
    justifyContent: "center",
    marginRight: 8,
  },
  rightText: {
    textAlign: "right",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
});
