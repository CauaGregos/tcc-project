import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";


export default function app(){

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [customInterval, setcustomInterval] = useState();

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
                return prevState + 1;
            });
            return 0;
        }
        return prevState + 1;
      })
    }

    return(
        <View style={styles.container}>
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