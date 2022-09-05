import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity,TextInput,ScrollView, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
// import sendEmail from '../../services/sendEmail';
 
const Settings = () => {

    const navegar = useNavigation();
    const axios = require('axios');

    const [nome, setNome] = useState(null);
    const [sobrenome, setSobrenome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    

    async function createUser() {
        await axios.post('https://app-tc.herokuapp.com/cadastrarAluno',{
            nome:nome,
            sobrenome:sobrenome,
            email: email,
            idade:idade
        })
        .then(res =>{
            axios.post('https://app-tc.herokuapp.com/cadastrarPerfil',{
                nome:nome,
                sobrenome:sobrenome,
                email: email,
                senha:password
            }).then((res) =>{
            }).catch(err =>{console.log(err)})
        })
        .catch(err =>{
          console.log(err)
        })

        axios.post('https://app-tc.herokuapp.com/enviarEmail',{
                    email: email
                }).then(res =>{}).catch(err =>{console.log(err)})

                navegar.navigate("WaitConfirm")
    }

    return (

        <View style={styles.container}>


            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                
                
                </ScrollView>
            </Animatable.View>


        </View>
    );
}


export default Settings;
