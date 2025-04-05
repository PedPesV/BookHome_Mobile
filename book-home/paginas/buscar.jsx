import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Buscar({ navigation }) {
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        price: '',
        propertyType: '',
        rooms: '',
        location: '',
        neighborhood: '',
        university: '',
        pets: '',
        gender: ''
    });

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const sampleProperties = [
        {
            id: 1,
            title: "CDTnX, Azcapotzalco",
            address: "Av. 22 de Febrero",
            price: "$5,000 mxn/mes"
        },
        {
            id: 2,
            title: "Departamento en Condesa",
            address: "Calle Michoacán",
            price: "$8,500 mxn/mes"
        },
        {
            id: 3,
            title: "Casa en Coyoacán",
            address: "Av. Universidad",
            price: "$7,200 mxn/mes"
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header} />
            <ScrollView contentContainerStyle={styles.body}>
                <Text style={styles.titleText}>Buscar</Text>

                <TouchableOpacity onPress={toggleFilters} style={styles.filterButton}>
                    <Ionicons name="filter" size={24} color="#343A40" />
                </TouchableOpacity>

                {showFilters ? (
                    <View style={styles.filtersContainer}>
                        <Text style={styles.sectionTitle}>Selecciona tus filtros</Text>

                        <View style={styles.filterGroup}>
                            <Text style={styles.filterLabel}>Precio mensual</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej. $5,000"
                                value={filters.price}
                                onChangeText={(text) => setFilters({ ...filters, price: text })}
                            />
                        </View>

                        <View style={styles.filterGroup}>
                            <Text style={styles.filterLabel}>Tipo de propiedad</Text>
                            <View style={styles.radioGroup}>
                                <TouchableOpacity
                                    style={[styles.radioButton, filters.propertyType === 'departamento' && styles.radioSelected]}
                                    onPress={() => setFilters({ ...filters, propertyType: 'departamento' })}
                                >
                                    <Text style={styles.radioText}>Departamento</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.radioButton, filters.propertyType === 'casa' && styles.radioSelected]}
                                    onPress={() => setFilters({ ...filters, propertyType: 'casa' })}
                                >
                                    <Text style={styles.radioText}>Casa</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.filterGroup}>
                            <Text style={styles.filterLabel}>Número de cuartos</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej. 2"
                                keyboardType="numeric"
                                value={filters.rooms}
                                onChangeText={(text) => setFilters({ ...filters, rooms: text })}
                            />
                        </View>

                        <Text style={styles.sectionTitle}>Filtros de ubicación</Text>

                        <View style={styles.filterGroup}>
                            <Text style={styles.filterLabel}>Alcaldía</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej. Azcapotzalco"
                                value={filters.location}
                                onChangeText={(text) => setFilters({ ...filters, location: text })}
                            />
                        </View>

                        <View style={styles.filterGroup}>
                            <Text style={styles.filterLabel}>Colonia</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej. San Miguel"
                                value={filters.neighborhood}
                                onChangeText={(text) => setFilters({ ...filters, neighborhood: text })}
                            />
                        </View>

                        <Text style={styles.sectionTitle}>Selecciona tu universidad</Text>

                        <View style={styles.filterGroup}>
                            <Text style={styles.filterLabel}>Nombre</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej. UNAM"
                                value={filters.university}
                                onChangeText={(text) => setFilters({ ...filters, university: text })}
                            />
                        </View>

                        <View style={styles.filterGroup}>
                            <Text style={styles.filterLabel}>Con mascotas</Text>
                            <View style={styles.radioGroup}>
                                <TouchableOpacity
                                    style={[styles.radioButton, filters.pets === 'si' && styles.radioSelected]}
                                    onPress={() => setFilters({ ...filters, pets: 'si' })}
                                >
                                    <Text style={styles.radioText}>Sí</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.radioButton, filters.pets === 'no' && styles.radioSelected]}
                                    onPress={() => setFilters({ ...filters, pets: 'no' })}
                                >
                                    <Text style={styles.radioText}>No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.filterGroup}>
                            <Text style={styles.filterLabel}>Sexo</Text>
                            <View style={styles.radioGroup}>
                                <TouchableOpacity
                                    style={[styles.radioButton, filters.gender === 'masculino' && styles.radioSelected]}
                                    onPress={() => setFilters({ ...filters, gender: 'masculino' })}
                                >
                                    <Text style={styles.radioText}>Masculino</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.radioButton, filters.gender === 'femenino' && styles.radioSelected]}
                                    onPress={() => setFilters({ ...filters, gender: 'femenino' })}
                                >
                                    <Text style={styles.radioText}>Femenino</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.applyButton} onPress={toggleFilters}>
                            <Text style={styles.applyButtonText}>Aplicar filtros</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.resultsContainer}>
                        <Text style={styles.sectionTitle}>Resultados de búsqueda</Text>

                        {sampleProperties.map(property => (
                            <TouchableOpacity
                                key={property.id}
                                style={styles.propertyCard}
                                onPress={() => navigation.navigate('detalles')}
                            >
                                <Text style={styles.propertyTitle}>{property.title}</Text>
                                <Text style={styles.propertyAddress}>{property.address}</Text>
                                <Text style={styles.propertyPrice}>{property.price}</Text>
                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </ScrollView>

            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('principal')}>
                    <Ionicons name="home" size={24} color="#fff" />
                    <Text style={styles.navButtonText}>Principal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navButton, styles.activeNavButton]} onPress={() => navigation.navigate('buscar')}>
                    <Ionicons name="search" size={24} color="#fff" />
                    <Text style={styles.navButtonText}>Buscar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('perfil')}>
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
        marginBottom: 30,
    },
    titleText: {
        fontSize: 28,
        fontWeight: '600',
        color: '#343A40',
    },
    filterButton: {
        padding: 8,
        color: '#343A40'
    },
    body: {
        paddingHorizontal: 20,
        paddingBottom: 80,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#343A40',
        marginVertical: 20,
    },
    filtersContainer: {
        marginBottom: 20,
    },
    filterGroup: {
        marginBottom: 20,
    },
    filterLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#495057',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E9ECEF',
        fontSize: 16,
    },
    radioGroup: {
        flexDirection: 'row',
        marginTop: 10,
    },
    radioButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E9ECEF',
        marginRight: 10,
        backgroundColor: '#FFFFFF',
    },
    radioSelected: {
        backgroundColor: '#343A40',
        borderColor: '#343A40',
    },
    radioText: {
        color: '#495057',
    },
    radioSelectedText: {
        color: '#FFFFFF',
    },
    applyButton: {
        backgroundColor: '#343A40',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    resultsContainer: {
        marginBottom: 20,
    },
    propertyCard: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    propertyTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#343A40',
        marginBottom: 5,
    },
    propertyAddress: {
        fontSize: 14,
        color: '#6C757D',
        marginBottom: 10,
    },
    propertyPrice: {
        fontSize: 16,
        fontWeight: '700',
        color: '#28A745',
        marginBottom: 15,
    },
    detailsButton: {
        alignSelf: 'flex-end',
    },
    detailsButtonText: {
        color: '#007BFF',
        fontWeight: '600',
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