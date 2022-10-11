import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,Alert, Modal, FlatList } from 'react-native';
import { useState,useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SourceQuestions from './SrcQuestions';
import * as Animatable from 'react-native-animatable';
const Levels = (props) => {
    const [response, setResponse] = useState('');
    const [responseCorrect, setResponseCorrect] = useState('Fé');
    const [question, setQuestion] = useState('');
    const [isSelect, setIsSelect] = useState(false);
    const [option, setOption] = useState('');
    const [options, setOptions] = useState([{}]);
    const [startAnim, setStartAnim] = useState(false);

    useEffect(() => {
      const resp = SourceQuestions((props.route.params?.question)-1);
       setResponseCorrect(resp.resp);
       setQuestion(resp.question);
       setOptions({op1:resp.op1, op2:resp.op2,op3:resp.op3,op4:resp.op4});
       setIsSelect(resp.hasOptions); 
    }, []);

    const compareResp = (resp) => {
        if(resp) {
            return resp == responseCorrect ? setStartAnim(true) : setError();
        } Alert.alert("Não foi possivel encontrar sua resposta!!");
    }

    const setError = () => { 
        Alert.alert("Resposta incorreta");
    }

    const renderOptions = (parms) => { 
        return (
        <View >
        <TouchableOpacity style={style.option} onPress={e=>setOption(parms)}>
        <Text style={style.textOption}>{parms}</Text>
        </TouchableOpacity>
        </View>
        );
    }

    return(
    <View style={style.container}> 
      <Image style={{position:'absolute',width:'100%'}} source={require('../pages/assets/backgroundBi.png')}/>

        
        
    {
      isSelect ?
      
        <View style= {style.containerFade}>   
        <Text style={style.question}>{question+` ${option}`}</Text>
        {options.op1 ? renderOptions(options.op1):null}
        {options.op2 ? renderOptions(options.op2):null}
        {options.op3 ? renderOptions(options.op3):null}
        {options.op4 ? renderOptions(options.op4):null}
        <TouchableOpacity style={style.verify}><Text style={style.verifyText}>Verify</Text></TouchableOpacity>
        
       
      </View>
      :
        <View style= {style.containerFade}>
          <Text style={style.question}>{question+` ${option}`}</Text>
          <TextInput
        placeholder='Digite seu Email..'
        style={style.input}
        onChangeText = {text => setResponse(text)}
        />
        <TouchableOpacity onPress={() => {compareResp(response)}} style={style.button}>
            <FontAwesome name="angle-right" size={30} color="#3C3C3C"/>
        </TouchableOpacity>
        {
          startAnim &&
          <Animatable.Image
          animation={'fadeInUp'}
            style={{width:438,height:199,right:15,top:243}}
            source={require('../pages/assets/robotGreen.png')}
            />}
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
    borderWidth:1,
    borderRadius:20,
    paddingTop: 10,
    textAlignVertical: 'top',
    height:250,
    fontSize:16
   },
   question: {
    top:'15%',
    position:'absolute',
    fontSize: 20,
    textAlign: 'justify',
    alignSelf: 'center'
   },
   containerFade:{
    backgroundColor:'#FFF',
    flex:1,
    top:"5%",
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%'
},
   option: {
    marginTop:10,
    top:250,
    backgroundColor:'#fff',
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius:20,
    width:300,
    height: 50,
    elevation:11,
    shadowColor: '#000',
   },
    verify: {
      marginTop:75,
      top:300,
      backgroundColor:'#CECECE',
      fontSize: 30,
      textAlign: 'center',
      alignSelf: 'center',
      borderRadius:20,
      width:300,
      height: 50
   },
    textOption:{
    alignSelf:'center',
    fontSize:25,
    top: 6
    },
    verifyText:{
      alignSelf:'center',
      fontSize:25,
      color: '#544646',
      textAlign: 'center',
      top: 6
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