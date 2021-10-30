import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput,Pressable } from 'react-native';
import {SimpleLineIcons,Feather,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';


const MessageInput = () => {

    const [message,setMessage] = useState('');

    const onSubmit=()=>{
        // Add logic to send the message to backend
        setMessage('');

    }



    return (
        <View style = {styles.root}>
            <View style = {styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size = {24} color='black' style ={styles.icon}/>

               <TextInput onChangeText={(text)=> setMessage(text)} value={message} style= {styles.input} placeholder='Message'/>

               <Feather name="camera" size={24} color="black" style ={styles.icon}/>
               <MaterialCommunityIcons name="microphone-outline" size={24} color="black" style ={styles.icon}/>
            </View>
            <Pressable onPress={onSubmit} style={styles.btnContainer}>
            <Feather name="send" size={24} color="white" style ={styles.sendicon} />
            </Pressable>
        </View>
    )
}

export default MessageInput

const styles = StyleSheet.create({
    root:{
      flexDirection:'row',
    },
  inputContainer:{
      backgroundColor:'#f2f2f2',
      flex:1,
      marginRight:10,
      marginLeft:10,
      marginBottom:10,
      borderRadius:10,
      padding:10,
      flexDirection:'row',
      alignItems:'center'
  },
  input:{
      flex:1,
  },
  icon:{
      marginHorizontal:5,
  },
  sendicon:{
    marginTop:3,
    marginRight:5,
  },
  btnContainer:{
     width:50,
     height:50,
     backgroundColor:'#3777f0',
     borderRadius:25,
     justifyContent:'center',
     alignItems:'center',
     marginRight:4,
  },
  buttonText:{
      color:'white',
      fontSize: 35,
  }
});
