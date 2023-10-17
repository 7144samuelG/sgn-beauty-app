import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
  CardField,
  StripeProvider,
  useStripe,
} from "@stripe/stripe-react-native";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
const CheckOut = () => {
  const [lat,setLat]=useState("");
  const [log,setLog]=useState("");
  const [phone,setPhone]=useState("");
  const[message,setMessage]=useState("")
  const navigation=useNavigation()
  const paymentNav=async()=>{
    if(lat===""||log===""||phone===""){
      setMessage("enter correct shipping details")
      return
    }
    try{
      const lat1=JSON.stringify(lat)
      const log1=JSON.stringify(log)
      const phone1=JSON.stringify(phone)
      // const location1={
      //   latitude:lat1,
      //   longitude:log1,
      //   phonenumber:phone1
      // }
      //const userPersonData=["details",JSON.stringify(location1)]
      await AsyncStorage.setItem("latitude",(lat1))
      await AsyncStorage.setItem("longitude",(log1))
      await AsyncStorage.setItem("phoneNo",(phone1))
     // await AsyncStorage.multiSet([userPersonData]);
      navigation.navigate("Payment")
    }catch(err){
      setMessage(err)
      console.log(err)
    }
  }
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["pink", "white", "white"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={tw` h-full`}
      >
      <View style={tw`mt-[50px] mx-3`}>
        <Image
          source={require("../assets/sam.png")}
          style={tw`w-[200px] h-[200px] mx-auto`}
        />
        <Text style={tw`text-center text-[30px]`}>Shipping details</Text>
        <View style={tw`border rounded-[20px] mt-[30px]`}>
          <TextInput placeholder="latitude"
          keyboardType="numeric"
          value={lat} required onChangeText={setLat} style={tw`p-3`} />
        </View>
        <View style={tw`border rounded-[20px] mt-[30px]`}>
          <TextInput placeholder="longitude"
          keyboardType="numeric"
           value={log} required onChangeText={setLog} style={tw`p-3`} />
        </View>
        <View style={tw`border rounded-[20px] mt-[30px]`}>
          <TextInput placeholder="phone number"
          keyboardType="numeric"
           value={phone} required onChangeText={setPhone} style={tw`p-3`} />
        </View>
        <TouchableOpacity onPress={paymentNav} >
          <Text
            style={tw`bg-blue-300 w-[200px] py-5 mx-auto pl-8 text-[20px] text-white rounded-[90px] mt-8`}
          >
            Payment Details 
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={tw`text-center text-red-500 mt-5`} >{message}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CheckOut;
