import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Index";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../modal/colors";
import PostDetails from "../screens/postDetails/PostDetails";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore" 
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="home" size={25} color={colors.secondary} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Listing"
        component={PostDetails}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="home" size={25} color={colors.secondary} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="home" size={25} color={colors.secondary} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="home" size={25} color={colors.secondary} />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
