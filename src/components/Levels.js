import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,Alert, Modal } from 'react-native';
import { useState,useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SourceQuestions from './SrcQuestions';
 
const Levels = (props) => {
    const [response, setResponse] = useState('');
    const [responseCorrect, setResponseCorrect] = useState('Fé');
    const [question, setQuestion] = useState('');
    const [isSelect, setIsSelect] = useState(false);
    const [option, setOption] = useState('');
    useEffect(() => {
       const resp = SourceQuestions((props.route.params?.question)-1);
       setResponseCorrect(resp.resp);
       setQuestion(resp.question);
    }, []);

    const compareResp = (resp) => {
        if(resp) {
            return resp == responseCorrect ? true : setError();
        } Alert.alert("Não foi possivel encontrar sua resposta!!");
    }

    const setError = () => { 
        Alert.alert("Resposta incorreta");
    }

    return(
    <View style={style.container}> 
        <Text style={style.question}>{question+` ${option}`}</Text>
        
    {
      isSelect ?
        <View>
        
        <TouchableOpacity style={style.option} onPress={e=>setOption('Hello')}>
            <Text style={style.textOption}>Hello!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.option} onPress={e=>setOption('Olá')}>
            <Text style={style.textOption}>Olá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.option}>
            <Text style={style.textOption}>Café</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.option}>
            <Text style={style.textOption}>Pão</Text>
        </TouchableOpacity>
      </View>
      :
        <View>
          <TextInput
        placeholder='Digite seu Email..'
        style={style.input}
        onChangeText = {text => setResponse(text)}
        />
        <TouchableOpacity onPress={() => {compareResp(response)}} style={style.button}>
            <FontAwesome name="angle-right" size={30} color="#3C3C3C"/>
        </TouchableOpacity>
      </View>
    }
        

    </View>
    )
    
};

/*Style*/

const style = StyleSheet.create({
   container:{
    flex: 1,
   },
   input:{
    top:330,
    padding:10,
    borderColor:'#79797953',
    borderBottomWidth:1,
    borderRadius:10,
    height:40,
    fontSize:16
   },
   question: {
    top:'30%',
    fontSize: 20,
    textAlign: 'justify',
    alignSelf: 'center'
   },
   option: {
    marginTop:5,
    top:330,
    backgroundColor:'#fff',
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius:10,
    width:100,
   },
    textOption:{
    alignSelf:'center',
    fontSize:25
    },
   button: {
    top:340,
    backgroundColor:'#E9EDF0',
    borderRadius:370,
    paddingVertical:8,
    width:50,
    right:20,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-end',
    elevation:11,
    borderWidth:0.5,
    borderColor:'#FEFEFF',
    shadowColor:'#000'
   }
});


export default Levels