import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

export default function ProductScreen({ onBack }) {
  return (
    <View style={styles.container}>
    <Header logo={require('../../assets/images/logo.png')} />
      <ScrollView contentContainerStyle={styles.scroll}>
          <Image source={require('../../assets/images/product2.jpg')} style={styles.image} />

          <Text style={styles.title}>Polo Lacoste Sport Ultra-Dry</Text>

          <Text style={styles.description}>
           Supere seus limites com conforto e estilo impecável. A Polo Lacoste Sport Ultra-Dry é a escolha ideal para atletas e entusiastas do esporte que buscam o máximo desempenho sem abrir mão da sofisticação característica da Lacoste. Desenvolvida com tecnologia de ponta, esta polo é sua parceira perfeita para treinos intensos, partidas emocionantes e momentos de lazer ativo.
          </Text>

          <Text style={styles.price}>R$ 549,00</Text>
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