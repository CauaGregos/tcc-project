import React, { useRef } from 'react';
import {View, BackHandler, Dimensions, Touchable, Pressable,Text} from 'react-native';
import LottieView from 'lottie-react-native';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';




const Home = (props) => {

    const [alunos, setAlunos] = useState([]);
    const axios = require('axios');
    const [logado,setLogado] = useState([true]);
    const width = Dimensions.get('screen').width;
    const [test,setTest] = useState('');
   
    const navigate = useNavigation()

      async function getData() {
        const teste = await AsyncStorage.getItem('@User')
        if (teste) {setTest(teste)}
        const data = JSON.parse(teste)
        console.log(data.email);
      }  


      useEffect(()=>{
        getData()
        axios.get('https://app-tc.herokuapp.com/alunos')
          .then(res =>{
              const data = res.data
              for(let i = 0; i<data.length; i++){
                
                setAlunos(data[i]);
            }
          })
          .catch(err =>{
            
          })
      },[])
      

      const logout = () =>{
        setLogado(false)
        navigate.navigate('Singin')
      }

      

    return (
        
        <View>
          <LottieView style={{width:width, backgroundColor:'#241d28'}}
            source={require('../assets/background.json')}
            loop={true}
            autoPlay
          />
          
          <LottieView style={{top:'-40%', width:'30%', left:'45%' }}
            source={require('../assets/marte.json')}
            loop={true}
            autoPlay
            />
            

            <LottieView style={{top:'-65%', width:'30%', left:'10%' }}
            source={require('../assets/netuno.json')}
            loop={true}
            autoPlay
            />
           
            
           
            <LottieView style={{top:'-40%', width:'30%', left:'10%' }}
            source={require('../assets/terra.json')}
            loop={true}
            autoPlay
            />

           
       
           
           

        </View>

      
        

        
    );
}


export default Home;