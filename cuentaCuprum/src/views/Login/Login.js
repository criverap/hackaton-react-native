import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, Button } from 'react-native';
import isValidUser from './../../api/HttpsController'
import ErrorModal from './../Modals/ErrorModal'

export default class Login extends React.Component {

state = {
    rut:'',
    password: '',
    modalState: false
}

async logIn(){
    const jsonResponse = await isValidUser(this.state.rut);

    if (jsonResponse) {
        return this.props.navigation.navigate('Home')
    } else {
        this.setState({modalState: true})
    }
}

    updateModalState(currentState){
        this.setState({ modalState: currentState})
    }

    render() {
        let modal = () => {
            if (this.state.modalState){
                return <ErrorModal showModal={true} updateModal={this.updateModalState.bind(this)} />
            } 
        }
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

                <TouchableOpacity
                    onPress={() => { this.logIn() }} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity> 
                {modal()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column'
    }, logo:{
        width:200,
        height:50,
        marginTop: 60,
        alignSelf: 'center',
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
    }, button: {
        width: 270,
        height: 56,
        alignSelf: 'center',
        backgroundColor: '#ffa409',
        justifyContent: 'center',
        borderRadius: 5
    }, buttonText:{
        fontSize: 25,
        color:'#fff',
        alignSelf: 'center'
    }
});
