import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import auth from "../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../authConfig";
import { useEffect } from "react";
const Register = () => {
  const [getEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const authRegister = auth;
  const navigation = useNavigation();
  const { user } = useAuth();
  const checkuser = () => {
    if (user) {
      navigation.navigate("Home");
    }
  };
  

  const signIn = async () => {
   
    if (getEmail === "" || password === "") {
      setMessage("invalid credentials");
      return;
    }

    try {
      await createUserWithEmailAndPassword(authRegister, getEmail, password)
        .then((userr) => {
          //AsyncStorage.setItem("loggedUser",{user})
          // console.log('hj',user)
          if (userr) navigation.navigate("Home");
        })
        .catch((err) => {
          if (err) {
            setMessage("check your credentials again ...");
            return;
          }
        });
    } catch (err) {
      setMessage(err);
      return;
    }
  };

  return (
    <View>
      <ImageBackground
        source={require("../assets/beauty/he2.jpg")}
        style={tw`w-full h-full`}
      >
        <View style={tw`mt-[10px]`}>
          <View style={tw`mt-[50px]  justify-between items-center`}>
            <Image
              source={require("../assets/sam2.png")}
              style={tw`w-[200px] h-[200px]`}
            />
          </View>
          <View style={tw`justify-between items-center text-[40px]`}>
            <Text style={tw`text-[27px] text-black items-center font-bold`}>
              𝒞𝓇𝑒𝒶𝓉𝑒 𝒶𝓃 𝒶𝒸𝒸𝑜𝓊𝓃𝓉 𝓉𝑜 𝒸𝑜𝓃𝓉𝒾𝓃𝓊𝑒
            </Text>
          </View>
          <View style={tw`mx-6`}>
            <View style={tw`mt-4`}>
              <TextInput
                placeholder="Email"
                value={getEmail}
                required
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor={"red"}
                style={tw`bg-transparent  py-6 rounded-[10px] active:border`}
              />
            </View>
          </View>
          <View style={tw`mx-6`}>
            <View style={tw`mt-4`}>
              <TextInput
                placeholder="password"
                value={password}
                required
                placeholderTextColor={"red"}
                onChangeText={(text) => setPassword(text)}
                style={tw`bg-transparent py-6 rounded-[10px]`}
              />
            </View>
          </View>

          <View>
            <Text style={tw`text-black mx-6 mt-2 text-[24px]`}>
              Keep me logged in
            </Text>
            <Text style={tw`mx-6 text-[27px] mt-3  italic`}>
              𝙱𝚢 𝚌𝚕𝚒𝚌𝚔𝚒𝚗𝚐 𝚝𝚑𝚎 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛 𝚋𝚞𝚝𝚝𝚘𝚗 𝚢𝚘𝚞 𝚊𝚐𝚛𝚎𝚎 𝚝𝚑𝚎 𝚝𝚎𝚛𝚖𝚜 𝚊𝚗𝚍 𝚌𝚘𝚗𝚍𝚒𝚝𝚒𝚘𝚗𝚜
            </Text>
          </View>
          <TouchableOpacity onPress={signIn}>
            <Text
              style={tw`text-[25px] text-white text-center border py-4 
              bg-blue-500 mx-3 rounded-[20px]`}
            >
              Register
            </Text>
          </TouchableOpacity>
          <View style={tw`flex-row items-center mx-6`}>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
              <Text style={tw`text-[25px] text-white`}>Register</Text>
            </TouchableOpacity> */}
            <Text style={tw` text-[25px]  text-orange-500 mr-3`}>
              <Text style={tw`text-black ml-2 italic`}>
                {" "}
                𝘰𝘳 already 𝘩𝘢𝘷𝘦 𝘢𝘯 𝘢𝘤𝘤𝘰𝘶𝘯𝘵
              </Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={tw`text-[25px] text-orange-500`}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={tw` text-[25px]  text-red-500 text-center mx-6 mt-2`}>
            {message}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
