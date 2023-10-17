import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import PayPal from "../components/Paypal";
const Payment = () => {
    const navigation=useNavigation()
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/beauty/he2.jpg")}
        style={tw`w-full h-full`}
      >
      <View style={tw`mt-[50px]`}>
        <Image
          source={require("../assets/sam2.png")}
          style={tw`w-[200px] h-[200px] mx-auto`}
        />
        <Text style={tw`text-center text-[30px] `}>Payment Method</Text>
        <Text style={tw`text-center text-[20px] my-3`}>
          Select Payment Method
        </Text>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("Paypal")}>
          <View style={tw` mx-4 border p-2 rounded-[10px]`}>
            <Image
              source={require("../assets/download.png")}
              style={tw`w-full h-[100px] mx-4 rounded-[10px]`}
            />
          </View>
        </TouchableOpacity> */}
        <PayPal/>
        <TouchableOpacity onPress={()=>navigation.navigate("Order")}>
          <Text
            style={tw`mx-4 text-[30px] border px-[30px] py-4 mt-4 italic text-center rounded-[10px] `}
          >
            Pay on Delivery
          </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Payment;
