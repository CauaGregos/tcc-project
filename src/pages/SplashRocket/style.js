import { StyleSheet,Dimensions } from "react-native"
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000'
    },
    containerLogo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'50%',
        bottom:120
    },
    animatedBackground:{
        width: width,
        position: 'absolute',
        backgroundColor:'#241d28'
    },
    containerLogo2:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        width:'25%',
        bottom:480
    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopRightRadius: 25,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        bottom:'10%',
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12,
        color:'#5A4FCF'
    },
    text:{
        color:'#a1a1a1'
    },
    button:{
        position:'absolute',
        backgroundColor:'#5A4FCF',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    buttonText:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold'
    }
})

export default styles