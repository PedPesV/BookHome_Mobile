import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

import Index from './paginas/index';
import Principal from './paginas/principal';
import Sesion from './paginas/sesion';
import Registro from './paginas/registro';
import Perfil from './paginas/perfil';
import Buscar from './paginas/buscar';
import Detalles from './paginas/detalles';
import Favoritos from './paginas/favoritos';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // O puedes mostrar un indicador de carga
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="index"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="index" component={Index} />
        <Stack.Screen name="principal" component={Principal} />
        <Stack.Screen name="sesion" component={Sesion} />
        <Stack.Screen name="registro" component={Registro} />
        <Stack.Screen name="perfil" component={Perfil} />
        <Stack.Screen name="buscar" component={Buscar} />
        <Stack.Screen name="detalles" component={Detalles} />
        <Stack.Screen name="favoritos" component={Favoritos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
