import { StyleSheet, Dimensions } from "react-native";
const size = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  Animation: {
    width: width,
    height: size,
    position: "absolute",
    backgroundColor: "#ffffff",
  },
});

export default styles;
