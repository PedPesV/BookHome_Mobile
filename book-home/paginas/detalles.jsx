import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function DetallesPropiedad({ navigation }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    </View>

            <ScrollView contentContainerStyle={styles.body}>
                {/* Carrusel de imágenes */}
                <View style={styles.carousel}>
                    <Image 
                        style={styles.mainImage} 
                        source={{ uri: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' }} 
                    />
                    <View style={styles.imageCounter}>
                        <Text style={styles.imageCounterText}>1/5</Text>
                    </View>
                </View>
                
                {/* Información básica */}
                <View style={styles.infoSection}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.propertyTitle}>Casa en la playa</Text>
                        <TouchableOpacity 
                            style={styles.favoriteButton}
                            onPress={toggleFavorite}
                        >
                            <Ionicons 
                                name={isFavorite ? "heart-outline" : "heart"} 
                                size={24} 
                                color={isFavorite ? "#6C757D" : "#DC3545"} 
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.locationContainer}>
                        <Ionicons name="location" size={16} color="#6C757D" />
                        <Text style={styles.locationText}>Playa del Carmen, Quintana Roo, México</Text>
                    </View>
                    
                    {/* Características principales */}
                    <View style={styles.featuresContainer}>
                        <View style={styles.featureItem}>
                            <Ionicons name="bed" size={20} color="#343A40" />
                            <Text style={styles.featureText}>3 Habitaciones</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="water" size={20} color="#343A40" />
                            <Text style={styles.featureText}>2 Baños</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="resize" size={20} color="#343A40" />
                            <Text style={styles.featureText}>180 m²</Text>
                        </View>
                    </View>
                    
                    {/* Precio */}
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>$250 MXN por noche</Text>
                        <Text style={styles.priceLabel}>Precio de venta</Text>
                    </View>
                    
                    {/* Descripción */}
                    <Text style={styles.sectionTitle}>Descripción</Text>
                    <Text style={styles.description}>
                        Hermosa casa moderna ubicada en la zona hotelera de Playa del Carmen, a solo 200 metros de la playa.
                        Cuenta con amplios espacios, acabados de lujo, cocina integral equipada, terraza con vista al mar
                        y alberca privada. Ideal para vivir o como inversión vacacional.
                    </Text>
                    
                    {/* Características detalladas */}
                    <Text style={styles.sectionTitle}>Características</Text>
                    <View style={styles.detailsGrid}>
                        <View style={styles.detailItem}>
                            <Ionicons name="car" size={18} color="#6C757D" />
                            <Text style={styles.detailText}>2 Estacionamientos</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="snow" size={18} color="#6C757D" />
                            <Text style={styles.detailText}>Aire acondicionado</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="wifi" size={18} color="#6C757D" />
                            <Text style={styles.detailText}>Internet incluido</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="paw" size={18} color="#6C757D" />
                            <Text style={styles.detailText}>Mascotas permitidas</Text>
                        </View>
                    </View>
                    
                    {/* Amenidades */}
                    <Text style={styles.sectionTitle}>Amenidades</Text>
                    <View style={styles.amenitiesContainer}>
                        <View style={styles.amenityItem}>
                            <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                            <Text style={styles.amenityText}>Alberca</Text>
                        </View>
                        <View style={styles.amenityItem}>
                            <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                            <Text style={styles.amenityText}>Gimnasio</Text>
                        </View>
                        <View style={styles.amenityItem}>
                            <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                            <Text style={styles.amenityText}>Área de juegos</Text>
                        </View>
                        <View style={styles.amenityItem}>
                            <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                            <Text style={styles.amenityText}>Seguridad 24/7</Text>
                        </View>
                    </View>
                    
                    {/* Agente */}
                    <Text style={styles.sectionTitle}>Agente</Text>
                    <View style={styles.agentContainer}>
                        <Image 
                            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
                            style={styles.agentImage}
                        />
                        <View style={styles.agentInfo}>
                            <Text style={styles.agentName}>Carlos Martínez</Text>
                            <Text style={styles.agentPhone}>
                                <Ionicons name="call" size={14} color="#6C757D" /> 998 123 4567
                            </Text>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>



            {/* Menú de navegación (igual al primer código) */}
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
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    propertyTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1F2937',
        flex: 1, // Permite que el título ocupe el espacio disponible
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


    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        height: 60,
        backgroundColor: '#151719',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    backButton: {
        marginRight: 15,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    body: {
        paddingBottom: 120,
    },
    carousel: {
        position: 'relative',
    },
    mainImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    imageCounter: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 15,
    },
    imageCounterText: {
        color: '#fff',
        fontSize: 14,
    },
    infoSection: {
        padding: 20,
    },

    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    locationText: {
        marginLeft: 5,
        color: '#6B7280',
        fontSize: 16,
    },
    featuresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E7EB',
    },
    featureItem: {
        alignItems: 'center',
    },
    featureText: {
        marginTop: 5,
        fontSize: 14,
        color: '#343A40',
    },
    priceContainer: {
        marginVertical: 15,
    },
    price: {
        fontSize: 24,
        fontWeight: '700',
        color: '#10B981',
    },
    priceLabel: {
        fontSize: 14,
        color: '#6B7280',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 15,
        color: '#4B5563',
        lineHeight: 22,
        marginBottom: 15,
    },
    detailsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%',
        marginBottom: 12,
    },
    detailText: {
        marginLeft: 8,
        fontSize: 15,
        color: '#374151',
    },
    amenitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    amenityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        marginBottom: 10,
    },
    amenityText: {
        marginLeft: 8,
        fontSize: 15,
        color: '#374151',
    },
    agentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    agentImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    agentInfo: {
        flex: 1,
    },
    agentName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
    },
    agentPhone: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 3,
    },
    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#343A40',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    contactButtonText: {
        color: '#fff',
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '500',
    },
    footer: {
        position: 'absolute',
        bottom: 70,
        left: 0,
        right: 0,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },

    contactButtonLarge: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#343A40',
        borderRadius: 25,
        paddingVertical: 12,
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