import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';


export default class ErrorModal extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isError: this.props.showModal
        }
    }

    openModal() {
        this.setState({ isError: true })
    }

    closeModal() {
        console.log("closeModal")
        this.setState({ isError: false })
        this.props.updateModal(false)
    }
    
    render() {
        return (
            <View>
                <Modal
                    visible={this.state.isError} transparent={true}
                    animationType={'none'}
                    onRequestClose={() => this.closeModal()}>
                    <View style={styles.errorModal}>
                        <View style={styles.innerErrorModal}>
                            <Text style={styles.modalText}>Datos Incorrectos</Text>
                            <TouchableOpacity
                                onPress={() => this.closeModal()}
                                style={styles.button}>
                                <Text style={styles.buttonText}>Aceptar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 270,
        height: 56,
        alignSelf: 'center',
        backgroundColor: '#ffa409',
        justifyContent: 'center',
        borderRadius: 5
    }, buttonText: {
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center'
    }, modalText: {
        fontSize: 18,
        marginBottom: 15,
        color: '#184371'
    },
    errorModal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    innerErrorModal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 140,
        width: 340,
        alignSelf: 'center'
    }
})
