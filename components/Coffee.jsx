import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import cof from "./Cof";
const Coffee = () => {
  const [data1, setData] = useState(cof);
  const navigation = useNavigation();
  return (
    <FlatList
      horizontal={true}
      data={data1}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail", { item })}
        >
          <View style={tw`flex-row flex-wrap pr-3 justify-between `}>
            <View style={tw`rounded-md`}>
              <Image
                source={item.image}
                style={tw`w-[200px] h-[200px] rounded-md`}
              />
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-bold text-[28px]`}>{item.name}</Text>
                <Text style={tw`text-bold text-[18px] text-gray-400`}>
                  ${item.price}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Coffee;
