import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { useAuth } from "../authConfig";
const Profile = () => {
  const { user } = useAuth();
  return (
    <SafeAreaView style={tw`bg-gray-300 h-full`}>
      <Image source={require("../assets/beauty/f1.jpg")} style={tw`w-full h-[350px]`}/>
      <View style={tw` flex-row items-center justify-center mt-4`}>
      <Text style={tw`text-[50px] border rounded-full py-4 px-7 bg-black text-red-500`}>
        {user ? `${user?.email?.substring(0, 1)}` : ""}</Text>

      </View>
      <View style={tw`items-center mt-4`}>
        <Text style={tw`text-[20px] mb-5`}>{user?.email}</Text>
        {/* <TouchableOpacity>
          <Text style={tw`text-[20px] mb-5`}>Your Orders</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={tw`text-[27px]`}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile