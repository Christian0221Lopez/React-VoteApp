import React, { Component } from 'react';
import { View, Text, Button, Alert, Modal, StyleSheet, Pressable, ImageBackground } from 'react-native';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caso: 1,
      hasVoted: false,
      countdown: 5,
      isCountdownVisible: false,
    };
  }

  handleVote = (vote) => {
    if (!this.state.hasVoted) {
      Alert.alert('Haz votado');
      this.setState({ hasVoted: true, isCountdownVisible: true });

      // Iniciar la cuenta regresiva
      this.countdownInterval = setInterval(() => {
        if (this.state.countdown > 0) {
          this.setState((prevState) => ({
            countdown: prevState.countdown - 1,
          }));
        } else {
          // Cuando la cuenta regresiva llega a cero, mostrar "OK" y reiniciar el estado
          clearInterval(this.countdownInterval);
          this.setState({
            isCountdownVisible: false,
            countdown: 5,
            caso: this.state.caso + 1,
            hasVoted: false,
          });
        }
      }, 1000);
    }
  };

  render() {
    return (
        <ImageBackground source={require('./Imagenes/font.png')}
        style={stylesA.imagen1}>

       
      <View style={stylesA.buttonContainer}>
        <Text style={stylesA.Title}> Votacion </Text>
        <Text style={stylesA.Caso}> Caso {this.state.caso}</Text>

        <Pressable style={stylesA.BotonVote} onPress={() => this.handleVote('A favor')}>
            <Text style={stylesA.Texto}> A FAVOR </Text>
        </Pressable>

        <Pressable style={stylesA.BotonContra} onPress={() => this.handleVote('En contra')}>
            <Text style={stylesA.Texto}> EN CONTRA </Text>
        </Pressable>

        <Pressable style={stylesA.BotonNo} onPress={() => this.handleVote('No votar')}>
            <Text style={stylesA.Texto}> NO VOTAR </Text>
        </Pressable>



        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.isCountdownVisible}
        >
          <View style={ stylesA.ContModal} >
            <Text style={{ color: 'white', fontSize: 24 }}>
              {this.state.countdown}
            </Text>
            {this.state.countdown === 0 && (
              <Text style={{ color: 'white', fontSize: 24 }}>OK</Text>
            )}
          </View>
        </Modal>
      </View>
      </ImageBackground>
    );
  }
}

const stylesA = StyleSheet.create({
    BotonVote: {
      backgroundColor: '#68c762',
      borderRadius: 20,
      padding: 5,
      elevation: 2,
      marginTop: 70,
      height: 80,
      width: 300,
      marginLeft: 50,
    },
    BotonContra: {
        backgroundColor: '#e13c34',
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        marginTop: 90,
        height: 80,
      width: 300,
      marginLeft: 50,
      },
    BotonNo: {
        backgroundColor: '#a1b2b1',
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        marginTop: 110,
        height: 80,
      width: 300,
      marginLeft: 50,
      },

    buttonContainer: {
        flexDirection: 'file',
        justifyContent: 'space-around',
        marginTop: 20,
      },
    ContModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
    Texto: {
        fontSize: 20,
        fontFamily: 'Arial',
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    },
    Title: {
        textAlign: 'center',
        fontSize: 80,
        color: '#b01a1a',
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 5, 
        fontWeight: 'bold',
    },
    Caso: {
        textAlign: 'left',
        fontSize: 40,
        color: 'black',
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: { width: 2, height: 3 }, 
        textShadowRadius: 5,
        marginTop: 30,
        fontWeight: 'bold',
    },
    imagen1: {
        flex: 3,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
});

