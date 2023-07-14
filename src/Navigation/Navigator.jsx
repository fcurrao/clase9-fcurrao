
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import Header from '../Components/Header';
import Home from '../Screens/Home';
import ItemListCategory from '../Screens/ItemListCategory';
// import { useState } from 'react';
import ItemDetail from '../Screens/ItemDetail';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const Navigator = () => {

    // const [productSelected, setProductSelected] = useState("")
    // const [categorySelected, setCategorySelected] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                initialRouteName='Home'
                screenOptions={  ({route}) => ( {
                    header : () => {
                        return <Header title={
                            route.name === "Categories" ? "Categories" : 
                            route.name === "ItemListCategory" ? route.params.category : "Detail"
                        } />
                    }
                } )}

                >

                    <Stack.Screen
                        name='Home'
                        component={Home}
                    />

                    <Stack.Screen
                        name='ItemListCategory'
                        component={ItemListCategory}
                    />

                    <Stack.Screen
                        name='ItemDetail'
                        component={ItemDetail}
                    />

                    {/* {
                        categorySelected ?
                            <ItemListCategory
                                category={categorySelected}
                                setCategory={setCategorySelected}
                                setProductSelected={setProductSelected}
                            /> :
                            productSelected ? <ItemDetail
                                idSelected={productSelected}
                                setProductSelected={setProductSelected}
                            /> :
                                <Home
                                    setCategorySelected={setCategorySelected}
                                />
                    } */}
                </Stack.Navigator>

            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHight : 0
    }
})