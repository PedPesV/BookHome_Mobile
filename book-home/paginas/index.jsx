import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            
            <ScrollView contentContainerStyle={styles.body}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo} 
                        source={require('../assets/images/logo.png')} 
                    />
                    <Text style={styles.welcomeText}>Slogan</Text>
                </View>

                <TouchableOpacity 
                    onPress={() => navigation.navigate('sesion')} 
                    style={styles.loginButton}
                >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                </TouchableOpacity>

                <View style={styles.footerLinks}>
                    <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('registro')}>
                        <Text style={[styles.footerText, styles.registerLink]}>Regístrate</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerNote}>© 2025 MiApp - Todos los derechos reservados</Text>
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
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 320,
        height: 320,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    welcomeText: {
        fontSize: 18,
        color: '#6C757D',
        textAlign: 'center',
        marginTop: 10,
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#343A40',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        width: '65%',
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 10,
    },
    footerLinks: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 16,
        color: '#6C757D',
    },
    registerLink: {
        color: '#007BFF',
        fontWeight: '600',
        marginLeft: 5,
    },
    footer: {
        paddingVertical: 15,
        backgroundColor: '#151719',
        alignItems: 'center',
    },
    footerNote: {
        fontSize: 12,
        color: '#ADB5BD',
    },
});