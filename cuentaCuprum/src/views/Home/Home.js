import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import NumberFormat from 'react-number-format'

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
        const { params } = this.props.navigation.state
        return (
            <View style={styles.container}>
                <Image 
                    style={styles.logo}
                    source={require('./../resources/images/logo_cuprum.png')}
                />
                <Text style={styles.welcomeText}>Hola {params.name} tu ahorro total es </Text>
                <Text style={styles.userBalanceText}>
                <NumberFormat 
                    value={params.amount} 
                    displayType={'text'} 
                    decimalScale={0} 
                    thousandSeparator={true} 
                    prefix={'$'}
                    renderText={value => <Text>{value}</Text>}/>
                </Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }, logo:{
        width: 200,
        height: 40,
        alignSelf: 'center',
        marginTop: 30,
        resizeMode: 'contain'
    }, welcomeText:{
        marginTop: 80,
        color:'#184371',
        fontSize:24,
        textAlign: 'center'
    }, userBalanceText:{
        color:'#184371',
        fontSize: 36,
        textAlign: 'center'
    }
});
