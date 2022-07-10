import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity,TextInput,ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './style';


const Register = () => {

    const navegar = useNavigation();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    async function createUser() {
        // await createUserWithEmailAndPassword(auth,email,password)
        // .then(value => {
        //     alert('Cadastrado com sucesso!!')
        //     navegar.navigate('Singin')
        // })
        // .catch(error => console.log(error))
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
                        placeholder='Digite seu Nome..'
                    />

                    <Text style={styles.title}>Seu Sobrenome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu Sobrenome..'
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
