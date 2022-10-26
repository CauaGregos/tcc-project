import React from 'react';
import {View, Dimensions,Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';



const DailyGoal = (props) => {
   
    const navegacaoSplash = useNavigation()
    const setDailyGoal = (time) =>{
      const json = {time:time}
      AsyncStorage.setItem('@Timer',JSON.stringify(json)).then(()=>{navegacaoSplash.navigate("Search")})
    }

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
            <Text style={styles.headerText}> Escolha sua meta diária: </Text>
            <TouchableOpacity onPress={e=>setDailyGoal(5)} style={styles.button}>
              <Text style={styles.buttonText}>Casual   5min / Dia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={e=>setDailyGoal(10)} style={styles.button}>
              <Text style={styles.buttonText}>Regular   10min / Dia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={e=>setDailyGoal(15)} style={styles.button}>
              <Text style={styles.buttonText}>Intensa   15min / Dia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={e=>setDailyGoal(20)} style={styles.button}>
              <Text style={styles.buttonText}>Puxada   20min / Dia</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navegacaoSplash.navigate("Search")}  style={styles.buttonAceppt}>
              <Text style={styles.buttonText}>{<FontAwesome name="angle-right" size={30} color="#3C3C3C"/>}</Text>
            </TouchableOpacity> */}

          </Animatable.View>
      </Animatable.View>


  </View>  
    );
}


export default DailyGoal;