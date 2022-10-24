import React from 'react';
import {View, Dimensions,Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './style'




const Search = (props) => {

    const [alunos, setAlunos] = useState([]);
    const axios = require('axios');
    const [logado,setLogado] = useState([true]);
    const width = Dimensions.get('screen').width;
    const [test,setTest] = useState('');
    const interInPlanet = (planet) => {
       if(planet){
         navigate.navigate(planet, {planet: toString(planet)});
       } 
    }

    const navigate = useNavigation()
    const navegacaoSplash = useNavigation()
    

    return (
        
      <View style={styles.container}>

      <Animatable.View animation="fadeInRight" delay={500} style={styles.containerHeader}>
          
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          
          <Animatable.Image
            delay={500}
            animation="flipInX"
            source={require('../assets/SaturnoBilinguo.png')}
            style={styles.containerLogo}
            resizeMode="contain"
          />
          
          <Animatable.View animation={"fadeInRight"} delay={500} style={styles.containerOptions}>
            <Text style={styles.headerText}> Escolha uma opção: </Text>
            <TouchableOpacity onPress={() => navegacaoSplash.navigate("WaitConfirm")} style={styles.button}>
              <Text style={styles.buttonText}>Comece do zero!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Descubra o seu nível aqui!</Text>
            </TouchableOpacity>
          </Animatable.View>
      </Animatable.View>


  </View>  
    );
}


export default Search;