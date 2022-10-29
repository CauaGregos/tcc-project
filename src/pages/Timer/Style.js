import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

const styles = StyleSheet.create({
    textTimer: {
       fontSize: 50,
       textAlign: "center",
       alignSelf: "center",
    },
    buttonContainer: {
        width: "80%",
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 220,
        alignSelf: "center",
    },
    container:{
        alignContent: "center",
        top: 330,
    },
    button:{
        backgroundColor: "#363636",
        width: "20%",
        height:38,
        borderRadius: 15,
    },
    textButton:{
        color: "#fff",
        textAlign: "center",
        top: 10
    }

   })

   export default styles;