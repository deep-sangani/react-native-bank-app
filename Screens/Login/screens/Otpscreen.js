import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import tw from 'twrnc';
import ButtonComponent from '../../../components/Button';
import {connect} from 'react-redux';
import login from '../../../sdk/login';

const Otpscreen = ({navigation, route}) => {
  const [focus, setfocus] = useState(1);
  const [otp1, setotp1] = useState();
  const [otp2, setotp2] = useState();
  const [otp3, setotp3] = useState();
  const [otp4, setotp4] = useState();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const onSubmit = async () => {
    if (otp1 && otp2 && otp3 && otp4) {
      const otp = +(otp1 + otp2 + otp3 + otp4);

      if (otp === 1234) {
        const {mobile} = route.params;
        console.log({mobile, otp});
        try {
          const data = await login({mobile, otp});
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        // navigation.navigate('Home');
      }
    }
  };

  useEffect(() => {
    ref1.current.focus();
  }, []);

  return (
    <KeyboardAvoidingView
      style={[tw`p-4 bg-[#F7F9FC] `, styles.container]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={tw`text-2xl font-600 text-black`}>Verification</Text>
      <Text>Enter 4 digit code we send to </Text>
      <View style={tw`mt-16 flex flex-row justify-between items-center`}>
        {/* 1 */}
        <View
          style={[
            tw`text-2xl font-600 text-black w-16 flex justify-center items-center bg-white ${
              focus == 1 && 'bg-[#3774CE] '
            }`,
            styles.input,
          ]}>
          <TextInput
            maxLength={1}
            style={tw`text-[30px] font-700 text-black ${
              focus == 1 && 'text-white'
            } `}
            caretHidden={true}
            value={otp1}
            ref={ref1}
            onChangeText={text => {
              setotp1(text);
              if (text) {
                setfocus(2);
                ref2.current.focus();
              }
            }}
            keyboardType="numeric"
            onFocus={() => {
              setfocus(1);
            }}
          />
        </View>
        {/* 2 */}
        <View
          style={[
            tw`text-2xl font-600 text-black w-16 flex justify-center items-center bg-white ${
              focus == 2 && 'bg-[#3774CE]'
            }`,
            styles.input,
          ]}>
          <TextInput
            maxLength={1}
            style={tw`text-[30px] font-700 text-black  ${
              focus == 2 && 'text-white'
            }`}
            caretHidden={true}
            value={otp2}
            ref={ref2}
            onChangeText={text => {
              setotp2(text);
              if (text) {
                setfocus(3);
                ref3.current.focus();
              } else {
                setfocus(1);
                ref1.current.focus();
              }
            }}
            keyboardType="numeric"
            onFocus={() => {
              setfocus(2);
            }}
          />
        </View>
        {/* 3 */}
        <View
          style={[
            tw`text-2xl font-600 text-black w-16 flex justify-center items-center bg-white ${
              focus == 3 && 'bg-[#3774CE]'
            }`,
            styles.input,
          ]}>
          <TextInput
            maxLength={1}
            style={tw`text-[30px] font-700 ${
              focus == 3 ? 'text-white' : 'text-black'
            } `}
            caretHidden={true}
            ref={ref3}
            value={otp3}
            onChangeText={text => {
              setotp3(text);
              console.log({text});
              if (text) {
                setfocus(4);
                ref4.current.focus();
              } else {
                setfocus(2);
                ref2.current.focus();
              }
            }}
            keyboardType="numeric"
            onFocus={() => {
              setfocus(3);
            }}
          />
        </View>
        {/* 4 */}
        <View
          style={[
            tw`text-2xl font-600 text-black w-16 flex justify-center items-center bg-white ${
              focus == 4 && 'bg-[#3774CE]'
            }`,
            styles.input,
          ]}>
          <TextInput
            maxLength={1}
            style={tw`text-[30px] font-700  ${
              focus == 4 ? 'text-white' : 'text-black'
            }`}
            caretHidden={true}
            ref={ref4}
            value={otp4}
            onChangeText={text => {
              setotp4(text);
              if (!text) {
                setfocus(3);
                ref3.current.focus();
              }
            }}
            keyboardType="numeric"
            onFocus={() => {
              setfocus(4);
            }}
          />
        </View>
      </View>
      <View style={tw`absolute bottom-8 w-full left-4`}>
        <ButtonComponent title="Start using" onclick={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    shadowColor: '#470000',
    shadowOpacity: 0.4,
    elevation: 4,
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
});

const mapstateToProps = state => {
  return {
    user: state.user,
    auth: state.auth,
  };
};

const mapdispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(),
  };
};

export default connect(null, null)(Otpscreen);
