import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Switch} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Registro({ navigation }) {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <ScrollView contentContainerStyle={styles.body}>
                <Text style={styles.textTitle}>Registro</Text>
                
                <View style={styles.inputContainer}>
                    <Ionicons name="person-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Usario" placeholderTextColor="#888" />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="call-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Numero de Teléfono" placeholderTextColor="#888" />
                </View>
                
                <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" keyboardType="email-address" />
                </View>
                
                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#888" secureTextEntry={true} />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Confirmar Contraseña" placeholderTextColor="#888" secureTextEntry={true} />
                </View>
                <View style={styles.termsContainer}>
                    <Switch
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text style={styles.termsText}>Acepto los términos y condiciones</Text>
                </View>

                

                <TouchableOpacity style={styles.button} onPress={() => alert('Registro completado')}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
                
                <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('sesion')}>
                    <Text style={styles.textLink}>Iniciar sesión</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.foot}></View>
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
        backgroundColor: '#000',
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        padding: 1,
        marginVertical: 8,
        marginLeft: 40,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#2F2E2E',
        padding: 10,
        borderRadius: 10,
        width: '60%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
    },
    textTitle: {
        fontFamily: 'Montserrat',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#000',
    },
    textLink: {
        color: '#007bff',
        fontSize: 18,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    termsText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#000',
    },
    foot: {
        height: 30,
        backgroundColor: '#000',
    },
});