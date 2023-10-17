import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";


import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";
const Cart=()=> {
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  const [groupItemsInBucket, setGroupItemsInBucket] = useState([]);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupItemsInBucket(groupItems);
  }, [items]);
console.log(items)
  return (
    <SafeAreaView style={tw`flex-1 bg-white mt-10`}>
      <View style={tw`flex-1 bg-gray-100 mt-[10px]`}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-xs`}>
          <View>
            <Text style={tw`text-lg text-[23px] font-bold text-center`}>Cart</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}
          >
            <AntDesign name="closecircleo" size={24} color="#00CCBB" height={50} width={50} />
           
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center space-x-4 px-4 py-3 bg-white my-5`}>
          <Image
            source={{
              uri: "https://www.pngitem.com/pimgs/m/533-5338534_motor-21-philosophychicchic-home-delivery-service-bike-hd.png",
            }}
            style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          />
          <Text style={tw`flex-1 text-[17px]`}>Delivery will be less than a week depending on location</Text>
          {/* <TouchableOpacity>
            <Text style={tw`text-[#00CCBB]`}>Change</Text>
          </TouchableOpacity> */}
        </View>
        <ScrollView style={tw`divide-y divide-gray-200`}>
          {Object.entries(groupItemsInBucket).map(([key, items]) => (
            <View
              key={key}
              style={tw`flex-row items-center  bg-white py-2 px-5`}
            >
              <Text style={tw`text-[#00CCBB] pr-3`}>{items.length} x</Text>
              <Image
                source={items[0]?.image}
                style={tw`h-12 w-12 rounded-full pr-3`}
              />
              <Text style={tw`flex-1`}>{items[0]?.name}</Text>
              <Text style={tw`text-gray-600`}>
                ${items[0]?.price}
              </Text>
              <TouchableOpacity>
                <Text
                  style={tw`text-[#00CCBB] text-xs ml-2`}
                  onPress={() => dispatch(removeFromBasket( items[0]?.id))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={tw`p-5 bg-white mt-5 space-y-4`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-400`}>SubTotal</Text>
            <Text style={tw`text-gray-400`}>
              {basketTotal} 
            </Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-400`}>Delivery Fee</Text>
            <Text style={tw`text-gray-400`}>
              {2.00}
            </Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text>Order Total</Text>
            <Text style={tw`font-extrabold`}>
              ${basketTotal + 2}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {navigation.navigate("CheckOut")}}
            style={tw`rounded-lg bg-[#00CCBB] p-4`}
          >
            <Text style={tw`text-center text-white text-lg font-bold`}>
              Shipping Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Cart