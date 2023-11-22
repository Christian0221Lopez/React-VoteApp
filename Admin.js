import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default class AdminScreen extends Component {
  constructor(props) {
    super(props);
    // Simular datos de votos (puedes reemplazar esto con datos reales)
    this.state = {
      votes: [
        { user: 'Usuario1', vote: 'A favor' },
        { user: 'Usuario2', vote: 'En contra' },
        { user: 'Usuario3', vote: 'No votar' },
      ],
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Votos de los usuarios</Text>
        {this.state.votes.map((vote, index) => (
          <View key={index} style={styles.voteContainer}>
            <Text style={styles.voteText}>{`Usuario: ${vote.user}, Voto: ${vote.vote}`}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  voteContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  voteText: {
    fontSize: 16,
  },
});
