import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const WaitConfirm = () => {
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
                <Text style={styles.title}>Está quase tudo pronto... confirme seu email.</Text>
                <Text style={styles.text}>Esperando a confirmação do email para primeiros passos no app.</Text>
                <TouchableOpacity onPress={()=>{navegar.navigate('Splash')}} style={styles.button}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

export default WaitConfirm;
