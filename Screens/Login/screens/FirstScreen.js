import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import LoginSvg from '../../../assets/svg/loginSvg.svg';
import ButtonComponent from '../../../components/Button';
export default function FirstScreen({navigation}) {
  const onclick = () => {
    navigation.navigate('second');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/png/logo.png')} />
      <View style={styles.svg}>
        <LoginSvg height={800} />
      </View>

      <View>
        <Text style={styles.h1}>Let's get started</Text>
        <Text style={styles.p}>Sign in with your mobile number</Text>
      </View>
      <View style={{width: '100%', marginTop: 40}}>
        <ButtonComponent title="go to next" onclick={() => onclick()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,

    alignItems: 'center',
  },
  p: {fontSize: 14, fontWeight: 'bold', fontFamily: 'Poppins-Regular'},
  h1: {
    fontWeight: '800',
    fontSize: 30,
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  svg: {
    justifyContent: 'center',
    padding: 12,
    height: windowHeight * 0.5,
    width: windowWidth,
  },
});
