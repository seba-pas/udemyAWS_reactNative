import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostItems from "./src/components/postItems/PostItems";

import colors from "./src/modal/colors";
import Header from "./src/components/headerForMobile/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
     <Header />
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
