import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Index({ navigation }) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const {username, password} = credentials
    const notallowed = /[<>{}$#!%=~]/;

    const handleLogin = () => {
        if(!username || !password){
            Alert.alert("Alerta", "Favor de llenar todos los campos")
            return
        }
        if(notallowed.test(username) || notallowed.test(password)){
            Alert.alert("Alerta", "Carácteres no permitidos")
            return
        }
        navigation.navigate("principal")
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            
            <ScrollView contentContainerStyle={styles.body}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Iniciar Sesión</Text>
                    
                    {/* Campo de usuario */}
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#6C757D" style={styles.icon} />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Usuario" 
                            placeholderTextColor="#ADB5BD"
                            value={credentials.username}
                            onChangeText={(text) => setCredentials({...credentials, username: text})}
                        />
                    </View>
                    
                    {/* Campo de contraseña */}
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#6C757D" style={styles.icon} />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Contraseña" 
                            placeholderTextColor="#ADB5BD" 
                            secureTextEntry={true}
                            value={credentials.password}
                            onChangeText={(text) => setCredentials({...credentials, password: text})}
                        />
                    </View>
                    
                    {/* Enlace de recuperación */}
                    <TouchableOpacity 
                        style={styles.forgotPassword}
                        onPress={() => navigation.navigate('recuperar-contrasena')}
                    >
                        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    
                    {/* Botón de inicio de sesión */}
                    <TouchableOpacity 
                        style={styles.loginButton}
                        onPress={(handleLogin)}
                    >
                        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                        <Ionicons name="arrow-forward" size={20} color="#fff" />
                    </TouchableOpacity>
                    
                    {/* Opción de registro */}
                    <View style={styles.registerOption}>
                        <Text style={styles.registerText}>¿No tienes una cuenta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('registro')}>
                            <Text style={styles.registerLink}>Regístrate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2025 MiApp - Todos los derechos reservados</Text>
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
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#343A40',
        marginBottom: 40,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E9ECEF',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#343A40',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 30,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#007BFF',
        fontWeight: '500',
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
        marginBottom: 30,
        marginTop: 40,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 10,
    },
    registerOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    registerText: {
        fontSize: 16,
        color: '#6C757D',
    },
    registerLink: {
        fontSize: 16,
        color: '#007BFF',
        fontWeight: '600',
    },
    footer: {
        paddingVertical: 15,
        backgroundColor: '#151719',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#ADB5BD',
    },
});