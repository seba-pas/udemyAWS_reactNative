import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../modal/colors";

const Listing = () => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log(user.attributes.email);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
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
        >
          <AntDesign name="pluscircle" size={24} color="black" />
        </Pressable>
      </View>
      <View
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
      >
        <Text>Category</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View
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
      >
        <Text>Location</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <View>
        <TextInput placeholder="Write a title" style={styles.input} />
      </View>
      <View>
        <TextInput placeholder="Write a description" style={styles.input} />
      </View>
      <View>
        <TextInput
          placeholder="Add a value"
          style={[styles.input, { width: "50%" }]}
        />
      </View>
      <View
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
      </View>
    </View>
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

    paddingVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 5,
  },
});
