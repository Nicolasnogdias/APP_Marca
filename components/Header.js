import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = ({ logo }) => {
  // Componente funcional que recebe 'logo' como prop
  return (
    <View style={styles.header}>
      {/* Container do cabeçalho */}
      <Image 
        source={logo} 
        style={styles.logo} 
        resizeMode="contain"
        />
     {/* Imagem que mantém proporção dentro do espaço */}

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center', // Centraliza horizontalmente
    padding: 1,         // Espaçamento interno
    backgroundColor: '#fff', // Fundo Verde
    marginTop: 50,
  },
  logo: {
width: 100,         // Largura fixa
height: 100,         // Altura fixa
},
});

export default Header;