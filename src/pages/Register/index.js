import React from 'react';
import {View, Text, TouchableOpacity,TextInput,ScrollView, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
// import sendEmail from '../../services/sendEmail';
 
const Register = () => {

    const navegar = useNavigation();
    const axios = require('axios');

    const [nome, setNome] = useState(null);
    const [nickName, setnickName] = useState(null);
    const [idade, setIdade] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    

    async function createUser() {
        await axios.post('https://app-tc.herokuapp.com/registerStudent',{
            nome:nome,
            email: email,
            idade:idade
        })
        .then(res =>{
            axios.post('https://app-tc.herokuapp.com/registerPerfil',{
                nome:nome,
                nickName:nickName,
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
                
        navegar.navigate('SelectLanguage')
    }

    return (

        <View style={styles.container}>

            <Animatable.View animation="fadeInRight" delay={500} style={styles.containerHeader}>
                
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                
            <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/SaturnoBilinguo.png')}></Image>
                <ScrollView>

                    <Text style={styles.title}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={text => setNome(text)}
                        placeholder='Digite seu nome completo..'
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

                    <Text style={styles.title}>Seu Usuário</Text>
                    <TextInput
                        style={styles.input}
                        value={nickName}
                        onChangeText={text => setnickName(text)}
                        placeholder='Digite seu Usuário..'
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


                    <TouchableOpacity style={styles.buttonRegister} onPress={() => { navegar.navigate('SignIn') }}>
                        <Text style={styles.registerText}>Já possui acesso clique aqui para fazer o login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>


        </View>
    );
}


export default Register;
