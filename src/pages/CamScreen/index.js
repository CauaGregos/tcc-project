import { Camera, CameraType } from 'expo-camera';
import { useRef, useState,useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Modal,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome4Icon from 'react-native-vector-icons/FontAwesome';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
  const camReg = useRef(null)
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedPhoto,setCapturedPhoto] = useState(null)
  const [libraryPermission,setLibraryPermission] = useState(null);
  const [open,setOpen] = useState(false)
  const navegar = useNavigation();
  const axios = require('axios');
  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();
      setLibraryPermission(galleryStatus.status === 'granted')
    })
  }, []);

  if (!permission ) {
    // Camera permissions are still loading
    return <View />;
  }
  
  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
         Precisamos de sua permissão para acessar a camera.
        </Text>
        <Button onPress={requestPermission} title="Temos sua permissão?" />

        <Text style={{ textAlign: 'center' }}>
        Precisamos de sua permissão para acessar a galeria.
        </Text>
        <Button onPress={setLibraryPermission} title="Temos sua permissão?" />
      </View>
    );
  }
  const setLogin = async (key, value) => {
    await AsyncStorage.setItem(key,value)
  }

  //usando o expo-camera para pegar uma foto vinda da camera
  async function takePicture(){
     if (camReg){
      const data = await camReg.current.takePictureAsync();
      setCapturedPhoto(data.uri)
      setOpen(true)
      let jsonData = {
        img : data.uri
    }
    setLogin('@Image',JSON.stringify(jsonData));
     }
  }

  const headers = {
    'headers':{
      'Content-Type': 'application/json'
    }
  }

  function upload(){
    const formdata = new FormData();
      formdata.append('image',{
        fileName : 'teste',
        uri : capturedPhoto,
      })
      // axios.post('http://192.168.1.105:3000/uploadFile',formdata,headers)
  }

  // usando o imagePicker para pegar as fotos do album da pessoa
  async function takePictureFromAlbum(){
    
   let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing:true,
    aspect: [4,3],
    quality:1
   })

  
   axios.post('http://192.168.1.105:3000/uploadFile',result.uri)

   if(!(await result).cancelled){
    setCapturedPhoto(result.uri)
    setOpen(true)
    
   }
 }

  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref = {camReg}>
          <TouchableOpacity
            style={styles.flip}
            onPress={toggleCameraType}>
           <FontAwesome4Icon name="rotate-left" size={30} color="#fffa"/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.flip}
            onPress={takePictureFromAlbum}>
            <FontAwesome name="image" size={30} color="#000000"/>
      </TouchableOpacity>

      </Camera>

      <TouchableOpacity
            style={styles.button}
            onPress={takePicture}>
            <FontAwesome name="camera" size={30} color="#000000"/>
      </TouchableOpacity>
      
    
    {
      capturedPhoto &&
      <Modal animationType='slide'
      transparent={false}
      visible={open}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:20}}>
            <TouchableOpacity style={{margin:10}} onPress={()=>setOpen(false)}>
            <FontAwesome name="window-close" size={30} color="#FF0000"/>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}} onPress={()=>upload()}>
            <FontAwesome name="check" size={30} color="#F00000"/>
            </TouchableOpacity>

            <Image
            style={{width:'100%', height:500}}
            source={{uri: capturedPhoto}}
            />
          </View>
      </Modal>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
  },
  camera: {
    position:'absolute',
    flex: 1,
    height:'70%',
    width:'100%',
  },
  buttonContainer: {
    flex: 1,
    top:'30%',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    top:350,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent:'center',
  },
  flip: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    bottom:'-1%',
    marginLeft:5
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});