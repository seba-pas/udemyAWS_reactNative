import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {StyleSheet} from 'react-native'
import colors from "./src/modal/colors";
import Home from "./src/screens/home/Index";


export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <StatusBar style="auto" backgroundColor={colors.primary} />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
