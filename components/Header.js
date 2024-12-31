import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.cart);

  const [cartItems, setCartItems] = useState(cartData.length);

  useEffect(() => {
    // Update cartItems when the cartData length changes
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Shop</Text>
      <View style={styles.cartContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1170/1170576.png',
          }}
          style={styles.cartIcon}
        />
        <Text style={styles.cartCount}>{cartItems}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2a9d8f',
    padding: 15,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    marginRight: 8,
  },
  cartCount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#e63946',
    borderRadius: 12,
    paddingHorizontal: 7,
    paddingVertical: 2,
    textAlign: 'center',
    position: 'absolute',
    top: -10,
    left: 20,
  
  },
});

export default Header;
