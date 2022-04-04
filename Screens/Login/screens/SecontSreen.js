import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ButtonComponent from '../../../components/Button';
import {LOGINSAGA, SETMOBILE} from '../../../redux/constants/index.js';
import tw from 'twrnc';
import {connect} from 'react-redux';
const SecondScreen = ({navigation, onsubmit, onlog}) => {
  const [mobileno, setMobileNo] = useState();
  const onSubmit = () => {
    console.log(mobileno);
    // onsubmit(mobileno);

    if (mobileno.length === 10) {
      navigation.navigate('Otpscreen', {mobile: mobileno});
    }
  };
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text, styles.title]}>Registration</Text>
      <Text style={[styles.text, styles.p]}>
        Enter your mobile number,we will send you OTP.
      </Text>
      <View>
        <Text style={[styles.text, styles.p, tw`font-bold`]}>
          Enter your mobile number
        </Text>
        <View style={[styles.text, styles.inputwrapper]}>
          <Text style={[styles.text, tw`text-2xl`]}>+91 </Text>
          <TextInput
            style={{paddingLeft: 10, width: '50%', fontSize: 25, marginTop: -2}}
            maxLength={10}
            keyboardType="number-pad"
            defaultValue={mobileno}
            onChangeText={text => setMobileNo(text)}
            ref={ref}
          />
        </View>
        <View style={tw`mt-[320px]`}>
          <ButtonComponent title="start using" onclick={onSubmit} />
          <Text style={tw`mt-4 text-center font-bold`}>
            powered by DAT BANK.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20,
    backgroundColor: '#F7F9FC',
    height: '100%',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
  },
  p: {
    fontSize: 15,
    fontWeight: '600',
    width: '70%',
    marginTop: 20,
  },
  inputwrapper: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#470000',
    shadowOpacity: 0.2,
    elevation: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const mapdispatchToProps = dispatch => {
  return {
    onsubmit: mobile => dispatch({type: SETMOBILE, payload: {mobile}}),
  };
};
export default connect(null, mapdispatchToProps)(SecondScreen);
