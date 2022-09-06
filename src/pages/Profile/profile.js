import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function Profile() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();


    function toggleCameraType() {
        
        setType((current) => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    }

    return (
        <View style={styles.container}>
            <Image source={{
                uri: type ? type.uri : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
            }} style={styles.avatar}>
            </Image>
            <TouchableOpacity style={styles.button} onPress={() => toggleCameraType()}>
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
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
})