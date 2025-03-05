import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Smartphone', price: '$699', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Laptop', price: '$999', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Headphones', price: '$199', image: 'https://via.placeholder.com/150' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Shopiko</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  productCard: { padding: 15, marginBottom: 10, backgroundColor: '#f9f9f9', borderRadius: 10, alignItems: 'center' },
  productImage: { width: 100, height: 100, marginBottom: 10 },
  productName: { fontSize: 18, fontWeight: 'bold' },
  productPrice: { fontSize: 16, color: '#888' },
});
