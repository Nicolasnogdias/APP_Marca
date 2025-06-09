import React, { useState } from 'react';
import {View,Text,Image,TouchableOpacity,FlatList,StyleSheet,Button} from 'react-native';
import Header from '../components/Header';

import CapScreen from './DetailsProductScreen/CapScreen';
import BackpackScreen from './DetailsProductScreen/BackpackScreen';
import BootScreen from './DetailsProductScreen/BootScreen';
import JacketScreen from './DetailsProductScreen/JacketScreen';
import PantsScreen from './DetailsProductScreen/PantsScreen';
import SneakerScreen from './DetailsProductScreen/SneakerScreen';
import TShirtScreen from './DetailsProductScreen/T-ShirtScreen';
import WalletScreen from './DetailsProductScreen/WalletScreen';

const products = [
  {
    id: '1',
    name: 'Lacoste L003 Neo',
    price: 'R$ 839,00',
    image: require('../assets/images/product1.jpg'),
  },
  {
    id: '2',
    name: 'Polo Lacoste Sport Ultra-Dry',
    price: 'R$ 549,00',
    image: require('../assets/images/product2.jpg'),
  },
  {
    id: '3',
    name: 'Jaqueta Windbreaker com Capuz',
    price: 'R$ 1.199,00',
    image: require('../assets/images/product3.jpg'),
  },
  {
    id: '4',
    name: 'Boné de Tênis Padrão Losango',
    price: 'R$ 429,00',
    image: require('../assets/images/product4.jpg'),
  },
  {
    id: '5',
    name: 'Mochila Lacoste Neocroc',
    price: 'R$ 899,00',
    image: require('../assets/images/product5.jpg'),
  },
  {
    id: '6',
    name: 'Calça Jogger Masculina',
    price: 'R$ 689,00',
    image: require('../assets/images/product6.jpg'),
  },
  {
    id: '7',
    name: 'Tênis Lacoste Powercourt',
    price: 'R$ 519,99',
    image: require('../assets/images/product7.jpg'),
  },
  {
    id: '8',
    name: 'Relógio Lacoste Moon',
    price: 'R$ 1.059,00',
    image: require('../assets/images/product8.jpg'),
  },
];

export default function ProductsScreen() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    const handleBack = () => setSelectedProduct(null);

    switch (selectedProduct.id) {
      case '1':
        return <SneakerScreen onBack={handleBack} />;
      case '2':
        return <TShirtScreen onBack={handleBack} />;
      case '3':
        return <JacketScreen onBack={handleBack} />;
      case '4':
        return <CapScreen onBack={handleBack} />;
      case '5':
        return <BackpackScreen onBack={handleBack} />;
      case '6':
        return <PantsScreen onBack={handleBack} />;
      case '7':
        return <BootScreen onBack={handleBack} />;
      case '8':
        return <WalletScreen onBack={handleBack} />;
    }
  }

  // Tela principal com lista de produtos
  return (
    <View style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.productCard}
            onPress={() => setSelectedProduct(item)}
          >
            <Image source={item.image} style={styles.productImage} resizeMode="contain"/>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>

            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 10,
  },
  productCard: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#238E23',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productInfo: {
    padding: 15,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
});