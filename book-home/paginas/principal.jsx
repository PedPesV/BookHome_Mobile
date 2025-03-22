import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <ScrollView contentContainerStyle={styles.body}>
                <Text style={styles.textTitle}>¡Buenos días Maria!</Text>
                <Text style={styles.text}>Podría interesarte:</Text>
                
                <View style={styles.propertyContainer}>
                    <View style={styles.propertyCard}>
                        <Text style={styles.propertyTitle}>Casa en la playa</Text>
                        <Text style={styles.propertyDescription}>
                            Una hermosa casa frente al mar, ideal para vacaciones.
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('detalles')}>
                            <Text style={styles.detailsButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                        <View style={styles.iconWrapper}>
                            <TouchableOpacity style={styles.iconFav}>
                                <Ionicons name="heart-outline" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.propertyCard}>
                        <Text style={styles.propertyTitle}>Apartamento en el centro</Text>
                        <Text style={styles.propertyDescription}>
                            Moderno apartamento en el centro de la ciudad, cerca de todo.
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('detalles')}>
                            <Text style={styles.detailsButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                        <View style={styles.iconWrapper}>
                            <TouchableOpacity style={styles.iconFav}>
                                <Ionicons name="heart-outline" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.propertyCard}>
                        <Text style={styles.propertyTitle}>Casa de campo</Text>
                        <Text style={styles.propertyDescription}>
                            Casa acogedora en el campo, rodeada de naturaleza.
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('detalles')}>
                            <Text style={styles.detailsButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                        <View style={styles.iconWrapper}>
                            <TouchableOpacity style={styles.iconFav}>
                                <Ionicons name="heart-outline" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.foot}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('principal')}>
                        <View style={styles.iconItem}>
                            <Ionicons name="home-outline" size={40} color="#fff" />
                            <Text style={styles.iconLabel}>Principal</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('buscar')}>
                        <View style={styles.iconItem}>
                            <Ionicons name="search-outline" size={40} color="#fff" />
                            <Text style={styles.iconLabel}>Buscar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('perfil')}>
                        <View style={styles.iconItem}>
                            <Ionicons name="person-outline" size={40} color="#fff" />
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
        backgroundColor: '#f8f8f8',
    },
    header: {
        height: 70,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    body: {
        alignItems: 'left',
        justifyContent: 'center',
        flexGrow: 1,
        padding: 20,
    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: '#000',
        textAlign: 'left',
        marginBottom: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
    textTitle: {
        fontFamily: 'Montserrat',
        fontSize: 40,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    propertyContainer: {
        width: '100%',
        paddingBottom: 20,
    },
    propertyCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'column',
        justifyContent: 'space-between', // Make sure content is distributed evenly
    },
    propertyTitle: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    propertyDescription: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        color: '#555',
        marginTop: 10,
        marginBottom: 15,
    },
    detailsButtonText: {
        color: '#000',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
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
        height: 90,
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
        fontSize: 12,
        color: '#fff',
        marginTop: 5,
    },
});
