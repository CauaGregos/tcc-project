import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,Alert, Modal, FlatList,TouchableWithoutFeedback } from 'react-native';
import { useState,useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SourceQuestions from './SrcQuestions';
import * as Animatable from 'react-native-animatable';
import { whileTabBarVisible } from '../routes/Routes';
import { listenerCount } from 'events';

const Levels = (props) => {
    const [response, setResponse] = useState('');
    const [responseCorrect, setResponseCorrect] = useState('Fé');
    const [question, setQuestion] = useState('');
    const [isSelect, setIsSelect] = useState(false);
    const [option, setOption] = useState('');
    const [options, setOptions] = useState([{}]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isInCorrect, setIsInCorrect] = useState(false);
    const size = Dimensions.get('screen').width
    // estado de opção selecionada
    const [isSelected, setIsSelected] = useState(false);
    const [color, setColor] = useState('#FEFEFF');
    const [color2, setColor2] = useState('#FEFEFF');
    const [color3, setColor3] = useState('#FEFEFF');
    const [color4, setColor4] = useState('#FEFEFF');
    // respondido
    const [answered,setAnswered] =  useState(false);
    const navegate = useNavigation();
    const [verifyColor, setVerifyColor] = useState('#CECECE');
    const [verifyTextColor, setVerifyTextColor] = useState('#544646');
    
   

    const resetParams = () =>{
      setResponse('')
      setResponseCorrect('')
      setQuestion('')
      setIsSelect(false)
      setOption('')
      setOptions([{}])
      setIsCorrect(false)
      setIsInCorrect(false);
      setIsSelected(false)
      setColor('#FEFEFF')
      setColor2('#FEFEFF')
      setColor3('#FEFEFF')
      setColor4('#FEFEFF')
      setVerifyColor('#CECECE')
      setVerifyTextColor('#544646')
      setAnswered(false)
    }
    


    useEffect(() => {
      resetParams(); 
      const resp = SourceQuestions((props.route.params?.question)-1);
      setResponseCorrect(resp.resp);
      setQuestion(resp.question);
      setOptions({op1:resp.op1, op2:resp.op2,op3:resp.op3,op4:resp.op4});
      setIsSelect(resp.hasOptions); 
      
      props.navigation.getParent().setOptions({tabBarStyle:{display: 'none'}});
       return () =>{
        props.navigation.getParent().setOptions({tabBarStyle:whileTabBarVisible()});
       }
    }, [props.route.params?.question]);

    const listenerEvent = (parms,op) => {
      setOption(parms)
      select(op);
    };

    const renderOptions = (parms,op,style) => { 
      return (
      <View >
      <TouchableOpacity disabled={answered} style={style} onPress={e=>listenerEvent(parms,op)}>
      <Text style={styles.textOption}>{parms}</Text>
      </TouchableOpacity>
      </View>
      );
  }

    const compareResp = (resp) => {
      console.log(resp)
        if(resp) {
            setAnswered(true);
            return resp == responseCorrect ? setIsCorrect(true) : setError();
        } Alert.alert("Não foi possivel encontrar sua resposta!!");
    }

    const setError = () => { 
        // Alert.alert("Resposta incorreta");
        // navegate.navigate('SplashBLevel',{question:props.route.params?.question+1,planet:'EarthGame'})
        setIsInCorrect(true);
    }

    const select = (e) => {
      if(!isSelected){
        
        if(e == 1){setColor('#C3C6FC')}
        if(e == 2){setColor2('#C3C6FC')}
        if(e == 3){setColor3('#C3C6FC')}
        if(e == 4){setColor4('#C3C6FC')}
        setVerifyColor('#3841F2')
        setVerifyTextColor('#FFF')
        setIsSelected(true);
        
      }
      else {
        resetColors();
        setOption('')
        setIsSelected(false)
      }
      
    }

    const resetColors = ()=>{
      setColor('#FEFEFF')
      setColor2('#FEFEFF')
      setColor3('#FEFEFF')
      setColor4('#FEFEFF')
      setVerifyColor('#CECECE')
      setVerifyTextColor('#544646')
    }



    return(
    <View style={styles.container}> 
      <Image style={{position:'absolute',width:'100%'}} source={require('../pages/assets/backgroundBi.png')}/>

        
        
    {
      isSelect ?
      
        <Animatable.View animation={'fadeInUp'} style= {styles.containerFade}>   
        <Text style={styles.question}>{question+` ${option}`}</Text>
              {options.op1 ? renderOptions(options.op1, 1, {
                marginTop: 10,
                top: 250,
                backgroundColor: color,
                fontSize: 30,
                textAlign: 'center',
                alignSelf: 'center',
                borderRadius: 20,
                width: 300,
                height: 50,
                elevation: 11,
                shadowColor: '#000',
              }) : null}

              {options.op2 ? renderOptions(options.op2, 2, {
                marginTop: 10,
                top: 250,
                backgroundColor: color2,
                fontSize: 30,
                textAlign: 'center',
                alignSelf: 'center',
                borderRadius: 20,
                width: 300,
                height: 50,
                elevation: 11,
                shadowColor: '#000',
              }) : null}

              {options.op3 ? renderOptions(options.op3, 3, {
                marginTop: 10,
                top: 250,
                backgroundColor: color3,
                fontSize: 30,
                textAlign: 'center',
                alignSelf: 'center',
                borderRadius: 20,
                width: 300,
                height: 50,
                elevation: 11,
                shadowColor: '#000',
              }) : null}

              {options.op4 ? renderOptions(options.op4, 4, {
                marginTop: 10,
                top: 250,
                backgroundColor: color4,
                fontSize: 30,
                textAlign: 'center',
                alignSelf: 'center',
                borderRadius: 20,
                width: 300,
                height: 50,
                elevation: 11,
                shadowColor: '#000',
              }) : null}

        <TouchableOpacity onPress={e=>compareResp(option)} style={{ 
          marginTop:75,
          top:300,
          backgroundColor:verifyColor,
          fontSize: 30,
          textAlign: 'center',
          alignSelf: 'center',
          borderRadius:20,
          width:300,
          height: 50
      }}><Text style={{ 
        alignSelf:'center',
        fontSize:25,
        color: verifyTextColor,
        textAlign: 'center',
        top: 6
      }}>Verify</Text></TouchableOpacity>
        {
          isCorrect &&
          // o nome da props planet vai ser a fase que ele vai voltar quando finalizar as 3 questoes
          <TouchableWithoutFeedback onPress={e => {navegate.navigate('SplashBLevel',{question:props.route.params?.question+1,planet:'Earth'})}}>
          <Animatable.Image
          animation={'fadeInUp'}
            style={{width:size,height:220,top:size+218,position:'absolute'}}
            source={require('../pages/assets/robotGreen.png')}
            />
            </TouchableWithoutFeedback>
        }
        {
            isInCorrect &&
            <TouchableWithoutFeedback onPress={e => {navegate.navigate('SplashBLevel',{question:props.route.params?.question+1,planet:'Earth'})}}>
              <Animatable.Image
              animation={'fadeInUp'}
                style={{width:size,height:220,top:size+218,position:'absolute'}}
                source={require('../pages/assets/robotRed.png')}
                />
            </TouchableWithoutFeedback>
        }
       
      </Animatable.View>
      :
        <View style= {styles.containerFade}>
          <Text style={styles.question}>{question+` ${option}`}</Text>
          <TextInput
        placeholder='Digite seu Email..'
        style={styles.input}
        value = {option}
        onChangeText = {text => setOption(text)}
        />
        <TouchableOpacity onPress={e=>compareResp(option)} style={styles.button}>
            <FontAwesome name="angle-right" size={30} color="#3C3C3C"/>
        </TouchableOpacity>
        {
          isCorrect &&
          // o nome da props planet vai ser a fase que ele vai voltar quando finalizar as 3 questoes
          <TouchableWithoutFeedback onPress={e => {navegate.navigate('SplashBLevel',{question:props.route.params?.question+1,planet:'Earth'})}}>
          <Animatable.Image
          animation={'fadeInUp'}
            style={{width:size,height:220,top:size+218,position:'absolute'}}
            source={require('../pages/assets/robotGreen.png')}
            />
            </TouchableWithoutFeedback>
        }
        {
            isInCorrect &&
            <TouchableWithoutFeedback onPress={e => {navegate.navigate('SplashBLevel',{question:props.route.params?.question+1,planet:'Earth'})}}>
              <Animatable.Image
              animation={'fadeInUp'}
                style={{width:size,height:220,top:size+218,position:'absolute'}}
                source={require('../pages/assets/robotRed.png')}
                />
            </TouchableWithoutFeedback>
        }
      </View>
    }
    </View>
    )
    
};

/*Style*/

const styles = StyleSheet.create({
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
    backgroundColor:'#FEFEFF',
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius:20,
    width:300,
    height: 50,
    elevation:11,
    shadowColor: '#000',
   },
   option2: {
    marginTop:10,
    top:250,
    backgroundColor:'#FEFEFF',
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius:20,
    width:300,
    height: 50,
    elevation:11,
    shadowColor: '#000',
   },
   option3: {
    marginTop:10,
    top:250,
    backgroundColor:'#FEFEFF',
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius:20,
    width:300,
    height: 50,
    elevation:11,
    shadowColor: '#000',
   },
   option4: {
    marginTop:10,
    top:250,
    backgroundColor:'#FEFEFF',
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius:20,
    width:300,
    height: 50,
    elevation:11,
    shadowColor: '#000',
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