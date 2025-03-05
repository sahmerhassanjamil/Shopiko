import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate('Cart', { product })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  productImage: { width: 200, height: 200, marginBottom: 20 },
  productName: { fontSize: 24, fontWeight: 'bold' },
  productPrice: { fontSize: 20, color: '#888', marginBottom: 20 },
});
