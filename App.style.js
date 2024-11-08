import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // elevation:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    borderRadius: 10
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: "50%",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  texts: { flex: 1,
    paddingLeft: 15
},
  header: {
    flexDirection: "row",
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10
  },
  socialBtn: {
    borderRadius: '50%',
    backgroundColor: '#eee',
    padding: 10
  }
});
