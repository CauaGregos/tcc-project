import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#202020'
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
    title:{
        fontSize:20,
        marginTop:28,
        color: '#838089'
    },
    input:{
        padding:5,
        borderWidth:1,
        borderColor:'#79797953',
        borderRadius:5,
        height:40,
        marginBottom:12,
        fontSize:16,
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
    imagePerfil:{
       justifyContent:'center',
       alignItems:'center'
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
        top:"16%",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    }
})

export default styles