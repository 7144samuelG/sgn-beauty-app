import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../authConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Welcome1 = () => {
  const navigation = useNavigation();

  const { user } = useAuth();
  const checkUser= () => {
   if(user){
    navigation.navigate("Home")
   }
  navigation.navigate("Register")
    
  };

  return (
    <SafeAreaView style={tw`bg-white h-full w-full pb-[30px]`}>
      <View style={tw` pl-5`}>
        {/* // <Text style={tw`text-[45px] mt-[60px] ml-[20px] font-serif italic`}>
        //   SGN
        // </Text>
        // <Text style={tw`text-[45px]  ml-[20px] font-serif italic`}>
        //   Beauty Skins
        // </Text> */}
        <Image
          source={require("../assets/sam.png")}
          style={tw`w-[200px] h-[250px]`}
        />
      </View>
      <View style={tw`w-full`}>
        <Image
          source={require("../assets/beauty/t2.jpg")}
          style={tw`w-[300px] mx-auto h-[350px] rounded-[120px]`}
        />
      </View>
      <View>
        <Text style={tw`text-[20px] w-[90%] mx-auto mt-5`}>
          Explore an urivaled selection of makeup,skincare,hair and more from
          classic and emerging brands
        </Text>
      </View>
      {/* <ImageBackground source={require("../assets/beauty/t2.jpg")} style={tw`w-full h-full`}/> */}
      <View>
        <TouchableOpacity onPress={checkUser}>
          <Text
            style={tw`bg-blue-300 w-[150px] py-5 mx-auto px-3 text-center text-[20px] text-white rounded-[90px] mt-8`}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome1;
