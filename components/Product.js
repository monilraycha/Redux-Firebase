import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/action';

const Product = (props) => {
  const { item, index } = props;

  const dispatch = useDispatch();

  const handleAddToCart = (item)=>{
    // console.warn('called' , item);
    
    dispatch(addToCart(item));

  }

  return (
    <View key={index} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.imgStyle} />
      <View style={styles.details}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productColor}>Color: {item.Color}</Text>
        <Text style={styles.productPrice}>Price: ${item.price}</Text>
      </View>
      <Button title="Add to Cart" color="#2a9d8f" onPress = {()=>handleAddToCart(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: '5%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  imgStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  details: {
    marginBottom: 12,
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productColor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Product;
