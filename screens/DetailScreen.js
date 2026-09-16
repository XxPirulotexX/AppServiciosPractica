import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetailScreen({ route }) {
  const { servicio, precio, descripcion } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servicio: {servicio}</Text>
      <Text style={styles.text}>Precio: {precio}</Text>
      <Text style={styles.text}>{descripcion}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contratar Servicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, justifyContent:'center' },
  title: { fontSize:24, fontWeight:'bold', marginBottom:10 },
  text: { fontSize:16, marginBottom:10 },
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: { color: '#FFF', fontWeight: 'bold' }
});