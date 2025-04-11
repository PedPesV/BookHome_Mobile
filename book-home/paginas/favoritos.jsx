import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const propiedadesIniciales = [
    {
        id: 1,
        titulo: 'Casa en la playa',
        descripcion: 'Moderna casa a metros del mar.',
        imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        ubicacion: 'Playa del Carmen, Quintana Roo',
        precio: '$250 MXN por noche',
        agente: { nombre: 'Carlos Martínez', telefono: '998 123 4567', imagen: 'https://randomuser.me/api/portraits/men/32.jpg' },
    },
    {
        id: 2,
        titulo: 'Loft en CDMX',
        descripcion: 'Loft céntrico y elegante.',
        imagen: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        ubicacion: 'Roma Norte, Ciudad de México',
        precio: '$350 MXN por noche',
        agente: { nombre: 'Andrea López', telefono: '556 987 1234', imagen: 'https://randomuser.me/api/portraits/women/44.jpg' },
    },
    {
        id: 3,
        titulo: 'Cabaña en el bosque',
        descripcion: 'Rústica y acogedora.',
        imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        ubicacion: 'Valle de Bravo, Estado de México',
        precio: '$200 MXN por noche',
        agente: { nombre: 'Luis Ramírez', telefono: '722 456 7890', imagen: 'https://randomuser.me/api/portraits/men/75.jpg' },
    },
];

export default function Favoritos({ navigation }) {
    const [favoritos, setFavoritos] = useState({});

    const toggleFavorite = (id) => {
        setFavoritos((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                                </View>
            <ScrollView contentContainerStyle={styles.body}>
                <Text style={styles.titleText}>Mis Favoritos</Text>
                {propiedadesIniciales.map((prop) => (
                    <View key={prop.id} style={styles.card}>
                        <Image style={styles.mainImage} source={{ uri: prop.imagen }} />
                        <TouchableOpacity onPress={() => navigation.navigate('detalles')}>
                            <View style={styles.cardContent}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.propertyTitle}>{prop.titulo}</Text>
                                    <TouchableOpacity onPress={() => toggleFavorite(prop.id)} style={styles.favoriteButton}>
                                        <Ionicons
                                            name={favoritos[prop.id] ? 'heart-outline' : 'heart'}
                                            size={24}
                                            color={favoritos[prop.id] ? '#6C757D' : '#DC3545'}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.description}>{prop.descripcion}</Text>
                                <View style={styles.locationContainer}>
                                    <Ionicons name="location" size={16} color="#6C757D" />
                                    <Text style={styles.locationText}>{prop.ubicacion}</Text>
                                </View>
                                <Text style={styles.price}>{prop.precio}</Text>
                                <View style={styles.agentContainer}>
                                    <Image source={{ uri: prop.agente.imagen }} style={styles.agentImage} />
                                    <View>
                                        <Text style={styles.agentName}>{prop.agente.nombre}</Text>
                                        <Text style={styles.agentPhone}>
                                            <Ionicons name="call" size={14} color="#6C757D" /> {prop.agente.telefono}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.navBar}>
                            <TouchableOpacity 
                                style={styles.navButton}
                                onPress={() => navigation.navigate('principal')}
                            >
                                <Ionicons name="home" size={24} color="#fff" />
                                <Text style={styles.navButtonText}>Inicio</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={styles.navButton}
                                onPress={() => navigation.navigate('buscar')}
                            >
                                <Ionicons name="search" size={24} color="#fff" />
                                <Text style={styles.navButtonText}>Buscar</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={[styles.navButton, styles.activeNavButton]}
                                onPress={() => navigation.navigate('perfil')}
                            >
                                <Ionicons name="person" size={24} color="#fff" />
                                <Text style={styles.navButtonText}>Perfil</Text>
                            </TouchableOpacity>
                        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    body: {
        padding: 15,
        paddingBottom: 100,
    },
    header: {
        height: 60,
        backgroundColor: '#151719',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    titleText: {
        fontSize: 28,
        fontWeight: '600',
        color: '#343A40',
        marginTop:'25',
    },
    
    card: {
        marginTop:'35',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    mainImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    cardContent: {
        padding: 15,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    propertyTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1F2937',
        flex: 1,
    },
    favoriteButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    description: {
        fontSize: 14,
        color: '#4B5563',
        marginVertical: 8,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    locationText: {
        marginLeft: 5,
        color: '#6B7280',
        fontSize: 14,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: '#10B981',
        marginBottom: 8,
    },
    agentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    agentImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    agentName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1F2937',
    },
    agentPhone: {
        fontSize: 13,
        color: '#6B7280',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#151719',
        paddingVertical: 12,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    navButton: {
        alignItems: 'center',
    },
    navButtonText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 2,
    },
    activeNavButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
    },
});
