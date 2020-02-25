import React,{useEffect,useState} from 'react';
import {View,TouchableOpacity,Text} from 'react-native'
import { Navigation } from 'react-native-navigation';
function Login(props){
 const goToScreen=(screenName)=>{
   Navigation.push(props.componentId,{
     component:{
       name:screenName
     }
   })
 }
 return(
   <View style={{flex:1}}>
     <Text style={{fontWeight:'bold', fontSize:15,textAlign:'center',color:'#439082',marginTop:18,}}>Login</Text>
   <View style={{justifyContent:'center',alignItems:'center',flex:4}}>
     <TouchableOpacity activeOpacity={0.7} style={{width:200,height:60,backgroundColor:'#737373',justifyContent:'center',alignItems:'center'}} 
     onPress={()=>alert('LoginScreen')}><Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}>LoginScreen</Text></TouchableOpacity>
     </View>
     </View>
 )
}
export default Login;