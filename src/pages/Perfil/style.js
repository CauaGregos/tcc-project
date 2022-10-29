import React from "react"
import { StyleSheet,Dimensions } from "react-native"
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%',
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#FFF'
    },
    containerForm:{
        backgroundColor:'#FFF',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    progressView:{
        borderColor: '#3841F2',
        borderWidth: 2,
        height: 15,
        width: "90%",
        height: "5%",
        alignSelf: 'center',
        backgroundColor:'#3841F2',
        borderRadius: 25,
        bottom: 180,
        flexDirection:'row'
       
    },
    description:{
        alignSelf:'center'
    },
    title:{
        top:'-26%',
        color:'#FFF',
        fontSize:19,
        alignSelf:'center',
        width:"100%",
        textAlign: "center",
        fontWeight:'bold',
    },
    card:{
        alignSelf:'center',
        borderColor:'#000',
        borderWidth:2,
        borderColor:'#969696',
        borderRadius:30,
        width:350,
        marginBottom:30,
    },
    titleCard:{
        fontSize:18,
        alignSelf:'center',
        bottom:50,
        fontWeight:'bold',
    },
    numberData:{
        fontSize:18,
        alignSelf:'center',
        bottom:35,
        right:27,
        fontWeight:'bold',
    },
    titleProgress:{
        fontWeight:'bold',
        fontSize:18,
        alignSelf:'flex-start',
        left:15
    },
    titleSetting:{
        alignSelf:'flex-end',
        right:15,
        bottom:'40%'
    },
    title2:{
        fontSize:14,
        alignSelf:'flex-start',
        paddingTop:'1%',
        position:'absolute',
        textAlign:'left',
        top:'27.4%',
    },
    title3:{
        fontSize:14,
        alignSelf:'flex-start',
        paddingTop:'1%',
        position:'absolute',
        textAlign:'left',
        top:'53.2%',
    },
    title4:{
        fontSize:14,
        alignSelf:'flex-start',
        paddingTop:'1%',
        position:'absolute',
        textAlign:'left',
        top:'77.2%',
    },
    separetor:{
        width:'100%',
        borderTopWidth:1,
        borderColor:'#79797953',
    },
    input:{
        padding:5,
        borderColor:'#79797953',
        borderRadius:5,
        marginBottom:12,
        fontSize:16,
        position:'relative',
        alignSelf:'flex-end',
        width:"60%",
        textAlign: "right",
    },
    
    button:{
        backgroundColor:'#5A4FCF',
        borderRadius:10,
        paddingVertical:8,
        width:'42%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
    },
    buttonRegister:{
        marginTop:3,
        alignSelf:'center'
    },
    registerText:{
        color:'#a1a1a1a1'
    },
    containerInfos:{
        backgroundColor:'#FFF',
        flex:1,
        top:"31%",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    button2:{
        top:150,
        position:'absolute',
        backgroundColor:'#3841F2',
        shadowColor:'#0008A4',
        shadowOpacity:1,
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
})

export default styles