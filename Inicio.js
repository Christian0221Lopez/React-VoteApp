import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Modal, TextInput, Pressable,Alert } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

const stylesA = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#d77674",
  },
  imagen1: {
    flex: 3,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: "#9c2208",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 500,
    marginBottom: 20,
    height: 200,
    width: 410,
    borderRadius: 40,
    borderColor: 'black',
  },
  texto: {
    color: 'black',
    fontSize: 25,
    alignItems: 'center',
  },
  textoTitle: {
    color: '#201F1F',
    fontSize: 25,
    alignItems: 'up',
    marginTop: 10,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 15,
    padding: 5,
    elevation: 2,
    backgroundColor: 'gray',
  },
  title: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 2, height: 3 }, 
    textShadowRadius: 5, 
    fontSize: 30,
  }, 
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  ModalContent: {
    backgroundColor: "#b692ae",
    marginTop: 200,
    fontSize: 50,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
    },
  btnmodal:{
    borderWidth: 2, 
    backgroundColor: "#9792b6", 
    width: 200, 
    height: 30, 
    padding: 4,
    borderColor: "black", 
    borderRadius: 40, 
    alignItems: 'center', 
    marginTop: 25,
  },
  buttonfb: {
    borderRadius: 15,
    padding: 5,
    elevation: 2,
    backgroundColor: '#345AF4',
  },
  buttonE: {
    borderRadius: 15,
    padding: 5,
    elevation: 2,
    backgroundColor: '#F43A34',
  },
  Sign: {
    fontSize: 25,
    alignItems: 'center',
  },
});

export default class Inicio extends Component 
{
  static contextType = NavigationContext;
  constructor(props) 
  {
    super(props);
    this.state = {
      modalOpen: false, // Agrega modalOpen al estado del componente
      nombre: '',
      codigo: '', // Estado para guardar el contenido del campo de email
      password: '',
      isRegis: false,
      isRegisA: false,
    };
  }

    // Función para abrir el modal
    openModal = () => 
    {
      this.setState({ modalOpen: true });
    }

    // Función para cerrar el modal
    closeModal = () => 
    {
      this.setState({ modalOpen: false });
    }

    // Funciones para actualizar el estado de los campos de texto
    handleCodigoChange = (text) => 
    {
      this.setState({ codigo: text });
      console.log("Codigo:", text); // Agregar un console.log para el email
    }

    handleContraseñaChange = (text) => 
    {
      this.setState({ password: text });
      console.log("Contraseña:", text); // Agregar un console.log para la contraseña
    }

    handleNombreChange = (text) => 
    {
      this.setState({ nombre: text });
      console.log("Nombre:", text); // Agregar un console.log para la contraseña
    }

  render() {
    
    const navigation = this.context;

    const action1 = () => 
    {
      navigation.navigate("Inscripcion");
    }

    const MenuEnt = () =>
    {
      navigation.navigate("Menu");
    }


    const MenuAdmn = () =>
    {
      navigation.navigate("Admin");
    }

    // ... (código anterior)
    const Verifica = () => {
      const self = this; // Almacena el valor de 'this' en una variable 'self'
    
      // conexión con el servidor
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          if (xhttp.responseText === "1") {
            Alert.alert("El usuario está registrado");
    
            // Accede al 'isRegis' a través de 'self' en lugar de 'this'
            self.setState({ isRegis: true });
          } else if (xhttp.responseText === "0") {
            Alert.alert("Usuario Administrador Encontrado");
            self.setState({ isRegisA: true });
          } else {
            Alert.alert("Hubo un error, intenta nuevamente");
          }
        }
      };
      xhttp.open("GET","https://voteappweb.000webhostapp.com/datos/Access.php?codigo=" + self.state.codigo + "&password=" + self.state.password, true);
      xhttp.send();
    }

    return (
      <View style={stylesA.fondo}>
      <Modal visible={this.state.modalOpen} animationType="slide">
          <View style={stylesA.ModalContent}>
            <Text style={stylesA.texto}>Ingresa tu Codigo:</Text>
            <TextInput
              style={stylesA.input}
              placeholder="Codigo"
              value={this.state.codigo}
              onChangeText={this.handleCodigoChange}
            />
            <Text style={stylesA.texto}>Contraseña:</Text>
            <TextInput
              style={stylesA.input}
              placeholder="Contraseña"
              secureTextEntry={true} // Para ocultar la contraseña
              value={this.state.password}
              onChangeText={this.handleContraseñaChange}
            />
            <Pressable style={stylesA.btnmodal} title="Enviar datos" onPress={Verifica}>
              <Text>Enviar datos</Text>
            </Pressable>
              <Pressable onPress={this.closeModal}>
              <Text styles = {stylesA.texto}> Cierra Pestaña </Text>
            </Pressable>

            {this.state.isRegis && ( // Condición para mostrar u ocultar el Pressable
      <Pressable style={stylesA.button} onPress={MenuEnt}>
        <Text style={stylesA.texto}>Entrar</Text>
      </Pressable>
    )}

{this.state.isRegisA && ( // Condición para mostrar u ocultar el Pressable
      <Pressable style={stylesA.button} onPress={MenuAdmn}>
        <Text style={stylesA.texto}>Entrar Admin</Text>
      </Pressable>
    )}

          </View>
        </Modal>

        <ImageBackground
          source={require('./Imagenes/vote.png')}
          style={stylesA.imagen1}
        >
          <View style={stylesA.container}>
            <Text style={[stylesA.textoTitle, stylesA.title ]}>Votaciones :PP </Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>

            <Pressable style={[stylesA.buttonfb]} onPress={this.openModal}>
              <Text style={stylesA.texto}>Log In With SIIAU :D</Text>
            </Pressable>
            <Text></Text>

            <Text>{'\n'}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
