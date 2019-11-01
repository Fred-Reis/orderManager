import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5733",
  },

  formCont: {
    width: "60%",
    backgroundColor: "#ffff",
    borderRadius: 10,
    flexDirection: "column",
    marginBottom: "20%",
    padding: 10,
  },

  formInput: {
    height: 30,
    backgroundColor: "#dddd",
    margin: 10,
    marginBottom: 3,
    borderRadius: 12,
    color: "#000",
    padding: 0,
    paddingHorizontal: 10,
  },

  inputText: {
    alignSelf: "center"
  },

  btn: {
    width: "80%",
    alignSelf: "center",
    margin: 10,
    padding: 5,
    borderRadius: 4,
    backgroundColor: "#1569c1",
  },

  btnText: {
    textAlign: "center",
    color: "#fff",
  },
})

export default styles;