import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
const SearchItem = ({item}) => {
  const coffee=item
    const navigation=useNavigation()
  return (
    <View>
      <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { item })}
       style={tw`flex flex-row justify-between mb-3 items-center bg-white p-4 rounded-[10px]`}>
      
        <View >
            <Image source={item.image} style={tw`w-[100px] h-[100px]`}/>
        </View>
        <View style={tw`flex-1 flex flex-row justify-end`}>
            <Text style={tw` pr-3`}>{item.name} </Text>
            <Text >{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchItem

