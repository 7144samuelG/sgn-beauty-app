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
import cof2 from "./Cof2";
import cof3 from "./Body";
import oil from "./Oil";
import hair from "./Hair";
  const Hairr= () => {
    const [data1, setData] = useState(hair);
    const navigation = useNavigation();
    return (
      <FlatList
        horizontal={true}
        data={data1}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginVertical: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { item })} >
            <View style={tw`bg-white py-2 m-2 rounded-[10px] px-2`}
          >
              <View style={tw`rounded-md`}>
                <Image
                  source={item.image}
                  style={tw`w-[250px] h-[350px] rounded-md`}
                />
                <View style={tw`flex-row justify-between items-center`}>
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
  
  export default Hairr;
  