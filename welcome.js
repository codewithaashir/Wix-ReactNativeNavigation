import React,{useEffect,useState} from 'react';
import {View,TouchableOpacity,Text} from 'react-native'
import { Navigation } from 'react-native-navigation';
function Welcome(props){
 const goToScreen=(screenName)=>{
   Navigation.push(props.componentId,{
     component:{
       name:screenName
     }
   })
 }
 return(
   <View style={{flex:1}}>
    
   <View style={{justifyContent:'center',alignItems:'center',flex:4,flexDirection:'column'}}>
     <TouchableOpacity activeOpacity={0.7} style={{width:200,height:60,backgroundColor:'#737373',marginBottom:20,justifyContent:'center',alignItems:'center'}} 
     onPress={()=>goToScreen('Login')}><Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}>Login</Text></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={{width:200,height:60,marginBottom:20,backgroundColor:'#737373',justifyContent:'center',alignItems:'center'}} 
     onPress={()=>goToScreen('Signup')}><Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}>Signup</Text></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={{width:200,height:60,backgroundColor:'#737373',justifyContent:'center',alignItems:'center'}} 
     onPress={()=>goToScreen('Dashboard')}><Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}>Dashboard</Text></TouchableOpacity>

     </View>
     </View>
 )
}
export default Welcome;