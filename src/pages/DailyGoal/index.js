import React, { useRef } from 'react';
import {View, BackHandler, Dimensions,Touchable, Pressable,Text, Button, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




const DailyGoal = (props) => {

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
          
          <View style={styles.containerOptions}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Casual   5min / Dia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Regular   10min / Dia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Itensa   15min / Dia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Puxada   20min / Dia</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.buttonAceppt}>
              <Text style={styles.buttonText}>{<FontAwesome name="angle-right" size={30} color="#3C3C3C"/>}</Text>
            </TouchableOpacity>

          </View>
      </Animatable.View>


  </View>  
    );
}


export default DailyGoal;