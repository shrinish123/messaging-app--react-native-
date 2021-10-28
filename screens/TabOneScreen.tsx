import * as React from 'react';
import {Text,View,Image,FlatList,StyleSheet} from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem'

import chatRoomData from '../assets/dummy-data/ChatRooms';

const chatRoom1 = chatRoomData[0];
const chatRoom2 = chatRoomData[1];


export default function TabOneScreen() {
  return (
     <View style={styles.page}>
        <FlatList
        data = {chatRoomData}
        renderItem={({item})=><ChatRoomItem chatRoom = {item}/>}/>
     </View>
  );
} 

const styles = StyleSheet.create({
  page:{
   backgroundColor:'white',
   flex:1,
  }
});
