import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';


const size =  Dimensions.get("window").width;


const Header = (props) => {
    const navigate = useNavigation();
    return(
    <View style={style.container}>
        
        
        <TouchableOpacity onPress={() => navigate.navigate(props.oldplanet)}>
        <Image style={style.leftButton} source={require('../pages/assets/buttonArrowleft.png')}></Image>
        </TouchableOpacity> 
       
       
        <Text style={style.title}>{props.actualplanet}</Text>
       
        
       
        <TouchableOpacity onPress={() => navigate.navigate(props.planet)}>
        <Image style={style.rightButton} source={require('../pages/assets/buttonArrow.png')}></Image>
        </TouchableOpacity> 


        
    </View>
    )
    
};

/*Style*/

const style = StyleSheet.create({
    container: {
        position:'absolute',
        backgroundColor: '#000',
        alignSelf: 'center',
        top:70,
        width: '90%',
        height: 60,
        borderRadius: 20,
        
        
    },

    title: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        bottom: 23
    },

    leftButton:{
        
        left: 20,
        alignSelf: 'flex-start',
        top: 14
        
    },

    rightButton:{
        right: 20,
        alignSelf: 'flex-end',
        bottom: 55.3

    }
});


export default Header