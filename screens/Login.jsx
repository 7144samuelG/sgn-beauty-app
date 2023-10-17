import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import auth from "../firebaseconfig";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { useAuth } from "../authConfig";
const Login = () => {
  const authRegister = auth;
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  const [getEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const signIn = async () => {
    if (getEmail === "" || password === "") {
      setMessage("invalid credentials");
      return;
    }

    try {
      await signInWithEmailAndPassword(authRegister, getEmail, password)
        .then((user) => {
          const userL = JSON.stringify(user);
          AsyncStorage.setItem("loggedUser", { userL });
          console.log(user);
          if (user) navigation.navigate("Home");
        })
        .catch((err) => {
          if (err) {
            setMessage("check your credentials and login again ...");
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
        source={require("../assets/beauty/c5.jpg")}
        style={tw`w-full h-full`}
      >
        <View style={tw`mt-[10px]`}>
          <View style={tw`mt-[1px]  justify-between items-center`}>
            <Image
              source={require("../assets/sam2.png")}
              style={tw`w-[200px] h-[200px]`}
            />
          </View>
          <View style={tw`justify-between items-center text-[40px] mt-[50px]`}>
            <Text style={tw`text-[27px] items-center text-white font-bold`}>
              𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝒷𝒶𝒸𝓀
            </Text>
            <Text style={tw`text-[27px] items-center text-white font-bold`}>
              𝐸𝓃𝓉𝑒𝓇 𝓎𝑜𝓊𝓇 𝑒𝓂𝒶𝒾𝓁 𝒶𝒹𝒹𝓇𝑒𝓈𝓈 𝒶𝓃𝒹 𝓅𝒶𝓈𝓈𝓌𝑜𝓇𝒹 𝓉𝑜 𝒸𝑜𝓃𝓉𝒾𝓃𝓊𝑒
            </Text>
          </View>
          <View style={tw`mx-6`}>
            <View style={tw`mt-4`}>
              
                <TextInput
                  placeholder="Email"
                  onChangeText={(text) => setEmail(text)}
                  value={getEmail}
                  required
                  placeholderTextColor={"red"}
                  style={tw`bg-transparent py-6 text-white rounded-[10px]`}
                />
              
            </View>
          </View>
          <View style={tw`mx-6`}>
            <View style={tw`mt-4`}>
              
                <TextInput
                  placeholderTextColor={"red"}
                  placeholder="password"
                  value={password}
                  secureTextEntry={isPasswordShown}
                  required
                  onChangeText={(text) => setPassword(text)}
                  style={tw`bg-transparent py-6 text-white rounded-[10px]`}
                />
              
            </View>
          </View>
          <View>
            {/* <Text style={tw`mx-6 text-[27px] mt-3 text-white italic`}>
      𝙱𝚢 𝚌𝚕𝚒𝚌𝚔𝚒𝚗𝚐 𝚝𝚑𝚎 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛 𝚋𝚞𝚝𝚝𝚘𝚗 𝚢𝚘𝚞 𝚊𝚐𝚛𝚎𝚎 𝚝𝚑𝚎 𝚝𝚎𝚛𝚖𝚜 𝚊𝚗𝚍 𝚌𝚘𝚗𝚍𝚒𝚝𝚒𝚘𝚗𝚜
        </Text> */}
          </View>
          <TouchableOpacity onPress={signIn}>
            <Text
              style={tw`text-[25px] mt-[30px] text-white text-center border py-4 
              bg-blue-500 mx-3 rounded-[20px]`}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View style={tw`flex-row items-center mx-6 mt-3`}>
            <Text style={tw` text-[25px]  text-orange-500 mt-[30px] mr-3`}>
              <Text style={tw`text-black ml-2 text-white italic`}>
                {" "}
                𝘰𝘳 don&#39;t 𝘩𝘢𝘷𝘦 𝘢𝘯 𝘢𝘤𝘤𝘰𝘶𝘯𝘵
              </Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={tw`text-[25px] text-orange-500 mt-[30px]`}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={tw`text-[20px] text-red-500 text-center mt-2 mx-6`}>
            {message}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});