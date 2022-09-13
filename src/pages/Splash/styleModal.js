import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000'
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
    button1:{
        position:'absolute',
        backgroundColor:'#3841F2',
        shadowColor:'#0008A4',
        shadowOpacity:1,
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        bottom:'17%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    button2:{
        position:'absolute',
        backgroundColor:'#FFF',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        bottom:'10%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    buttonText:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold'
    },
    buttonText2:{
        fontSize:24,
        color:'#000000',
        fontWeight:'bold'
    }
})

export default styles