import React,{ useState } from 'react';
import {View, Text, TouchableOpacity, Alert,TextInput, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from './style';




const ForgotAcsses = () => {
    const axios = require('axios');
    const navegar = useNavigation();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState();
    const [invisible, setVisible] = useState(false);
    // estado para quando apertado o botao de loading tenha um loading
    const [loading, setLoading] = useState([{
        loadingLogin: false
      }])

    

    async function commit(){
        
        // aqui tenho minha função de logar
        setLoading({ loadingLogin: true })
        await axios.get('https://app-tc.herokuapp.com/forwardForgotPass/' + email).then(res => {
            navegar.navigate('SplashForgot')
            setLoading({ loadingLogin: false })
        }).catch(err => {
            Alert.alert("Ocorreu um problema com o envio do email: "+err)
            setLoading({ loadingLogin: false })
        })
       
    }

    return (
        <View style={styles.container}>
           <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
               <Text style={styles.message}>Olá, digite seu email</Text>
            </Animatable.View> 
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
               <TextInput
               placeholder='Digite seu Email..'
               value={email}
               style={styles.input}
               onChangeText = {text => setEmail(text)}
               />

            <TouchableOpacity onPress={() => {commit()}} style={styles.button}>
                        {loading.loadingLogin ? <ActivityIndicator size={"small"} color ={"white"}/> :<Text style={styles.buttonText}>Certo!!</Text>}
            </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}



export default ForgotAcsses;
