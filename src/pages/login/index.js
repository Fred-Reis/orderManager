import React, { Fragment } from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

import styles from "../login/styles"

export default function login() {
  return (
    <Fragment>
      <StatusBar barStyle="grey-content" StatusBarAnimation="slide" />
      <SafeAreaView style={styles.container}>
        <View >
          <TextInput />
          <TextInput />
          <TouchableOpacity />
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
