import React, {Component, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';

import Images from '../assets/Images';

const FirstScreen = (props) => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [])
  
  return (
    <View style={styles.container}>
      <BackgroundImage backgroundImage={Images.main_bg_second} />
      <SafeAreaView style={styles.container}>
          <View style={styles.contentView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}> 
                Choose your {'\n'} Foundation
              </Text>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.descriptionText}> 
                Support your favorite Non-Profit today. A {'\n'}
                percentage of all of your in-app purchases {'\n'}
                will go to the foundation of your choice. 
              </Text>
            </View>
            <View style={styles.buttonArea}>
              <RoundButton
                title="Next"
                style={styles.nextButton}
                onPress={() => {
                  props.navigation.navigate('Root', {stackName: 'Home'});
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
  },

  titleText: {
    fontSize: 30,
    color:'white',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    marginLeft: 70
  },

  descriptionText: {
    marginTop: -250,
    fontSize: 20,
    color:'white',
    fontFamily: 'Open Sans',
    marginHorizontal: 30
  },

  buttonArea: {
    flex: 1,
    justifyContent: "center",
    width: '90%',
    bottom: 60
  },
});

export default FirstScreen;