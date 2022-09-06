import React , {useState} from 'react';

import { View, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker'


export default function Profile() {
    const [avatar, setAvatar] = useState();
    

    function imagePickerCallback(data){

        if(data.didCancel){
            return;
        }

        if(data.error){
            return;
        }

        if(!data.uri){
            return;
        }

        setAvatar(data);


    }

    const handleImageUser = () => {
        
    }

    const pickImageFromGallery = async () => {
        const options = {
            mediaType:'photo'
        }
        const result = await launchImageLibrary(options);
        console.log(result)

        if(result ?.assets){
            console.log(result.assets)
            setAvatar(result.assets[0].uri)
            return
        }
    }

    


    return (
        <View style={styles.container}>
            <Image source={{
                uri: avatar ? avatar.uri :'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}} style={styles.avatar}>
            </Image>
            <TouchableOpacity style={styles.button} onPress={() => pickImageFromGallery()}>
                <Text style={styles.buttonText}>Escolher Imagem</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50,
    }
})