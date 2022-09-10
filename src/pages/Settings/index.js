import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity,TextInput,ScrollView, Alert, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
// import sendEmail from '../../services/sendEmail';
 
const Settings = (props) => {

    const navegar = useNavigation();
    const axios = require('axios');

    const [nome, setNome] = useState(null);
    const [sobrenome, setSobrenome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [imagePerfil,setImagePerfil] = useState(null)
    const size = Dimensions.get('window').height


    // Vai pegar todas as informacoes do user antes de renderizar o componente
    // useEffect(() => {
    //    axios.get('TRABALHAR NISSO.....').then().catch();
    // }, []);

  
    return (

        <View style={styles.container}>


            <Animatable.View animation="fadeInUp" style={styles.container}>
            
                {/* {props.routes.params?.image!=undefined ? 
                
                <Animatable.Image
                delay={500}
                animation="flipInX"
                source={props.routes.params?.image}
                style={{width:'50%'}}
                resizeMode="contain"
                /> 
                :<FontAwesome5 name="user" size={30} color="#6b6080" /> } */}
                

                <View style={styles.containerInfos}>
                    <View style={styles.imagePerfil}>
                        <TouchableOpacity style={{top:size*-0.05,borderRadius:3}} onPress = {() => navegar.navigate('CamScreen')}>
                            <FontAwesome5 name="user" size={100} color="#848484" />
                        </TouchableOpacity>
                    </View>
                </View>

            
            </Animatable.View>

        
        </View>
    );
}


export default Settings;
