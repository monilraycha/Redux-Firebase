import { StyleSheet, Text, View } from 'react-native'
import React  , { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
 

const Header = () => {

  const cartData = useSelector(state => state.cart );

  const [cartItems, setCartItems] = useState(cartData.length); 
  

  useEffect(() => {
    // Only update cartItems if the length actually changes
    if (cartItems !== cartData.length) {
      setCartItems(cartData.length);
    }
  }, [cartData, cartItems]); // Depend on both cartData and cartItems



  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24 , fontWeight: 'bold', padding: 10, backgroundColor: '#2a9d8f' , textAlign: 'right' }}>{cartItems} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
})

export default Header;