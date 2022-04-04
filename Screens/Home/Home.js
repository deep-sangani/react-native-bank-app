import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Logout from '../../assets/svg/Logout.svg';
import tw from 'twrnc';
export default function Home({navigation}) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const onclick = () => {
    navigation.navigate('first');
  };
  return (
    <View style={[styles.container, tw` `]}>
      {/* upper */}
      <TouchableOpacity
        style={tw`absolute right-2 top-2`}
        activeOpacity={0.8}
        onPress={onclick}>
        <Text style={[styles.text, tw`text-white font-700`]}>Log Out</Text>
      </TouchableOpacity>
      <View style={tw`h-[20%] flex flex-row items-center justify-center mt-4`}>
        <View style={tw`p-8`}>
          <Text
            style={[
              tw`text-[35px] text-white font-bold tracking-wide`,
              styles.text,
            ]}>
            ₹ 30000.00
          </Text>
          <Text style={[tw`  text-white`, styles.text]}>Avaialble Balance</Text>
        </View>

        <Image
          style={tw`h-20 w-20 rounded-xl border-4 border-white`}
          source={require('../../assets/images/dp.jpeg')}
        />
      </View>
      {/* niche */}
      <View style={tw`h-[80%] bg-[#F7F9FC] rounded-t-[30px] p-4`}>
        <Text style={[styles.text, tw`font-700 text-xl text-black ml-2`]}>
          Your Transactions
        </Text>
        <ScrollView
          style={[tw` h-90% bg-white mt-8 rounded-xl `, styles.shadow]}>
          {arr.map(obj => {
            return (
              <View
                style={tw`flex flex-row Justify-center items-center w-[100%] border-b border-gray-300 p-4`}>
                <View
                  style={[
                    tw`w-14 h-14 rounded-full bg-[#F6F7F9] p-1 flex justify-center items-center`,
                    styles.shadow,
                  ]}>
                  <Image
                    style={tw`w-6 h-6 rounded-full `}
                    source={require('../../assets/png/Transaction.png')}
                  />
                </View>
                {/* second */}
                <View style={tw`ml-8`}>
                  <Text style={[styles.text, tw`text-black font-700`]}>
                    By cash
                  </Text>
                  <Text style={[styles.text, tw`text-gray-600`]}>
                    23 mar 12:23 pm
                  </Text>
                </View>
                {/* third */}
                <View style={tw`ml-6`}>
                  <Text style={[styles.text, tw`text-black font-700 text-xl`]}>
                    ₹ 30000.00
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'hsla(228, 25%, 31%, 1)',
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
  shadow: {
    shadowColor: '#470000',
    shadowOpacity: 0.5,
    elevation: 2,
  },
});
