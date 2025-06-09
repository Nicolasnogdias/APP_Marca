import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  fontSize,
} from 'react-native';
// Componentes básicos do React Native:
// - View: container para outros componentes (como div no HTML)
// - Text: exibe textos
// - Image: exibe imagens
// - ScrollView: permite rolagem do conteúdo
// - StyleSheet: para estilização

import Header from '../components/Header';
// Importa nosso componente de cabeçalho personalizado

const HomeScreen = () => {
  // Componente da tela inicial
  return (
    <ScrollView style={styles.container}>
      {/* ScrollView permite rolar quando o conteúdo é maior que a tela */}
      <Header logo={require('../assets/images/logo.png')} />
      {/* Componente Header com a logo */}

      <View style={styles.content1}>
        <Text style={styles.title}>Bem-vindo à </Text>
        {/* Texto com estilo de título */}
      </View>

      <Image
        source={require('../assets/images/banner.png')}
        style={styles.banner}
      />
      {/* Imagem de banner com ajuste para cobrir o espaço */}

      <View style={styles.content2}>
        <Text style={styles.texto}>
          {'\n'} {'\n'} O que é a Lacoste?
        </Text>
        {/* Texto descritivo */}
      </View>

      <View style={styles.content3}>
        <Text style={styles.texto2}>
          Lacoste é mais que estilo.{'\n'} {'\n'}É atitude, conforto e elegância
          em cada detalhe.{'\n'} {'\n'}
          Do esporte às ruas, o clássico crocodilo nunca sai de moda.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Objeto de estilos (similar ao CSS)
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#fff', // Fundo branco
  },
  banner: {
    padding: 1,
    left: 45,
  },
  content1: {
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#black',
    textTransform: 'uppercase',
  },
  content2: {
    alignItems: 'center',
  },
  content3: {
    alignItems: 'left',
  },
  texto: {
    color: '#black',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 1,
    textTransform: 'uppercase',
  },
  texto2: {
    color: '#black',
    fontSize: 25,
    padding: 40,
  },
});

export default HomeScreen;
