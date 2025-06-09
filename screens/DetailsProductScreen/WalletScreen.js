import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

export default function ProductScreen({ onBack }) {
  return (
    <View style={styles.container}>
    <Header logo={require('../../assets/images/logo.png')} />
      <ScrollView contentContainerStyle={styles.scroll}>
          <Image source={require('../../assets/images/product8.jpg')} style={styles.image} />

          <Text style={styles.title}>Relógio Lacoste Moon</Text>

          <Text style={styles.description}>
            Deixe a sofisticação sutil brilhar em seu pulso com o Relógio Lacoste Moon. Este elegante acessório personifica a essência da Lacoste: um design clean e atemporal com um toque de modernidade discreta. Mais do que um simples marcador de tempo, o Moon é uma declaração de estilo refinado e minimalista.
          </Text>

          <Text style={styles.price}>R$ 1.059,00</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 30,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',

  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    lineHeight: 22,
  },
  price: {
    fontSize: 22,
    color: '#238E23',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#238E23',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});