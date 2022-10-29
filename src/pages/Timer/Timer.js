import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./Style";

export default function Timer(){

    const [seconds, setSeconds] = useState(55);
    const [minutes, setMinutes] = useState(0);
    const [customInterval, setcustomInterval] = useState();
    const [dailyGoal, setDailyGoal] = useState(0);

    useEffect(() => {
        AsyncStorage.getItem('@Timer').then(e=>{
            const data = JSON.parse(e);
            setDailyGoal(data.time)
        })
    }, []);


    const checkSaveTryhard = () => {
        AsyncStorage.getItem('@Tryhard').then((res)=>{
            let arrayReplace = [];
            const obj = JSON.parse(res);
            
            if (obj){
                const ultimoValor = obj.vitory[obj.vitory.length - 1]
                obj.vitory.forEach(element => {
                    arrayReplace.push(element)
                });
                arrayReplace.push(ultimoValor+1);
                AsyncStorage.removeItem('@Tryhard').then(e=>{
                    const data = {
                        vitory:arrayReplace
                    }
                    AsyncStorage.setItem('@Tryhard',JSON.stringify(data))
                })
            }
            else{
                const json = {
                    vitory:[1]
                }
                AsyncStorage.setItem('@Tryhard',JSON.stringify(json))
            }
        })
    };
   
    
    const checkTime = () =>{
        if((minutes+1) == 1){
            Alert.alert("Atingiu seu tempo")
            checkSaveTryhard();
        }
            
        
    }

    const startTimer = () => {
        setcustomInterval(
            setInterval(() => {
                changeTimer();
            }, 1000)
        )
    }

    const stopTimer = () => {
        if(customInterval){
            clearInterval(customInterval);
        }
    }

    const clearTimer = () => {
        stopTimer();
        setSeconds(0);
        setMinutes(0);
    }

    const changeTimer = () => {
      
      setSeconds((prevState) => {
        if(prevState + 1 == 60){
            setMinutes((prevState) => {
                checkTime();
                return prevState + 1;
            });
            return 0;
        }
        return prevState + 1;
      })
     
    }

    return(
        <View style={styles.container}>
            <Text>Sua meta diaria é de: {dailyGoal} {minutes}</Text>
            <Text style={styles.textTimer}>
                {minutes < 10 ? '0' + minutes : minutes}
                 :
                {seconds < 10 ? '0' + seconds : seconds}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={startTimer} style={styles.button}><FontAwesome name={'play'} color={'#FFF'} style={{alignSelf:'center',top:10}} size={20}/></TouchableOpacity>
                <TouchableOpacity onPress={stopTimer} style={styles.button}><FontAwesome name={'stop'} color={'#FFF'} style={{alignSelf:'center',top:10}} size={20}/></TouchableOpacity>
                <TouchableOpacity onPress={clearTimer} style={styles.button}><FontAwesome name={'rotate-left'} color={'#FFF'} style={{alignSelf:'center',top:10}} size={20}/></TouchableOpacity>
            </View>
            <StatusBar style="auto"></StatusBar>
        </View>
    )

}

