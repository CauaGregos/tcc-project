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
        axios.get('https://app-tc.herokuapp.com/alunos')
          .then(res =>{
              const data = res.data
              for(let i = 0; i<data.length; i++){
                
                setAlunos(data[i]);
            }
          })
          .catch(err =>{
            
          })
      },[])
      // bloquear a volta da pagina 
      useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress',() => true)
        return() =>{
          BackHandler.addEventListener('hardwareBackPress',() => true)
        }
      }, []);

      const logout = () =>{
        setLogado(false)
        navigate.navigate('Singin')
      }

    return (
        <View style={styles.container}>
           <Animatable.View animation="fadeInRight" delay={500}>
            {/* aqui recebo as props da tela de SignIn e exibo o objeto */}
               <Text style={styles.title} >Bem vindo(a) {props.route.params?.nome}</Text>   
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