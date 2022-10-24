import { Camera, CameraType } from 'expo-camera';
import { useRef, useState,useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Modal,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome4Icon from 'react-native-vector-icons/FontAwesome';
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
      
     }
  }

  const headers = {
    'headers':{
      'Content-Type': 'application/json'
    }
  }

  function upload(){
    let jsonData = {
      img : capturedPhoto
    }
    setLogin('@Image',JSON.stringify(jsonData));
     
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

        {/* <View style={{position:'absolute',borderRadius:300,borderColor:'#FFF',borderWidth:3,width:350,height:350,alignSelf:'center',top:100}}/> */}

          <TouchableOpacity
            style={styles.uploadFile}
            onPress={takePictureFromAlbum}>
            <FontAwesome name="image" size={30} color="#FFF"/>
        </TouchableOpacity>
      </Camera>

      <TouchableOpacity
            style={styles.button}
            onPress={takePicture}>
            {/* <FontAwesome name="circle" size={60} color="#FFF"/> */}
            <View style={{borderRadius:300,backgroundColor:'#3841F2',borderColor:'#FFF',borderWidth:3,width:60,height:60}}/>
      </TouchableOpacity>
      <TouchableOpacity
            style={styles.flip}
            onPress={toggleCameraType}>
           <FontAwesome4Icon name="rotate-left" size={35} color="#fffa"/>
      </TouchableOpacity>
      
    
    {
      capturedPhoto &&
      <Modal animationType='slide'
      transparent={false}
      visible={open}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:20}}>
            <TouchableOpacity style={{margin:10,top:50,left:30}} onPress={()=>setOpen(false)}>
            <FontAwesome name="window-close" size={30} color="#FF0000"/>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,right:30}} onPress={()=>upload()}>
            <FontAwesome name="check" size={30} color="#3fa836"/>
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
    top:'32%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent:'center',
  },
  flip: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    bottom:'15%',
    marginLeft:5
  },
  uploadFile: {
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