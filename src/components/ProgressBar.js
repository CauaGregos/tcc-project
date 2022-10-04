import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';



const ProgressBar = (props) => {
    return(
    <View style={style.cam1}>
        <View style={{ 
        borderWidth:6.2,
        width:`${props.data}%`,
        borderColor: "#3841F2"}}></View>        
    </View>
    )
    
};

/*Style*/

const style = StyleSheet.create({
    cam1:{
        borderWidth:2,
        height:15,
        width:"55%",
        alignSelf: 'center',
        bottom:33,
        left:56,
        borderRadius:40
    }
});


export default ProgressBar