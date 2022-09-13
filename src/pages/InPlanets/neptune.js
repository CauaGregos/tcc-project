import React, { useRef } from 'react';
import {View, BackHandler, Dimensions, Touchable, Pressable} from 'react-native';
import LottieView from 'lottie-react-native';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style'




const Neptune = (props) => {

    const [alunos, setAlunos] = useState([]);
    const axios = require('axios');
    const [logado,setLogado] = useState([true]);
    const width = Dimensions.get('screen').width;
    
   
    const navigate = useNavigation()
  
      useEffect(()=>{
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
      // bloquear a volta da pagina 
      useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress',() => true)
        return() =>{
          BackHandler.addEventListener('hardwareBackPress',() => true)
        }
      }, []);

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
          
          
           
          
            <LottieView style={{top:'-23%', width:'300%', right:'25%' }}
            source={require('../assets/netuno.json')}
            loop={true}
            autoPlay
            />

           

        </View>

      
        

        
    );
}


export default Neptune;