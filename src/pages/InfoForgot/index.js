import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const InfoForgot = () => {
    const navegar = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                delay={500}
                animation="flipInX"
                source={require('../assets/logo.png')}
                style={{width:'50%'}}
                resizeMode="contain"
                />
            </View>
            <Animatable.View delay={1500} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Tudo certo... não se preocupe, um email vai chegar indicando qual passo tomar</Text>
                
                <TouchableOpacity onPress={()=>{navegar.navigate('Welcome')}} style={styles.button}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

export default InfoForgot;