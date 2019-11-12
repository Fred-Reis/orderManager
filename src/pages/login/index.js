import React, { Component, Fragment } from "react";
import {
  //   View,
  //   TextInput,
  //   TouchableOpacity,
  //   SafeAreaView,
  StatusBar
  //   Text
} from "react-native";

//import styles from "../login/styles";
import {
  Container,
  FormCont,
  FormInput,
  InputText,
  Btn,
  BtnText
} from "./styles";

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="grey-content" StatusBarAnimation="slide" />
        <Container>
          <FormCont>
            <FormInput
              autoCompleteType="off"
              keyboardType="email-address"
              placeholder="digite seu e-mail"
            />
            <InputText>Digite seu e-mail</InputText>
            <FormInput autoCompleteType="off" placeholder="Digite sua senha" />
            <InputText>Digite sua senha</InputText>
            <Btn>
              <BtnText>Login</BtnText>
            </Btn>
          </FormCont>
        </Container>
      </Fragment>
    );
  }
}
