import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Servicios Plus</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detalle', {
          servicio: 'Domicilios',
          precio: '$5.000',
          descripcion: 'Entrega rápida y segura en menos de 30 minutos'
        })}
      >
        <Text style={styles.cardTitle}>
          <Ionicons name="cart" size={20} color="#0EA5E9" /> Domicilio
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detalle', {
          servicio: 'Transporte',
          precio: '$8.000',
          descripcion: 'Movilidad cómoda y segura por la ciudad'
        })}
      >
        <Text style={styles.cardTitle}>
          <Ionicons name="car" size={20} color="#0EA5E9" /> Transporte
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, backgroundColor:'#F3F4F6' },
  header: { fontSize:26, fontWeight:'bold', marginBottom:20 },
  card: {
    backgroundColor:'#FFF',
    padding:20,
    borderRadius:15,
    marginBottom:15,
    elevation:4
  },
  cardTitle:{ fontSize:18, fontWeight:'bold' }
});