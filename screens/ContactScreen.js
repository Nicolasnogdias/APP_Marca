import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
// Linking: para abrir URLs externas
// TouchableOpacity: botão que diminui opacidade quando pressionado
import { Ionicons } from '@expo/vector-icons'; // Ícones
import Header from '../components/Header';

const ContactScreen = () => {
   const openSocial = (place) => {
    let url = '';
    if (place === 'facebook') {
      url = 'https://www.facebook.com/Lacoste';
    }
    else if (place === 'email'){
      url = 'mailto:seviconsumidor-br@lacoste.com';
    }
    else if (place === 'instagram'){
      url = 'https://www.instagram.com/lacostebrasil';
    }
    else if (place === 'tiktok'){
      url = 'https://www.tiktok.com/@lacoste';
    }
  
  if (url) {
    Linking.openURL(url);
  } else {
      alert('Erro: link inválido ou não suportado.');
    }
};

  return (
    <View style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />

      <View style={styles.content}>
        <Text style={styles.title}>Entre em Contato</Text>

        <TouchableOpacity style={styles.contactItem}
        onPress={() => openSocial('email')}>
          {/* Botão clicável */}
          <Ionicons name="mail" size={50} color="#228b22" />
          <Text style={styles.contactText}>seviconsumidor-br@lacoste.com</Text>
        </TouchableOpacity>

        {/* ... outros botões de contato */}
        <View style={styles.content}>
          <Text style={styles.title}>Siga-nos em nossas redes!</Text>
        </View>

        <View style={styles.socialMedia}>
          {/* Container para ícones sociais */}
          <TouchableOpacity style={styles.socialIcon}
          onPress={() => openSocial('facebook')}>
          {/* Botão clicável */}
            <Ionicons name="logo-facebook" size={50} color="#228b22" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}
          onPress={() => openSocial('instagram')}>
          {/* Botão clicável */}
            <Ionicons name="logo-instagram" size={50} color="#228b22" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}
          onPress={() => openSocial('tiktok')}>
          {/* Botão clicável */}
            <Ionicons name="logo-tiktok" size={50} color="#228b22" />
          </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#black',
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#000000',
    borderRadius: 8,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#fff',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});

export default ContactScreen;
