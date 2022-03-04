import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Iniciando o Mines!!!</Text>
        <Text style={styles.welcome}> Com EXPO!</Text>
        <Text style={styles.instructions}> tamanho da grade:
          {params.getRowAmounth()} x {params.getColumnsAmount()}
        </Text>
      <Field />
      <Field opened/>
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={3}/>
      <Field opened nearMines={6}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  }
});
