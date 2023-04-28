import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";
import colors from "../../modal/colors";

const PostItems = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' backgroundColor={colors.primary} />
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
  );
};

export default PostItems;
