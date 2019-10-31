import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5733",
  },

  formCont: {
    width: "50%",
    backgroundColor: "#ffff",
    borderRadius: 5,
  },

  formInput: {
    height: 10,
    //backgroundColor: "#ffff",
    margin: 10,
    borderRadius: 40,
    color: "#000",
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
  },
})

export default styles;