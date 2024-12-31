// import {StyleSheet, Text, View, Button, Image} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {addToCart, removeFromCart} from './redux/action';

// const Product = props => {
//   const {item, index} = props;

//   const dispatch = useDispatch();

//   const cartItems = useSelector(state => state.cart);

//   const [isAdded, setIsAdded] = useState(false);

//   const handleAddToCart = item => {
//     // console.warn('called' , item);

//     dispatch(addToCart(item));
//   };

//   const handleRemoveFromCart = item => {

//     dispatch(removeFromCart(item.name));
 
    
//   };

//   useEffect(() => {

//     let result = cartItems.filter((cartItem) => cartItem.name === item.name);
      
//     if (result.length > 0) {
//       setIsAdded(true);
//     } else {      
//       setIsAdded(false);
//     }

//   }, [cartItems]);

//   return (
//     <View key={index} style={styles.card}>
//       <Image source={{uri: item.image}} style={styles.imgStyle} />
//       <View style={styles.details}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productColor}>Color: {item.Color}</Text>
//         <Text style={styles.productPrice}>Price: ${item.price}</Text>
//       </View>
//       {isAdded ? (
//         <Button
//           title="Remove from Cart"
//           onPress={() => handleRemoveFromCart(item)}
//         />
//       ) : (
//         <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     width: '90%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     marginVertical: 10,
//     marginHorizontal: '5%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   imgStyle: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 16,
//   },
//   details: {
//     marginBottom: 12,
//     alignItems: 'center',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   productColor: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 16,
//     color: '#000',
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
// });

// export default Product;

import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from './redux/action';
import * as Animatable from 'react-native-animatable';

const Product = props => {
  const {item, index} = props;

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter(cartItem => cartItem.name === item.name);
    setIsAdded(result.length > 0);
  }, [cartItems]);

  return (
    <Animatable.View
      key={index}
      style={styles.card}
      animation="fadeInUp"
      duration={600}>
      <Image source={{uri: item.image}} style={styles.imgStyle} />
      <View style={styles.details}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productColor}>Color: {item.Color}</Text>
        <Text style={styles.productPrice}>Price: ${item.price}</Text>
      </View>
      <Animatable.View
        animation={isAdded ? 'shake' : 'pulse'}
        iterationCount="infinite"
        duration={1000}>
        {isAdded ? (
          <TouchableOpacity
            style={[styles.button, styles.removeButton]}
            onPress={() => handleRemoveFromCart(item)}>
            <Text style={styles.buttonText}>Remove from Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.addButton]}
            onPress={() => handleAddToCart(item)}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </Animatable.View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: '5%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
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
    color: '#777',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#2a9d8f',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#2a9d8f',
  },
  removeButton: {
    backgroundColor: '#e63946',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Product;
