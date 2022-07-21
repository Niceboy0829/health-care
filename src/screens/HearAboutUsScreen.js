import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Dropdown } from 'react-native-element-dropdown';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';
import Images from '../assets/Images';
import {foundations} from '../../redux/constants/configConstants';

const HearAboutUsScreen = (props) => {
  
  return (
    <View style={styles.container}>
      <BackgroundImage backgroundImage={Images.main_bg_second} />
      <SafeAreaView style={styles.container}>
          <View style={styles.contentView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}> 
                Where did you {'\n'} hear about us?
              </Text>
            </View>
            <View style={styles.titleView}>
              
            </View>
            <View style={styles.buttonArea}>
              <RoundButton
                title="Next"
                style={styles.nextButton}
                onPress={() => {
                  props.navigation.navigate('Goal');
                }}
              />
            </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  contentView: {
    flex: 1,
    alignItems: 'center',
  },

  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    top: -15
  },

  titleText: {
    fontSize: 30,
    color:'white',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    marginLeft: 40
  },

  buttonArea: {
    flex: 1,
    justifyContent: "center",
    width: '90%',
    bottom: 100
  },
});

export default HearAboutUsScreen;