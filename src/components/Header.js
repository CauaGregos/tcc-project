import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';




const Header = (props) => {
    const navigate = useNavigation();
    return(
    <View style={style.container}>
        
        
        <TouchableOpacity onPress={() => navigate.navigate(props.oldplanet)}>
        <Image style={style.leftButton} source={require('../pages/assets/buttonArrowleft.png')}></Image>
        </TouchableOpacity> 
       
       
        <Text style={style.title}>earth</Text>
       
        
       
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
        backgroundColor: '#202020',
        alignSelf: 'center',
        top:70,
        width: '90%',
        height: 50,
        borderRadius: 50,
        
        
    },

    title: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        bottom: 27
    },

    leftButton:{
        
        left: 20,
        top: 10
        
    },

    rightButton:{
        
        left: 305,
        bottom: 59

    }
});


export default Header