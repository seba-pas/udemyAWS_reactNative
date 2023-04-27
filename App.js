import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <View style={styles.container}>
        <StatusBar style="auto" backgroundColor="#fec85c" />
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://fastly.picsum.photos/id/979/200/300.jpg?hmac=VPyKJONiCJZ0uDkMSUYGHAmGqBjjH307k7K8AOmqQSM",
            }}
            style={styles.postImage}
          />
          <View style={styles.postContentWrap}>
            <View>
              <Text style={styles.postTitle}>This is title for rent</Text>
              <Text style={styles.postPlace}>Guatemala</Text>
            </View>
            <Text style={styles.postValue}>$100/Day</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fec85c40",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  postImage: {
    height: 100,
    width: 100,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 20,
    marginVertical: 10,
  },
  postContentWrap: {
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  postValue: {
    color: "#fec85c",
    backgroundColor: "#293241",
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
  },
  postPlace: {
    color: "grey",
  },
  postTitle: {
    fontWeight: "bold",
  },
});
