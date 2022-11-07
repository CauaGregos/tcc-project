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
        
       
        <TouchableOpacity onPress={() => navigate.navigate(props.planet)}>
        <Image style={style.rightButton} source={require('../pages/assets/buttonArrow.png')}></Image>
        </TouchableOpacity> 

        <Text style={style.title}>{props.actualplanet}</Text>


        
    </View>
    )
    
};

/*Style*/

const style = StyleSheet.create({
    container: {
        position:'absolute',
        backgroundColor: '#0D0F00',
        alignSelf: 'center',
        top:50,
        width: '90%',
        height: 50,
        borderRadius: 20,
        zIndex:2
        
    },

    title: {
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center',
        top: "-100%",
       
        
        
    },

    leftButton:{
        
        left: 10,
        alignSelf: 'flex-start',
        top: "30%"
        
    },

    rightButton:{
        right: 10,
        alignSelf: 'flex-end',
        top: "-65%"

    }
});


export default Header