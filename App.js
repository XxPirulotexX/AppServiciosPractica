import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          headerTitleAlign: 'center',
          headerShadowVisible: true,
        }}
      >
        <Stack.Screen
          name="Servicios"
          component={HomeScreen}
          options={{
            title: 'Servicios Plus',
            headerLeft: () => (
              <Ionicons
                name="apps"
                size={24}
                color="#FFFFFF"
                style={{ marginLeft: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Detalle"
          component={DetailScreen}
          options={{ title: 'Detalle del Servicio' }}
        />
        <Stack.Screen
          name="Confirmacion"
          component={ConfirmationScreen}
          options={{
            title: 'Confirmación',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}