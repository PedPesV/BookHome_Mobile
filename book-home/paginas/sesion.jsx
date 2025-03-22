import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <ScrollView contentContainerStyle={styles.body}>
                <Text style={styles.text}>Iniciar Sesión</Text>
                
                <TouchableOpacity onPress={()=>navigation.navigate('registro')}>
                    <Text style={styles.text}>Registro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('principal')}>
                    <Text style={styles.text}>principal</Text>
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
        height: 50,
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
        height: 30,
        backgroundColor: '#000000',
    },
    text: {
        fontFamily: 'Monserrat',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:5,
        color:'#000000',
        marginTop:6,
    }
});
