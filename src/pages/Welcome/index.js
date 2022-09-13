import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Welcome = () => {
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
                <Text style={styles.title}>Venha aprender de fato conosco</Text>
                <Text style={styles.text}>Faça login para começar</Text>
                <TouchableOpacity onPress={()=>{navegar.navigate('Choice')}} style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

export default Welcome;
