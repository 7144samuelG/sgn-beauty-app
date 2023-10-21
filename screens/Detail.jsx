import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemWithId,
} from "../features/basketSlice";
import BasketIcon from "../components/BasketIcon";
import { LinearGradient } from "expo-linear-gradient";
const Detail = () => {
  const navigation = useNavigation();
  const item = useRoute();
  const id = item.params.item.id;
  const name = item.params.item.name;
  const image = item.params.item.image;
  const description = item.params.item.description;
  const price = item.params.item.price;
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <SafeAreaView style={tw`relative h-full `}>
      <LinearGradient
        colors={["pink", "white", "white"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={tw` h-full px-6`}
      >
        <BasketIcon />
        <View >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              name="left"
              size={30}
              color="black"
              style={tw`absolute top-[50px] border rounded-full z-99999 left-5`}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={item.params.item.image}
          style={tw`w-full mx-auto h-1/2 mt-[50px] rounded-[20px]`}
        />
        <Text style={tw`text-black mt-2 text-[24px]`}>
          {item.params.item.name} product
        </Text>
        <Text style={tw`text-gray-500 mt-1 text-[24px]`}>
          sgn manufactures
        </Text>
        <View style={tw`flex-row py-3 items-center`}>
          <AntDesign name="staro" size={24} color="black" style={tw`pr-3`} />
          <Text style={tw`text-gray-600 text-[24px] pr-3`}>
            {item.params.item.rating}
          </Text>
        </View>
        <Text style={tw`text-[16px] pt-4 leading-8`}>
          {item.params.item.description.slice(0,150)}
        </Text>
        <View style={tw`flex-row justify-between pr-3`}>
          <Text style={tw`text-[20px] text-black pl-1 pt-4`}>
            ${item.params.item.price}
          </Text>
          <View style={tw`flex-row mt-3`}>
            <TouchableOpacity onPress={addItemToBasket}>
              <Text style={tw`text-[23px] p-2 border rounded-md`}>+</Text>
            </TouchableOpacity>
            <Text style={tw`text-[23px] p-2`}>{items.length}</Text>
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <Text style={tw`text-[23px] p-2 border rounded-md`}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Detail;
