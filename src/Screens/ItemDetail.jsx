import { Pressable, Image, StyleSheet, Button, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../Data/products.json'

const ItemDetail = ( { navigation,route}) => {
  
  const { productId } = route.params
  const {width, height} = useWindowDimensions()
  const [orientation, setOrientation] = useState("portrait")
  const [product , setProduct ] = useState(null)
  console.log(route.params);

  useEffect(()=>{
    const productSelected = allProducts.find((product) => product.id === productId) 
    setProduct(productSelected)
  }, [productId])
 
  useEffect(()=>{
    if (width > height) setOrientation("landcape")
    else setOrientation("portrait")
  }, [width,height])
 
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title=' GO BACK'
      /> 
      
     
      { product ? <>  <View
      style = {orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape}
      >
      <Image 
      source={{uri: product.images[0] }}
      style={styles.image}
      resizeMode='cover'
      />
      <View style={styles.textContainer}>
      <Text> {product.title}</Text>
      <Text> {product.description}</Text>
      <Text> $ {product.price}</Text>
      <Button  title="Agregar al carrito "> </Button>
      <Text>ItemDetail</Text> </View>
      </View>
      </>: <> NO HAY PRODUCTO</>}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  mainContainer:
  {
    flexDirection: 'column',
    justifyContent: ' center',
    alignItems: 'flex-start',
    padding: 10.
  },
  mainContainerLandscape:
  {
    flexDirection: 'row',
    justifyContent: ' center',
    alignItems: 'flex-start',
    padding: 10.
  },
  textContainer: {
    flexDirection: 'column'
  },
  image: {
    minWidth: 200,
    width: '90%',
    height: 250,
  }
})