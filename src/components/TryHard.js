import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useState,useEffect } from 'react';


// salvar o tryhard no async storange, o primeiro 3 que o cara fizer vai contabilizar o try hard

const Tryhard = (props) => {

    return(
    <View key={props.text} style={style.container}>
        <Text style={style.text}>{props.text}</Text>
        <Image source={require('../pages/assets/flame.png')}/>

    </View>
    )
    
};

/*Style*/

const style = StyleSheet.create({
   text:{
    color:'#FFF',
    left:3,
    fontSize:18

   },
   container:{
    marginLeft:25,
    top:10
    }
});


export default Tryhard