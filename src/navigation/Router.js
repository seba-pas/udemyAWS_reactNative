import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Index";
import PostDetails from "../screens/postDetails/PostDetails";
import colors from "../modal/colors";
import BottomTabNavigator from "./bottomTabNavigator";
import SelectPhotosScreen from "../screens/selectPhotos";
import SelectCategoryScreen from "../screens/selectCategory";
import SelectLocationScreen from "../screens/selectLocation";

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="SelectPhotos" component={SelectPhotosScreen} />
        <Stack.Screen name="SelectCategory" component={SelectCategoryScreen}/>
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
