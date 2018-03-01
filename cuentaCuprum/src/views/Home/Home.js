import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Inicio',
        headerLeft: null,
        headerTitleStyle: {
            color:'#030303',
            flex: 1, 
            textAlign:'center',
            alignSelf:'center',
            
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Ingreso Exitoso</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    }, welcomeText:{
        color:'#184371',
        fontSize:22,
        marginBottom:200
    }
});
