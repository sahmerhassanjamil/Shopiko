import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function CartScreen({ route, navigation }) {
  const [cart, setCart] = useState(route.params ? [route.params.product] : []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
        />
      )}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  emptyCart: { fontSize: 18, textAlign: 'center', marginTop: 20 },
  cartItem: { padding: 15, backgroundColor: '#f9f9f9', borderRadius: 10, marginBottom: 10 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemPrice: { fontSize: 16, color: '#888' },
});
