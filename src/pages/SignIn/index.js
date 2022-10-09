import React,{ useState,useEffect } from 'react';
import {View,StyleSheet, BackHandler,Text, TouchableOpacity, Alert,TextInput, ActivityIndicator, Image, ImageBackgroundBase, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CheckBox from 'react-native-custom-checkbox';
import { useNavigation, StackActions } from '@react-navigation/native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Singin = () => {
    const axios = require('axios');
    const navegar = useNavigation();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState();
    const [invisible, setVisible] = useState(false);
    // estado para quando apertado o botao de loading tenha um loading
    const [loading, setLoading] = useState([{
        loadingLogin: false
      }])

     

      const setLogin = async (key, value) => {
        await AsyncStorage.setItem(key,value)
      }

    async function signInUser(){
        // aqui tenho minha função de logar
        // Ativo o circulo de carregamento que fica girando esperando as informações chegarem da promise
        setLoading({loadingLogin:true})
        await axios.get('https://app-tc.herokuapp.com/getAluno/'+email+'/'+password).then(res1 =>{
            axios.get('https://app-tc.herokuapp.com/getAlunoExistente/'+email).then(res => {
            // Usando oque vem de resposta da minha promisse consigo descobrir se a pessoa tem o email 
            // confirmado ou nao
            let jsonData = {
                email: email,
                password: password 
            }
           
            if (res1.data[0].confirmado == 1){
                navegar.dispatch(StackActions.replace('Home')) 
                setLogin('@User',JSON.stringify(jsonData))
            }
            else{
                navegar.navigate('WaitConfirm')
            }
            setLoading({loadingLogin:false})   
            }).catch(err => {})
            
        }).catch(err =>{Alert.alert("Email ou senha incorretos!!")})
        setLoading({loadingLogin:false})
    }

    return (
        <View style={styles.container}>
           <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            </Animatable.View> 
            
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/SaturnoBilinguo.png')}></Image>
                
                <TextInput
                placeholder='Digite seu Email..'
                value={email}
                style={styles.input}
                onChangeText = {text => setEmail(text)}
                />
                
                <TextInput
                passwordRules='number'
                placeholder='Senha:'
                value={password}
                style={styles.input}
                onChangeText = {text => setPassword(text)}
                secureTextEntry = {!invisible}
                />

            <Animatable.View animation="fadeIn" delay={500} style={styles.textVisible}>
            <Text style={styles.textVisible} >Deixar senha vísivel </Text>
                        <CheckBox name = 'checkbox' checked={invisible} 
                        size = {17} style={styles.CheckBox} onChange = {() => {setVisible(!invisible)}}/>
            </Animatable.View> 
                        
               

                    <TouchableOpacity onPress={() => {signInUser()}} style={styles.button}>
                                {loading.loadingLogin ? <ActivityIndicator size={"small"} color ={"#3b44f2"}/> :<Text style={styles.buttonText}>{<FontAwesome name="angle-right" size={30} color="#3C3C3C"/>}</Text>}
                    </TouchableOpacity>
            
               <TouchableOpacity style={styles.buttonRegister} onPress={()=>{navegar.navigate('Register')}}>
                    <Text style={styles.registerText}>Não possui acesso? Registre - se</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.buttonRegister} onPress={()=>{navegar.navigate('ForgotAcsses')}}>
                    <Text style={styles.registerText}>Esqueci minha senha</Text>
               </TouchableOpacity>

            </Animatable.View> 

        </View>
    );
}



export default Singin;
