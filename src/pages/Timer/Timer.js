import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function app(){

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

   
    
    const checkTime = () =>{
        if((minutes+1) == 1){
            Alert.alert("Atingiu seu tempo")
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
                <TouchableOpacity onPress={startTimer} style={styles.button}><Text style={styles.textButton}>Start</Text></TouchableOpacity>
                <TouchableOpacity onPress={stopTimer} style={styles.button}><Text style={styles.textButton}>Stop</Text></TouchableOpacity>
                <TouchableOpacity onPress={clearTimer} style={styles.button}><Text style={styles.textButton}>Clear</Text></TouchableOpacity>
            </View>
            <StatusBar style="auto"></StatusBar>
        </View>
    )

}

const styles = StyleSheet.create({
    textTimer: {
       fontSize: 30,
       textAlign: "center",
       alignSelf: "center",
    },
    buttonContainer: {
        width: "80%",
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        alignSelf: "center",
    },
    container:{
        alignContent: "center",
        top: 330,
    },
    button:{
        backgroundColor: "#363636",
        width: "20%",
        borderRadius: 15,
    },
    textButton:{
        color: "#fff",
        textAlign: "center",
        top: 10
    }

   })