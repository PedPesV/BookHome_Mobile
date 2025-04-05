import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

// ...importaciones (sin cambios)
export default function Registro({ navigation }) {
    const [isSelected, setSelection] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>

            <ScrollView contentContainerStyle={styles.body}>
                <View style={styles.formContainer}>

                    <Text style={styles.title}>Registro</Text>

                    {[
                        { icon: 'person-outline', placeholder: 'Usuario', key: 'username', keyboard: 'default' },
                        { icon: 'call-outline', placeholder: 'Número de Teléfono', key: 'phone', keyboard: 'phone-pad' },
                        { icon: 'mail-outline', placeholder: 'Email', key: 'email', keyboard: 'email-address' },
                        { icon: 'lock-closed-outline', placeholder: 'Contraseña', key: 'password', secure: true },
                        { icon: 'lock-closed-outline', placeholder: 'Confirmar Contraseña', key: 'confirmPassword', secure: true },
                    ].map(({ icon, placeholder, key, keyboard, secure }) => (
                        <View key={key} style={styles.inputContainer}>
                            <Ionicons name={icon} size={20} color="#6C757D" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder={placeholder}
                                placeholderTextColor="#ADB5BD"
                                keyboardType={keyboard}
                                secureTextEntry={secure}
                                value={formData[key]}
                                onChangeText={(text) => handleInputChange(key, text)}
                            />
                        </View>
                    ))}

                    <View style={styles.termsContainer}>
                        <CheckBox
                            checked={isSelected}
                            onPress={() => setSelection(!isSelected)}
                            containerStyle={styles.checkbox}
                            checkedColor="#343A40"
                        />
                        <Text style={styles.termsText}>
                            Acepto los{' '}
                            <Text style={styles.termsLink} onPress={() => navigation.navigate('terminos')}>
                                términos y condiciones
                            </Text>
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.registerButton}
                        onPress={() => alert('Registro completado')}
                    >
                        <Text style={styles.registerButtonText}>Registrarse</Text>
                        <Ionicons name="arrow-forward" size={20} color="#fff" />
                    </TouchableOpacity>

                    <View style={styles.loginOption}>
                        <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('sesion')}>
                            <Text style={styles.loginLink}>Iniciar sesión</Text>
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
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center',
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#343A40',
        marginBottom: 25,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
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
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        width: '90%',
    },
    checkbox: {
        padding: 0,
        margin: 0,
        marginRight: 5,
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    termsText: {
        fontSize: 14,
        color: '#6C757D',
        flexShrink: 1,
    },
    termsLink: {
        fontSize: 14,
        color: '#007BFF',
        fontWeight: '600',
    },
    registerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#343A40',
        paddingVertical: 15,
        borderRadius: 30,
        width: '65%',
        elevation: 3,
        marginBottom: 25,
        marginTop: 40,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 10,
    },
    loginOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    loginText: {
        fontSize: 16,
        color: '#6C757D',
    },
    loginLink: {
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
