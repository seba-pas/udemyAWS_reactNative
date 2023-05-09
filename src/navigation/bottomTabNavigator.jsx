import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Index";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../modal/colors";
import PostDetails from "../screens/postDetails/PostDetails";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Listing from "../screens/Listing/Listing";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.secondary,
        tabBarStyle: {
            height: 60,
           
        
        },
        tabBarLabelStyle: {
            paddingBottom: 5,
            fontSize: 12
        }
      }}
      sceneContainerStyle={{
        backgroundColor: colors.background,
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="home" size={24} color={colors.secondary} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Listing"
        component={Listing}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons name="clipboard" size={24} color={colors.secondary} />
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
              <Ionicons name="chatbubble" size={24} color={colors.secondary} />
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
              <FontAwesome
                name="user-circle-o"
                size={24}
                color={colors.secondary}
              />
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
