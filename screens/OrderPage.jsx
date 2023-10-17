import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
  removeALL
} from "../features/basketSlice";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const OrderPage = () => {
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  const [groupItemsInBucket, setGroupItemsInBucket] = useState([]);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupItemsInBucket(groupItems);
  }, [items]);
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    };

    getLocation();
  }, []);

  const num1 = Number(data1);
  const num2 = Number(data2);
  const num3 = Number(data3);
  const getUseerData = async () => {
    try {
      const userData1 = await JSON.parse(
        await AsyncStorage.getItem("latitude")
      );
      const userData2 = await JSON.parse(
        await AsyncStorage.getItem("longitude")
      );
      const userData3 = await JSON.parse(await AsyncStorage.getItem("phoneNo"));
      setLoading(false);
      // const userData = await AsyncStorage.multiGet(["userPersonData"]);
      console.log(userData1, userData2, userData3);
      setData1(userData1);
      setData2(userData2);
      setData3(userData3);
    } catch (err) {}
  };
  getUseerData();
  const confirmOrder=()=>{
    dispatch(removeALL())
    navigation.navigate("Confirm")
  }
  return (
    <SafeAreaView style={tw`flex-1 bg-white mt-10`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-xs`}>
          <View>
            <Text style={tw`text-lg text-[23px] font-bold text-center`}>
              Confirm Order
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}
          >
            <AntDesign
              name="closecircleo"
              size={24}
              color="#00CCBB"
              height={50}
              width={50}
            />
          </TouchableOpacity>
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
              <Text style={tw`text-gray-600`}>${items[0]?.price}</Text>
              {/* <TouchableOpacity>
                <Text
                  style={tw`text-[#00CCBB] text-xs ml-2`}
                  onPress={() => dispatch(removeFromBasket(items[0]?.id))}
                >
                  Cancel
                </Text>
              </TouchableOpacity> */}
            </View>
          ))}
          <View style={tw`mt-3`}>
            <Text style={tw`text-[20px]`}>Shipping Details</Text>
            {loading ? <Text style={tw`text-red-500`}>few seconds while verifying shipping details....</Text> : <Text></Text>}
            <Text style={tw`mt-3`}>Latitude:{data1}</Text>
            <Text style={tw`mt-3`}>longitude:{data2}</Text>
            <Text style={tw`mt-3`}>Phone Number:{data3}</Text>
          </View>
          <View style={tw`mt-5`}>
            {initialRegion && (
              <MapView
                style={tw`w-full h-[350px]`}
                initialRegion={initialRegion}
              >
                {currentLocation && (
                  <Marker
                    coordinate={{
                      latitude: currentLocation.latitude,
                      longitude: currentLocation.longitude,
                    }}
                    title="Your Location"
                  />
                )}
              </MapView>
            )}
            {/* Rest of your code */}
          </View>
          {/* <View style={tw`mt-5`}>
            <MapView
              style={tw`w-full h-[350px]`}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View> */}
        </ScrollView>

        <View style={tw`p-5 bg-white mt-5 space-y-4`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-400`}>SubTotal</Text>
            <Text style={tw`text-gray-400`}>{basketTotal}</Text>
          </View>

          <View style={tw`flex-row justify-between`}>
            <Text>Order Total</Text>
            <Text style={tw`font-extrabold`}>${basketTotal + 2}</Text>
          </View>
          <TouchableOpacity
            style={tw`rounded-lg bg-[#00CCBB] p-4`}
            onPress={confirmOrder}
          >
            <Text style={tw`text-center text-white text-lg font-bold`}>
              Order Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
