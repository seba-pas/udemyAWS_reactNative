import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import colors from "./src/modal/colors";
import Router from "./src/navigation/Router";
import "react-native-gesture-handler";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <StatusBar style="auto" backgroundColor={colors.primary} />
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
