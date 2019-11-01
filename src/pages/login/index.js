import React, { Fragment } from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Text } from 'react-native';

import styles from "../login/styles"

export default function login() {
  return (
    <Fragment>
      <StatusBar barStyle="grey-content" StatusBarAnimation="slide" />
      <SafeAreaView style={styles.container}>
        <View style={styles.formCont}>
          <TextInput autoCompleteType="off" keyboardType="email-address" style={styles.formInput} placeholder="digite seu e-mail" />
          <Text style={styles.inputText}>Digite seu e-mail</Text>
          <TextInput autoCompleteType="off" style={styles.formInput} placeholder="Digite sua senha" />
          <Text style={styles.inputText}>Digite sua senha</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
