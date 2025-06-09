import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

export default function ProductScreen({ onBack }) {
  return (
    <View style={styles.container}>
    <Header logo={require('../../assets/images/logo.png')} />
      <ScrollView contentContainerStyle={styles.scroll}>
          <Image source={require('../../assets/images/product3.jpg')} style={styles.image} />

          <Text style={styles.title}>Jaqueta Windbreaker com Capuz</Text>

          <Text style={styles.description}>
            A Jaqueta Windbreaker com Capuz da Lacoste é uma peça de vestuário funcional e estilosa, projetada para proteger contra o vento e, em alguns casos, chuva leve, sem sacrificar o visual elegante e esportivo característico da marca francesa. É uma peça versátil, ideal para atividades ao ar livre, prática de esportes ou para compor um look casual com um toque atlético.
          </Text>

          <Text style={styles.price}>R$ 1.199,000</Text>
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