import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>PostDetails</Text>
    </View>
  )
}

export default PostDetails

const styles = StyleSheet.create({
  container: {
     jsutifyContent: 'center',
     alignItems: 'center'
  }
})