import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import CategoriesC from "../components/Categories";
import Coffee from "../components/Coffee";
import FeaturedCoffee from "../components/Featured";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AllProducts from "../config/AllProducts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../authConfig";
import { selectBasketItems } from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
    const data2=AsyncStorage.getItem("loggedUser")
  console.log(data2)
  const [searchKey, setSearchKey] = useState("");
  function getValues() {
    return AllProducts.name.toUpperCase().includes(searchKey.toUpperCase());
  }
  const { user } = useAuth();
  const [searchResults, setSearchResultt] = useState([]);
  const handleSerach = async () => {
    const newProducts=AllProducts.filter((val)=>{
      return val.name.toUpperCase().includes(searchKey.toUpperCase())
    })
    console.log(newProducts)
    navigation.navigate("Search", { newProducts });
  };
//begin from her
  const item = {
    id: 12,
    name: "ColeKosta",
    image: require("../assets/beauty/l1.jpg"),
    price: 27,
    description:
      "Introducing our Radiant Glow Serum, your secret weapon for achieving a luminous and flawless complexion. This luxurious serum is meticulously crafted to transform your skin, leaving it looking and feeling its absolute best.",
    categoryId: 2,
    rating: "4.5",
  };

  return (
    <SafeAreaView style={tw``}>
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
          <Text style={tw`text-[24px]`}>Home</Text>
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
          <Text style={tw`font-bold text-[24px] mb-3`}>
            Find your beauty products
          </Text>
          <View
            style={tw`flex-row justify-center items-center bg-[#DDF0FF] 
        rounded-lg my-[16px] mx-[12px] h-[50px]`}
          >
            <TouchableOpacity>
              <Ionicons
                name="camera-outline"
                style={tw`mx-[10px] text-[#83829A] mt-[12px]`}
                size={22}
              />
            </TouchableOpacity>
            <View style={tw`flex-1 bg-[#DDF0FF] mt-[12px] rounded-lg`}>
              <TextInput
                value={searchKey}
                onChangeText={setSearchKey}
                style={tw`w-full h-full font-bold px-[12px]`}
                placeholder="search"
              />
            </View>
            <View>
              <TouchableOpacity
                style={tw`w-[50px] h-[100%] rounded-lg items-center justify-center bg-yellow-100`}
                onPress={handleSerach}
              >
                <Feather name="search" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={tw`flex-row justify-between bg-white rounded-[30px] mx-3`}>
          <View>
            <Text style={tw`text-[24px] pl-4 pt-[60px]`}>New product for</Text>
            <Text style={tw`text-[24px] pl-4`}>your skin</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { item })}
            >
              <Text
                style={tw`text-[24px] pl-7 mt-5 bg-yellow-700 py-4 rounded-[40px]`}
              >
                Shop Now
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../assets/beauty/l1.jpg")}
            style={tw`w-[200px] h-[200px]`}
          />
        </View>
        <Text style={tw`text-bold text-[30px]`}>Categories</Text>
        <View>
          <CategoriesC />
        </View>
        <View>
          <Text style={tw`text-bold text-[30px] my-5`}>Bestsellers</Text>
          <Coffee />
        </View>
        <View>
          <Text style={tw`text-bold text-[30px] my-5`}>Featured</Text>
          <FeaturedCoffee />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
