import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.header}></View>
            <ScrollView contentContainerStyle={styles.body}>
                <Image style={styles.img} source={require('../assets/images/logo.png')} />
                <Text>Favs</Text>
            </ScrollView>
            {/*Menu de las opciones*/}
            <View style={styles.foot}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('principal')}>
                        <View style={styles.iconItem}>
                            <Ionicons name="home-outline" size={25} color="#fff" />
                            <Text style={styles.iconLabel}>Principal</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('buscar')}>
                        <View style={styles.iconItem}>
                            <Ionicons name="search-outline" size={25} color="#fff" />
                            <Text style={styles.iconLabel}>Buscar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('perfil')}>
                        <View style={styles.iconItem}>
                            <Ionicons name="person-outline" size={25} color="#fff" />
                            <Text style={styles.iconLabel}>Perfil</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
        height: 50,
        backgroundColor: '#ddd',
    },
    iconWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // Align items to the right side
        marginTop: 'auto', // Pushes it to the bottom of the card
    },
    iconFav: {
        padding: 5,
    },
    foot: {
        height: 60,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    iconItem: {
        alignItems: 'center',
        margin: 10,
    },
    iconLabel: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: 10,
        color: '#fff',
        marginTop: 5,
    },
});
