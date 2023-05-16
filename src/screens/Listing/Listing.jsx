import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth, Storage, API, graphqlOperation } from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../modal/colors";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import {v4 as uuidv4} from 'uuid'
import 'react-native-get-random-values'


const Listing = () => {
  const [imageData, setImageData] = useState([]);
  const [category, setCategory] = useState({ catID: 0, catName: "category" });
  const [location, setLocation] = useState({
    locID: 0,
    locName: 'Location',
  });
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [ userID, setUserID] = useState('')

  const route = useRoute();
  const navigation = useNavigation();

  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log(user.attributes.email);
      setUserID(user.attributes.sub)
    })
    .catch((error) => {
      console.log(error);
    });


    const imageAllUrl = []

async function storeToDatabase(){
  imageData && imageData.map(async (e, index)=>{
    const imageUrl = e.uri 
  const response = await fetch(imageUrl)
  const blob = await response.blob()
  const urlParts = imageUrl.split('.')
  const extension = urlParts[urlParts.length - 1]
  const key = `${uuidv4()}.${extension}`
  imageAllUrl.push({imageUri: key})
  await Storage.put(key, blob)
if(imageData.length == index + 1){
  const postData= {
    title: title,
    categoryName: category.catName,
    categoryID: category.catID,
    description: description,
    images: JSON.stringify(imageAllUrl),
    locationID: location.locID,
    locationName: location.locName,
    userID: userID,
    commonID: '1'
  }
  await API.graphql(graphqlOperation(), createListing, {input: postData})
}
  })
}


  useEffect(() => {
    if (!route.params) {
      console.log("There are no params to show");
    } else {
      if (route?.params?.imageData !== undefined) {
        setImageData(route?.params?.imageData);
        console.log(imageData);
      } else if (route?.params?.catID !== undefined) {
        setCategory(route.params);
      } else if (route?.params?.locID !== undefined) {
        setLocation(route.params);
      }
    }
  });

  return (
    <ScrollView>



    <View style={{ margin: 10 }}>
      <View>
        <Text style={{ marginVertical: 10, fontSize: 18 }}>
          Upload max 5 photos
        </Text>
        <Pressable
          style={{
            backgroundColor: colors.white,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,

            borderStyle: "dashed",
            borderWidth: 2,
            borderRadius: 20,
            width: 150,
            height: 150,
          }}
          onPress={() => navigation.navigate("SelectPhotos")}
        >
          <AntDesign name="pluscircle" size={24} color="black" />
        </Pressable>
      </View>
      <ScrollView horizontal={true}>
        {imageData &&
          imageData.map((e, index) => {
            return (
              <Image
                source={{ uri: e.uri }}
                key={index}
                style={{
                  height: 100,
                  width: 100,
                  margin: 10,
                  marginHotizontal: 10,
                }}
              />
            );
          })}
      </ScrollView>
      <Pressable
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 10,

          paddingVertical: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
          padding: 5,
        }}
        onPress={() => navigation.navigate("SelectCategory")}
        android_ripple={{ color: "grey" }}
      >
        <Text>{category.catName}</Text>
        <AntDesign name="right" size={24} color="black" />
      </Pressable>
      <Pressable
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 10,

          paddingVertical: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
          padding: 5,
        }} onPress={() => navigation.navigate("SelectLocation")}
      >
        <Text>{location.locName}</Text>
        <AntDesign name="right" size={24} color="black" />
      </Pressable>

      <View>
        <TextInput placeholder="Write a title" style={styles.input} onChangeText={(text) => setTitle(text)} />
      </View>
      <View>
        <TextInput multiline={true} numberOfLines={3} placeholder="Write a description" style={styles.input} onChangeText={(text) => setDescription(text)} />
      </View>
      <View>
        <TextInput
          placeholder="Add a value"
          style={[styles.input, { width: "50%" }]}
          onChangeText={(text) => setValue(text)}
          keyboardType="number-pad"
        />
      </View>
      <Pressable
      onPress={storeToDatabase}
      android_ripple={{color:'grey'}}
        style={{
          marginHorizontal: 20,
          marginVertical: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.primary,
          height: 60,
          borderRadius: 30,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>POST AD</Text>
      </Pressable>
    </View>
    </ScrollView>
  );
};

export default withAuthenticator(Listing);

const styles = StyleSheet.create({
  input: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    width:'100%',


    paddingVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 5,
  },
});
