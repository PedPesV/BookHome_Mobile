import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Index({ navigation }) {
    const properties = [
        {
            id: 1,
            title: "Casa en la playa",
            description: "Hermosa casa frente al mar con 3 habitaciones, piscina privada y vista al océano.",
            location: "Playa del Carmen, MX",
            price: "$250/noche",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
        },
        {
            id: 2,
            title: "Apartamento en el centro",
            description: "Moderno apartamento en el corazón de la ciudad, cerca de restaurantes y atracciones.",
            location: "Ciudad de México, MX",
            price: "$180/noche",
            image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
        },
        {
            id: 3,
            title: "Casa de campo",
            description: "Acogedora casa rodeada de naturaleza, ideal para desconectar y relajarse.",
            location: "Valle de Bravo, MX",
            price: "$200/noche",
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
        },
        {
            id: 4,
            title: "Departamento moderno",
            description: "Elegante departamento con acabados de lujo y vista panorámica a la ciudad.",
            location: "Monterrey, MX",
            price: "$220/noche",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            
            <ScrollView contentContainerStyle={styles.body}>
            <Text style={styles.titleText}>¡Buenos días María!</Text>
                <Text style={styles.sectionTitle}>Recomendaciones para ti</Text>
                
                <View style={styles.propertiesContainer}>
                    {properties.map((property) => (
                        <TouchableOpacity 
                            key={property.id}
                            style={styles.propertyCard}
                            onPress={() => navigation.navigate('detalles', { property })}
                        >
                            <Image 
                                source={{ uri: property.image }} 
                                style={styles.propertyImage}
                            />
                            <View style={styles.propertyContent}>
                                <Text style={styles.propertyTitle}>{property.title}</Text>
                                <Text style={styles.propertyLocation}>
                                    <Ionicons name="location" size={14} color="#6C757D" /> {property.location}
                                </Text>
                                <Text style={styles.propertyDescription}>{property.description}</Text>
                                <View style={styles.propertyFooter}>
                                    <Text style={styles.propertyPrice}>{property.price}</Text>
                                    <TouchableOpacity 
                                        style={styles.favoriteButton}
                                        onPress={(e) => {
                                            e.stopPropagation();
                                            // Lógica para agregar a favoritos
                                        }}
                                    >
                                        <Ionicons name="heart-outline" size={20} color="#343A40" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Menú de navegación */}
            <View style={styles.navBar}>
                    <TouchableOpacity 
                      style={[styles.navButton, styles.activeNavButton]}
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
                      style={styles.navButton}
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
    header: {
        height: 65,
        backgroundColor: '#151719',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        paddingHorizontal: 20,
        marginBottom: 35,
    },
    titleText: {
        fontSize: 28,
        fontWeight: '600',
        color: '#343A40',
    },
    body: {
        paddingHorizontal: 20,
        paddingBottom: 80,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#343A40',
        marginVertical: 20,
    },
    propertiesContainer: {
        marginBottom: 20,
    },
    propertyCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    propertyImage: {
        width: '100%',
        height: 180,
    },
    propertyContent: {
        padding: 15,
    },
    propertyTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#343A40',
        marginBottom: 5,
    },
    propertyLocation: {
        fontSize: 14,
        color: '#6C757D',
        marginBottom: 10,
    },
    propertyDescription: {
        fontSize: 14,
        color: '#495057',
        marginBottom: 15,
        lineHeight: 20,
    },
    propertyFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    propertyPrice: {
        fontSize: 16,
        fontWeight: '700',
        color: '#28A745',
    },
    favoriteButton: {
        padding: 5,
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