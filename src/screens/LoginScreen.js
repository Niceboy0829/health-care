import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';
import LoadingOverlay from '../components/LoadingOverlay';
import Images from '../assets/Images'

const LoginScreen = (props) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const onLogin = () => {
    props.navigation.navigate('HearAboutUs');
  }
    return (
      <View style={styles.flex}>
        <BackgroundImage backgroundImage={Images.main_bg_login} />
        <SafeAreaView style={styles.flex}>
          {loading && <LoadingOverlay />}
          <View style={styles.container}>
            <View style={styles.buttonArea}>
              <RoundButton
                title="Login"
                style={styles.nextButton}
                onPress={() => {
                  onLogin();
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#A5593C',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    fontSize: 18,
  },
  buttonArea: {
    flex: 1,
    justifyContent: "center",
    width: '90%',
    bottom: 50
  },
});

export default LoginScreen;
