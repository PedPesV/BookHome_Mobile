import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <ScrollView contentContainerStyle={styles.body}>
                <Image style={styles.img} source={require('../assets/images/logo.png')} />
            </ScrollView>
            <View style={styles.foot}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 100,
        backgroundColor: '#000000',
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    img: {
        width: 200,  // Ajusta el tamaño según tu imagen
        height: 200,
        resizeMode: 'contain',
    },
    foot: {
        height: 50,
        backgroundColor: '#ddd',
    },
});
