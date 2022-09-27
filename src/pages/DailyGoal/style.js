import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12,
        color:'#FFF',
    },
    earthButton:{
        top:'-40%',
         width:'30%',
          left:'10%' 
    },
    containerForm:{
        top:100,
        backgroundColor:'#FFF',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    containerLogo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'70%',
        bottom:220
    },
    neptuneButton:{
        top:'-65%',
         width:'30%', 
         left:'10%'
    },

    marsButton:{
        top:'-40%', 
        width:'30%', 
        left:'45%' ,
        
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
    },
    button:{
        marginTop:10,
        backgroundColor:'#E9EDF0',
        borderRadius:370,
        paddingVertical:8,
        width:'55%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        elevation:11,
        borderWidth:0.5,
        borderColor:'#FEFEFF',
        shadowColor:'#000',
        
    },
    buttonAceppt:{
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
        alignSelf:'flex-start',
        elevation:11,
        borderWidth:0.5,
        borderColor:'#FEFEFF',
        shadowColor:'#000'
    },
})

export default styles