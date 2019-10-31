import React, { Fragment } from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Text } from 'react-native';

import styles from "../login/styles"

export default function login() {
  return (
    <Fragment>
      <StatusBar barStyle="grey-content" StatusBarAnimation="slide" />
      <SafeAreaView style={styles.container}>
        <View style={styles.formCont}>
          <TextInput style={styles.formInput} />
          <TextInput style={styles.formInput} />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
