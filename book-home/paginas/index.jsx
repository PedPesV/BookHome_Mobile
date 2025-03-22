import React from 'react';
import { View, ScrollView, StyleSheet, Image,TouchableOpacity,Text } from 'react-native';

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <ScrollView contentContainerStyle={styles.body}>
                <Image style={styles.img} source={require('../assets/images/logo.png')} />
                <TouchableOpacity onPress={()=>navigation.navigate('sesion')} style={styles.TouchableOpacity}>
                    <Text style={styles.text}>Iniciar Sesión</Text>
                </TouchableOpacity>
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
        width: 300,  // Ajusta el tamaño según tu imagen
        height: 300,
        resizeMode: 'contain',
    },
    foot: {
        height: 50,
        backgroundColor: '#000000',
    },
    text: {
        fontFamily: 'Monserrat',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:5,
        color:'#ffffff',
        marginTop:6,
    },
    TouchableOpacity:{
        alignItems:'center',
        backgroundColor:'#2F2E2E',
        width: 228,  // Ajusta el tamaño según tu imagen
        height: 58,
        borderRadius:10,
        

    }
    
});
