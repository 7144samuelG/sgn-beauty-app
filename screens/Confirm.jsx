import { useState } from "react";
import ConfettiCannon from "react-native-confetti-cannon";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  removeALL
} from "../features/basketSlice";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const ConfirmOrdre = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const[state,setSate]=useState(true)
  return (
    <SafeAreaView>
      {state? <ConfettiCannon
            count={200}
            origin={{x: -10, y: 0}} 
          /> 
          : null}
      <View style={tw`flex items-center justify-center h-full`}>
        <Text style={tw`text-center text-green-400`}>
          order confirmed to be delivered as soon as possible...
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={tw`border p-4 text-[20px] rounded-[20px] mt-4 text-white bg-green-500`}>Home screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrdre;
