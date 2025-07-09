import React, { useState, useRef } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: screenWidth } = Dimensions.get('window');

export default function DetallesPropiedad({ navigation }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const scrollViewRef = useRef(null);

    // Array de imágenes para el carrusel
    const images = [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ];

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        setCurrentImageIndex(index);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
        scrollViewRef.current?.scrollTo({
            x: index * screenWidth,
            animated: true
        });
    };

    const goToPrevious = () => {
        const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
        goToImage(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
        goToImage(newIndex);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.headerBackButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.body}>
                {/* Carrusel de imágenes mejorado */}
                <View style={styles.carouselContainer}>
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        style={styles.carousel}
                    >
                        {images.map((image, index) => (
                            <Image 
                                key={index}
                                style={styles.carouselImage} 
                                source={{ uri: image }}
                                resizeMode="cover"
                            />
                        ))}
                    </ScrollView>
                    

                    
                    {/* Indicadores de puntos */}
                    <View style={styles.dotsContainer}>
                        {images.map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.dot,
                                    currentImageIndex === index ? styles.activeDot : styles.inactiveDot
                                ]}
                                onPress={() => goToImage(index)}
                            />
                        ))}
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
                                name={isFavorite ? "heart" : "heart-outline"} 
                                size={24} 
                                color={isFavorite ? "#DC3545" : "#6C757D"} 
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
            
            {/* Footer */}
            <View style={styles.footer}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    
    // Footer
    footer: {
        height: 50,
        backgroundColor: '#151719',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        marginTop: 'auto',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    header: {
        height: 60,
        backgroundColor: '#151719',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    headerBackButton: {
        marginRight: 15,
        padding: 5,
    },
    body: {
        paddingBottom: 20,
        flexGrow: 1,
    },
    
    // Estilos del carrusel mejorado
    carouselContainer: {
        position: 'relative',
        height: 250,
    },
    carousel: {
        height: 250,
    },
    carouselImage: {
        width: screenWidth,
        height: 250,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 20,
    },
    inactiveDot: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    
    // Estilos existentes
    infoSection: {
        padding: 20,
    },
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
});