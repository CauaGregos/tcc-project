import React from "react"
import { StyleSheet, Dimensions } from "react-native"
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    IOSearthGame:{
        alignSelf: "center",
        width: width,
    },
    IOSmarsGame:{
        alignSelf: "center",
        width: width,
    },
    ANDROIDearthGame:{
        width: width,
        alignSelf: "center"
    },
    ANDROIDmarsGame:{
        alignSelf: "center",
        width: width,
    },
})

export default styles;