import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={[styles.textCenter, styles.lighter]}>
        This app is created as a part of Hlsolutions program. The materials
        contained on this app are provided for general information only and do
        not constitute any form of advice. HLS assumes no responsibility for the
        accuracy of any particular statement and accept no liability for any
        loss or damage which arise from reliance on the information contained on
        this site.
      </Text>
      <Text style={[styles.textCenter, styles.bold]}>Copyright 2021 HLS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    display: "flex",
    justifyContent: "center",
  },
  textCenter: {
    margin: 8,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  lighter: {
    fontWeight: "300",
  },
});
