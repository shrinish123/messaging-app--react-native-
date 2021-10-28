import * as React from 'react';
// import { StyleSheet } from 'react-native';
import {Text,View,Image,StyleSheet} from 'react-native'
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
// import { RootTabScreenProps } from '../types';

export default function TabOneScreen({chatRoom}) {
  return (
     <View style={styles.container}>
        <Image source ={{uri:chatRoom.users[1].imageUri}} style ={styles.image}/>
        {chatRoom.newMessages &&
        <View style={styles.badgeContainer}>
           <Text style={styles.badgeText}>4</Text>
         </View>}
        <View style ={styles.rightContainer}>
        <View style ={styles.row}>
          <Text style={styles.name}>{chatRoom.users[1].name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1}  style={styles.text}>{chatRoom.lastMessage.content}</Text>
        </View>
    
     </View>
  );
}

const styles = StyleSheet.create({
  image:{
    height:70,
    width:70,
    borderRadius:50,
    marginRight:10,
  },
  container:{
   flexDirection:'row',
   padding: 10,
  },
  rightContainer:{
   flex:1,
   justifyContent:'center'
  },
   text:{
     color:'grey',
   },
   row:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginBottom:5,
   },
   name:{
     marginTop:5,
     fontWeight:'bold',
     flex:1,
     fontSize:17,
   },
   badgeContainer:{
    backgroundColor:'green',
    width:20,
    height:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'white',
    position:'absolute',
    left:57,
    top:10,
   },
   badgeText:{
     color:'white',
     fontSize:12,
   }
});
