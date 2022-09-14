import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#202020',
       
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
        color: '#838089',
    },
    input:{
        padding:5,
        borderWidth:1,
        borderColor:'#79797953',
        borderRadius:5,
        height:40,
        fontSize:16,
        marginTop:10
    },
    button:{
        top:330,
        position:'absolute',
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
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
    },
    buttonRegister:{
        top:'42%',
        marginTop:14,
        alignSelf:'center'
    },
    registerText:{
        color:'#a1a1a1a1'
    },
    textVisible:{
        color:'#a1a1a1aa',
        flexDirection: 'row',
        elevation:10,
        shadowColor:'#000'
    },
    CheckBox: {
        color:'#5A4FCF',
        flexDirection: 'row'
    }
})

export default styles