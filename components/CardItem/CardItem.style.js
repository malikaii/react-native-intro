import { StyleSheet } from "react-native";

export const cItemStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 100,
    // padding: 10,
    borderRadius: 10,
    // justifyContent: 'space-evenly'
    marginBottom: 15,
  },
  heading: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center'
    padding: 10,
  },
  title: {
    fontWeight: "bold",
  },
  textGroup: {
    padding: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "25%",
  },
});
