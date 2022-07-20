import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

export default class RoundButton extends React.Component {
  render() {
    const {style, title, onPress} = this.props;
    return (
      <TouchableOpacity style={[style]} onPress={onPress}>
        <View style={[styles.buttonContainer, styles.strongGreen]}>
            <Text style={[styles.buttonText, styles.whiteText]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 52,
    marginVertical: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  strongGreen: {
    backgroundColor: '#6E9277'
  },  

  whiteText: {
    color: 'white',
  },

  buttonText: {
    
    fontSize: 16,
  },
});
