import { StyleSheet, Dimensions } from "react-native"
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    animatedBackground:{
        width: width,
        scaleX:1.2,scaleY:1.2,
        backgroundColor:'#241d28'
    },
    IOSearth:{
        top: '-13%',
        width: '125%',
        alignSelf: 'center'
    },
    ANDROIDearth:{
        top: '-20%',
        width: '300%',
        alignSelf: 'center'
    },
    IOSmars:{
        top: '-13%',
        width: '125%',
        alignSelf: 'center'
    },
    ANDROIDmars:{
        top: '-20%',
        width: '300%',
        alignSelf: 'center'
    },
    IOSneptune:{
        top: '-13%',
        width: '125%',
        alignSelf: 'center'
    },
    ANDROIDneptune:{
        top: '-20%',
        width: '300%',
        alignSelf: 'center'
    },
    IOSrocket:{
        top:'-46%',
        alignSelf: 'center',
        width: 150
    },
    ANDROIDrocket:{
        top:'-67%',
        alignSelf: 'center',
        width: 150
    }


});

export default styles