import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import Carousel from 'react-native-reanimated-carousel';

const images = [
  require('../assets/images/gallery1.jpg'),
  require('../assets/images/gallery2.jpg'),
  require('../assets/images/gallery3.jpg'),
  require('../assets/images/gallery4.jpg'),
  require('../assets/images/gallery5.jpg'),
  require('../assets/images/gallery6.jpg'),
  require('../assets/images/gallery7.jpg'),
  require('../assets/images/gallery8.jpg'),
  require('../assets/images/gallery9.jpg'),
  require('../assets/images/gallery10.jpg'),
];

const GalleryScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // Índice da imagem selecionada no carousel

  const openModal = (index) => {
    setSelectedIndex(index); // Define o índice da imagem selecionada
    setModalVisible(true);    // Abre o modal
  };

  const closeModal = () => setModalVisible(false); // Fecha o modal

  return (
    <ScrollView style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />
      <Text style={styles.title}>Nossa Moda 📸</Text>

      <View style={styles.galleryContainer}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => openModal(index)}>
            <Image source={image} style={styles.galleryImage} />
          </TouchableOpacity>
        ))}
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeText}>x</Text>
          </TouchableOpacity>

          <Carousel
            loop
            width={450}
            height={500}
            data={images}
            scrollAnimationDuration={500}
            defaultIndex={selectedIndex}  
            onSnapToItem={(index) => setSelectedIndex(index)}
            renderItem={({ item }) => (
              <Image source={item} style={styles.carouselImage} resizeMode="contain" />
            )}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  galleryImage: {
    width: 160,
    height: 120,
    margin: 5,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: '#238E23',
    borderRadius: 20,
    zIndex: 1,
  },
  closeText: {
    color: 'white',
    fontSize: 30,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
});

export default GalleryScreen;




