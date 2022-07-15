import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import { useState,useEffect } from 'react';



const Home = (props) => {

    const [alunos, setAlunos] = useState([]);
    const axios = require('axios');
  
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

    return (
        <View style={styles.container}>
           <Animatable.View animation="fadeInRight" delay={500}>
            {/* aqui recebo as props da tela de SignIn e exibo o objeto */}
               <Text style={styles.title} >Aqui futuramente terá os conteudos {props.route.params?.nome} tem 
                    sexo : {alunos.Nome}
               </Text>                
            </Animatable.View> 

            <Animatable.View animation="fadeInUp" >

            </Animatable.View> 

        </View>
    );
}


export default Home;