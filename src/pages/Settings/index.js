import React from 'react';
import { View, BackHandler, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, Alert, Dimensions,Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import sendEmail from '../../services/sendEmail';

const Settings = (props) => {

    const navigate = useNavigation();
    const axios = require('axios');

    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [email, setEmail] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [password, setPassword] = useState(null);
    const [imagePerfil, setImagePerfil] = useState(null)
    const size = Dimensions.get('window').height
    const userObj = props.route.params?.user ? JSON.parse(props.route.params?.user) : null
    



    // Vai pegar todas as informacoes do user antes de renderizar o componente
    useEffect(() => {
        if (userObj!=null && userObj!=undefined) {
            
        axios.get('https://app-tc.herokuapp.com/getAluno/'+userObj.email+'/'+userObj.password).then(res =>{
           
            setNome(res.data[0].nome)
            setIdade(res.data[0].idade)
            setEmail(res.data[0].email)
            setUsuario(res.data[0].nickName)
            setPassword(res.data[0].senha)
        }).catch(err =>{Alert.alert("Ocorreu um problema ao buscar seus dados...")})
    }else{
    AsyncStorage.getItem('@User').then((res) => { 
        const info = JSON.parse(res);
        axios.get('https://app-tc.herokuapp.com/getAluno/'+info.email+'/'+info.password).then(res =>{
           
            setNome(res.data[0].nome)
            setIdade(res.data[0].idade)
            setEmail(res.data[0].email)
            setUsuario(res.data[0].nickName)
            setPassword(res.data[0].senha)
        }).catch(err =>{Alert.alert("Ocorreu um problema ao buscar seus dados...")})
     })
    }
    AsyncStorage.getItem('@Image').then((res) => { 
        try {
            const info = JSON.parse(res);
        setImagePerfil(info.img)
        }catch(error){} 
     })
}, []);

    
    const logout = () => {
    navigate.dispatch(StackActions.replace('Splash'))
    AsyncStorage.clear();
    }


    return (

        <View style={styles.container}>

      
            <Animatable.View animation="fadeInUp" style={styles.container}>
            <TouchableOpacity style={{top: 30,right: "90.5%",position: "absolute" }} onPress={e=>navigate.goBack()}>
            <FontAwesome5 name="caret-left" size={70} color="#fff" />
            </TouchableOpacity>
                <View style={styles.containerInfos}>
                    <View>
                        <TouchableOpacity style={{ top: size * -0.05, borderRadius: 3,justifyContent:'center',alignItems:'center' }} onPress={() => navigate.navigate('CamScreen')}>
                            {imagePerfil != null? <Image style={{width:150,height:150,borderRadius:300}} source={{uri:imagePerfil}}/>:<Image style={{width:150,height:150,borderRadius:30}} source={require('../assets/defaultImage.png')}/>}
                        </TouchableOpacity>
                        <ScrollView> 
                            <Text style={styles.title}>Alterar Nome</Text>
                            <TextInput
                                style={styles.input}
                                value={nome}
                                onChangeText={text => setNome(text)}
                                placeholder='Digite seu nome completo..'
                            />
                            <Text style={styles.separetor}></Text>
                             <Text style={styles.title2}>Alterar Email</Text>
                            <TouchableOpacity>
                            <TextInput
                                editable={false}
                                placeholder='Cadastre seu Email..'
                                value={email}
                                style={styles.input}
                                
                            />
                            </TouchableOpacity>
                            <Text style={styles.separetor}></Text>
                            <Text style={styles.title3}>Alterar nome de preferência</Text>
                            <TextInput
                                style={styles.input}
                                value={usuario}
                                onChangeText={text => setUsuario(text)}
                                placeholder='Digite seu Usuário..'
                            />
                            <Text style={styles.separetor}></Text>
                             <Text style={styles.title4}>Alterar Senha</Text>
                            <TouchableOpacity>
                            <TextInput
                                editable={false}
                                passwordRules='number'
                                placeholder='Cadastre sua senha...'
                                value={password}
                                style={styles.input}
                                secureTextEntry
                            />
                            </TouchableOpacity>
                            <Text style={styles.separetor}></Text>
                        
                        </ScrollView>
                    </View>
                    <TouchableOpacity onPress={e=>logout()}>
                    <Text>Sair da conta?</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>





        </View>
    );
}


export default Settings;
