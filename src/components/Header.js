import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Header = (props) => (
    <View style={style.container}>
        
    </View>
);

/*Style*/

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderColor: 'black',
        
        
    },

    title: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'center'
    }
});


export default Header