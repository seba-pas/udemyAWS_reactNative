import React from 'react'
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TextInput,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../modal/colors';



const Header = () => {
  return (
    <View
        style={{
          padding: 10,
          alignItems: "center",
          backgroundColor: colors.primary,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: colors.white,
            padding: 10,
            margin: 12,
            borderRadius: 5,
          }}
        >
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="Search in rent.com"
            multiline={false}
            style={{ width: "100%", marginLeft: 5 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "95%",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="location-on" size={24} color="black" style={{marginLeft: 2}}/>
            <Text>Location</Text>
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>New York</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
          <Ionicons name="options" size={24} color="black" style={{marginTop: -3, marginLeft: 2}}/>
            <Text>Category</Text>
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Vehicle</Text>
          </View>
        </View>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
})