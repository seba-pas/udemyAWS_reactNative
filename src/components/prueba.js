import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Prueba = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          width: 300,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Prueba</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Prueba;

const styles = StyleSheet.create({});
