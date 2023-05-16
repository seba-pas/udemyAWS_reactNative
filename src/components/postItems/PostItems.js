import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity} from "react-native";
import styles from "./styles";
import colors from "../../modal/colors";
import { useNavigation } from "@react-navigation/native";

const PostItems = () => {
  const navigation = useNavigation();

  const handlePress = () => {

    return navigation.navigate('PostDetails')
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={colors.primary} />
      <Pressable onPress={handlePress}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Prueba')}>

            <Text style={styles.postValue}>$100/Day</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </View>
  );
};




export default PostItems;
