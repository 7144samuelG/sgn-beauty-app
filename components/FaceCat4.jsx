import {
    View,
    Text,
    FlatList,
    Pressable,
    ScrollView,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import categories from "./Cat";
  import tw from "twrnc";
  import { useNavigation } from "@react-navigation/native";
  const CategoriesCF4 = () => {
    const navigation = useNavigation();
    return (
      <View>
        <ScrollView horizontal={true}>
          <View style={tw`flex-row pr-3 justify-between items-center pl-3`}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text
                style={tw`bg-blue-200 py-4 px-7 mr-2 rounded-[20px] text-[20px]`}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Face")}>
              <Text
                style={tw`bg-blue-200 py-4 px-7 mr-2 rounded-[20px] text-[20px]`}
              >
                Face
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Skin")}>
              <Text
                style={tw` bg-blue-200 py-4 px-7 rounded-[20px] mr-2 text-[20px]`}
              >
                Skin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Body")}>
              <Text
                style={tw`bg-blue-200 py-4 px-7 mr-2 rounded-[20px] text-[20px]`}
              >
                Body
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Hair")}>
              <Text style={tw`bg-black text-white py-4 px-7 rounded-[20px] text-[20px]`}>
                Hair
              </Text>
            </TouchableOpacity>
            {/* <Text style={tw`bg-blue-200 py-4 px-7 rounded-[20px] text-[20px]`}>{item.name}</Text> */}
          </View>
        </ScrollView>
      </View>
      // <FlatList
      //   horizontal={true}
      //   data={categories}
      //   keyExtractor={(item) => item.id}
      //   contentContainerStyle={{ marginVertical: 10 }}
      //   renderItem={({ item }) => (
      //     <Pressable>
  
      //     </Pressable>
      //   )}
      // />
    );
  };
  
  export default CategoriesCF4;
  