import { View, Text, FlatList, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import featured from "./Featured2";
import { useNavigation } from "@react-navigation/native";
const FeaturedCoffee = () => {
  const [data1, setData] = useState(featured);
  const navigation = useNavigation();
  return (
    <FlatList
      horizontal={true}
      data={data1}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>navigation.navigate("Detail",{item})}>
          <View style={tw`flex-row flex-wrap pr-3 justify-between `}>
            <View style={tw`rounded-md`}>
              <Image source={item.image} style={tw`w-[200px] h-[200px] rounded-md`} />
              <Text style={tw`text-bold text-[28px]`}>{item.name}</Text>
              <Text style={tw`text-bold text-[18px] text-gray-400`}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default FeaturedCoffee;
