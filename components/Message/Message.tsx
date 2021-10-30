import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default function Message({message}) {

    const myId = 'u1';


  // To apply styles as per sender of a message
    const isMe = message.user.id === myId;
    const messagesStyle = isMe ? styles.rightContainer : styles.leftContainer;

        return (
            <View style = {[styles.container,messagesStyle]}>
                <Text style={{color:isMe ? 'black':'white'}}> {message.content} </Text>
            </View>
        )
    
}

const styles= StyleSheet.create({
  container:{
      padding:10,
      margin:10,
      borderRadius:10,
      maxWidth:'75%',
  },
  leftContainer:{
    backgroundColor:'#3777f0',
    marginLeft:10,
    marginRight:'auto',
  },
  rightContainer:{
    backgroundColor:'lightgrey',
    marginLeft:'auto',
    marginRight:10,
  }

})

