import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />
      <View style={styles.content}>
        <Text style={styles.title}>Tudo sobre a </Text>

        <Image
          source={require('../assets/images/about.jpg')}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.text}>
            A Lacoste foi criada em 1933 pelo tenista René Lacoste e ficou famosa
          pelas camisas polo com o icônico crocodilo no peito. A marca uniu
          estilo esportivo e elegância, e hoje é reconhecida mundialmente por
          suas roupas e acessórios.
        </Text>
        <View style={styles.content2}>
        <Text style={styles.subtitle}>Nossos Valores</Text>
        <Text style={styles.text}>
          • Compromisso com o futuro{'\n'}• Elegância com atitude{'\n'}• Excelência em tudo 
          {'\n'}• Respeito e inclusão {'\n'}• Espírito esportivo
        </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginBottom: 5,
  },
  content2: {
    padding: 10,
    alignItems: 'flex-start',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default AboutScreen;
