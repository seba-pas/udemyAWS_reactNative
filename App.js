import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostItems from "./src/components/postItems/PostItems";
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <View>
        <Text>Search by text</Text>
        <Text>Search by location</Text>
        <Text>Search by category</Text>
      </View>
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
  },
});
