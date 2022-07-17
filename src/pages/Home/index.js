import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity,BackHandler, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import stylesButtom from '../Register/style';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



const Home = (props) => {

    const [alunos, setAlunos] = useState([]);
    const axios = require('axios');
    const [logado,setLogado] = useState([true]);
    const navigate = useNavigation()
  
      useEffect(()=>{
        axios.get('http://192.168.1.105:3000/alunos')
          .then(res =>{
              const data = res.data
              for(let i = 0; i<data.length; i++){
                console.log(data[i].Nome)
                setAlunos(data[i]);
            }
          })
          .catch(err =>{
            console.log(err)
          })
      },[])
      // bloquear a volta da pagina 
      useEffect(() => {
        if (logado) {
        const backAction = () => {
          Alert.alert("Ops!", "Você esta tentando sair do eu app favorito, deseja mesmo?", [
            {
              text: "Não",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Sim", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
        return () => backHandler.remove();
      }}, []);

      const logout = () =>{
        setLogado(false)
        navigate.navigate('Singin')
      }

    return (
        <View style={styles.container}>
           <Animatable.View animation="fadeInRight" delay={500}>
            {/* aqui recebo as props da tela de SignIn e exibo o objeto */}
               <Text style={styles.title} >Aqui futuramente terá os conteudos {props.route.params?.nome} tem 
                    sexo : {alunos.Nome}
               </Text>   
              <TouchableOpacity onPress={() => {logout()}}>
              <Text style={styles.title}> Sair da conta</Text>   
              </TouchableOpacity>
            </Animatable.View> 

            <Animatable.View animation="fadeInUp" >

            </Animatable.View> 

        </View>
    );
}


export default Home;