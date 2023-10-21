import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";

export default function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  //console.log(basketTotal);

  return (
    
    <View style={tw`absolute -bottom-0 mt-10 mb-3  w-full  z-50`}>
      <TouchableOpacity
        onPress={() => {navigation.navigate("Cart")}}
        style={tw`mx-5 bg-[#00CCBB] p-4 rounded-lg  flex-row w-full`}
      >
        <Text style={tw`text-white font-extrabold text-lg bg-[#01A296] py-1 px-2`}>
          {items.length}
        </Text>
        <Text style={tw`flex-1 text-white font-extrabold text-lg text-center`}>
          View Basket
        </Text>
        <Text style={tw`text-ld text-white font-extrabold text-[20px] `}>
          ${basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
    
  );
}