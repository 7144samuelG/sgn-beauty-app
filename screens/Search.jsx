import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useAuth } from "../authConfig";
import { useNavigation, useRoute } from "@react-navigation/native";
import products from "../config/AllProducts";
import SearchItem from "../components/SearchItem";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../features/basketSlice";
const Search = ({hh}) => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const items = useSelector(selectBasketItems);
  const searchKey = useRoute();

  const key = searchKey.params.newProducts;
  console.log("kk",key)

  const [searchResult, setSearchResult] = useState([])

  console.log("search", searchResult);
  const handleSearch = async () => {}
  return (
    <SafeAreaView style={tw`mt-[40px]`}>
      <ScrollView>
      <View style={tw`flex-row justify-between items-center px-2 mt-[50px]`}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Text
              style={tw`text-center font-semibold text-white bg-black mx-2 text-[30px] border 
                  py-2 px-4 text-red-500 rounded-full`}
            >
              {user ? `${user?.email?.substring(0, 1)}` : ""}
            </Text>
          </TouchableOpacity>
          <Text style={tw`text-[24px]`}>search</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={tw`relative`}
          >
            <Text style={tw`absolute -top-2 right-0`}>{items.length}</Text>
            <EvilIcons name="cart" size={34} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={tw`my-4 border-b w-full`} />

        <View>
          {key.length === 0 ? (
            <View style={{ flex: 1 }}>
              <Image
                source={require("../assets/Pose23.png")}
                style={tw`w-full h-[400px]`}
              />
              <Text style={tw`text-center text-red-500`}>
                sorry we could not find what you are looking for ..
              </Text>
            </View>
          ) : (
            <FlatList
              data={key}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <SearchItem item={item} />}
              style={{ marginHorizontal: 12 }}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
