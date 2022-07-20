import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import Toast from 'react-native-toast-message';

import BackgroundImage from '../components/BackgroundImage';
import LoadingOverlay from '../components/LoadingOverlay';
import Images from '../assets/Images'

const HomeScreen = () => {

    const [loading, setLoading] = useState(false);
    
    return (
      <View style={styles.flex}>
        <SafeAreaView style={styles.flex}>
          {loading && <LoadingOverlay />}
          <View>
            <Text>Home Screen</Text>
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
});

export default HomeScreen;
