import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import CategoriesC from "../components/Categories";
import Face from "../components/Categories2";
import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import CategoriesCF from "../components/FaceCat";
import CategoriesCF3 from "../components/FaceCat3";
import Bodyy from "../components/Categories3";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../authConfig";
import { selectBasketItems } from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import AllProducts from "../config/AllProducts";
import { useState } from "react";
const Body = () => {
  const { user } = useAuth();
  const [searchKey, setSearchKey] = useState("");
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const handleSerach = async () => {
    const newProducts=AllProducts.filter((val)=>{
      return val.name.toUpperCase().includes(searchKey.toUpperCase())
    })
    console.log(newProducts)
    navigation.navigate("Search", { newProducts });
  };
  const item = {
    id: 12,
    name: "Full Body Gyl",
    image: require("../assets/beauty/f1.jpg"),
    price: 38,
    description:
      "Introducing our Radiant Glow Serum, your secret weapon for achieving a luminous and flawless complexion. This luxurious serum is meticulously crafted to transform your skin, leaving it looking and feeling its absolute best.",
    categoryId: 2,
    rating: "4.5",
  };
  return (
    <SafeAreaView style={tw`mt-[40px] px-2`}>
      <ScrollView>
        <View style={tw`flex-row justify-between items-center px-2 mt-[50px]`}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Text
              style={tw`text-center font-semibold  bg-black mx-2 text-[30px] border 
                  py-2 px-4 text-red-500 rounded-full`}
            >
              {user ? `${user?.email?.substring(0, 1)}` : ""}
            </Text>
          </TouchableOpacity>
          <Text style={tw`text-[24px]`}>Body Products</Text>
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
        <CategoriesCF3 />
        <View>
          <Bodyy />
        </View>
        <View>
          <Text style={tw`text-[27px] `}>Recomended</Text>
          <View style={tw`flex-row`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { item })}
              style={tw`my-4 flex-row items-center bg-white p-2 rounded-[20px]`}
            >
              <Image
                source={require("../assets/beauty/f1.jpg")}
                style={tw`w-[200px] h-[150px]`}
              />
              <View>
                <Text style={tw`ml-2 text-[20px]`}>Special Package</Text>
                <Text style={tw`pl-[70px] text-[20px]`}>X</Text>
              </View>
              <Text style={tw`ml-2 text-[15px]`}>$38</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Body;
