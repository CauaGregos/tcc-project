import React from "react";
import {
    Dimensions,
    Platform,
    Image,
    View
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style";


const earthGame = (props) => {
    const [alunos, setAlunos] = useState([]);
    const axios = require("axios");
    const [logado, setLogado] = useState([true]);
    const width = Dimensions.get("screen").width;
    const plataforma = Platform.OS;

    const navigate = useNavigation();
    console.log(props.route.params?.object)
    useEffect(() => {
        axios
            .get("https://app-tc.herokuapp.com/alunos")
            .then((res) => {
                const data = res.data;
                for (let i = 0; i < data.length; i++) {
                    setAlunos(data[i]);
                }
            })
            .catch((err) => { });
    }, []);

    const logout = () => {
        setLogado(false);
        navigate.navigate("Singin");
    };

    return (
        <View>
            {plataforma == "ios" ? (
                <ScrollView>
                    <Image source={require('../assets/earthGame.png')}
                        style={styles.IOSearthGame}
                    ></Image>
                </ScrollView>
            ) : (
                <ScrollView>
                    <Image source={require('../assets/earthGame.png')}
                        style={styles.ANDROIDearthGame}
                    ></Image>
                </ScrollView>
            )
            }</View>
    )
}


export default earthGame;