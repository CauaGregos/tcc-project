import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity,TextInput,ScrollView, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
// import sendEmail from '../../services/sendEmail';
 
const Register = () => {

    const navegar = useNavigation();
    const axios = require('axios');

    const [nome, setNome] = useState(null);
    const [sobrenome, setSobrenome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    

    async function createUser() {
        await axios.post('https://app-tc.herokuapp.com/registerStudent',{
            nome:nome,
            sobrenome:sobrenome,
            email: email,
            idade:idade
        })
        .then(res =>{
            axios.post('https://app-tc.herokuapp.com/registerPerfil',{
                nome:nome,
                sobrenome:sobrenome,
                email: email,
                senha:password
            }).then((res) =>{
            }).catch(err =>{})
        })
        .catch(err =>{
          
        })

        axios.post('https://app-tc.herokuapp.com/sendEmailConfirm',{
                    email: email
                }).then(res =>{}).catch(err =>{console.log(err)})

                navegar.navigate("WaitConfirm")
    }

    return (

        <View style={styles.container}>

            <Animatable.View animation="fadeInRight" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Crie sua nova conta</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <Text style={styles.title}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={text => setNome(text)}
                        placeholder='Digite seu Nome..'
                    />

                    <Text style={styles.title}>Seu Sobrenome</Text>
                    <TextInput
                        style={styles.input}
                        value={sobrenome}
                        onChangeText={text => setSobrenome(text)}
                        placeholder='Digite seu Sobrenome..'
                    />

                    <Text style={styles.title}>Sua idade</Text>
                    <TextInput
                        style={styles.input}
                        value={idade}
                        onChangeText={text => setIdade(text)}
                        placeholder='Digite sua idade..'
                    />

                    <Text style={styles.title}>Cadastre seu email</Text>
                    <TextInput
                        placeholder='Cadastre seu Email..'
                        value={email}
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                    />

                    <Text style={styles.title}>Cadastre sua senha</Text>
                    <TextInput
                        passwordRules='number'
                        placeholder='Cadastre sua senha...'
                        value={password}
                        style={styles.input}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />

                    <TouchableOpacity onPress={() => { createUser(); }} style={styles.button}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.buttonRegister} onPress={() => { navegar.navigate('Singin') }}>
                        <Text style={styles.registerText}>Já possui acesso clique aqui para fazer o login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>


        </View>
    );
}


export default Register;
