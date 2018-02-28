import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import cssta from 'cssta/native'

export default class Login extends React.Component {

state = {
    rut:'',
    password: ''
}

    render() {
        return (
            <View style={styles.container}>
                <Image 
                    style={styles.logo}
                    source={require('./logo_cuprum.png')}
                />
                <Text style={styles.title}>
                Ingresa con tu cuenta Cuprum</Text>
                
                <View style={styles.inputs}>
                    <Text style={styles.label}>Rut</Text>
                    <TextInput
                    style={{ width:200}}
                    placeholder='Ej: 17563829-6'
                    onChangeText={(rut)=>this.setState({rut})}
                    />
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                    secureTextEntry={true}
                    style={{ width: 200 }}
                    placeholder='Ingresa tu contraseña'
                    onChangeText={(password) => this.setState({password})}
                    />
                </View>

                <Button
                    color="#ffa409"
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Ingresar"
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column'
       /* justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'column',*/
    }, logo:{
        width:200,
        height:50,
        marginTop: 60,
        alignSelf: 'center',
    }, completeButton:{
        alignSelf: 'center',
        marginTop: 40,
    }, title: {
        marginTop: 100,
        marginBottom: 5,
        fontWeight: '200',
        fontSize:18,
        color:'#4d4d4d',
        alignSelf: 'center',
    }, label:{
        marginTop: 30
    }, inputs:{
        alignSelf:'center',
        marginBottom:50
    }


});
