import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SERVICIOS = [
  {
    id: 1,
    nombre: 'Domicilio',
    icono: 'cart',
    color: '#0EA5E9',
    precio: '$5.000',
    descripcion: 'Entrega rápida y segura en menos de 30 minutos',
  },
  {
    id: 2,
    nombre: 'Transporte',
    icono: 'car',
    color: '#8B5CF6',
    precio: '$8.000',
    descripcion: 'Movilidad cómoda y segura por la ciudad',
  },
  {
    id: 3,
    nombre: 'Limpieza',
    icono: 'sparkles',
    color: '#10B981',
    precio: '$25.000',
    descripcion: 'Servicio profesional de aseo para hogar u oficina',
  },
  {
    id: 4,
    nombre: 'Electricista',
    icono: 'flash',
    color: '#F59E0B',
    precio: '$40.000',
    descripcion: 'Reparaciones e instalaciones eléctricas certificadas',
  },
  {
    id: 5,
    nombre: 'Plomería',
    icono: 'water',
    color: '#3B82F6',
    precio: '$35.000',
    descripcion: 'Solución de fugas, destapes e instalación de tuberías',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.header}>Servicios Plus</Text>
      <Text style={styles.subtitle}>Elige el servicio que necesitas</Text>

      {SERVICIOS.map((s) => (
        <TouchableOpacity
          key={s.id}
          style={styles.card}
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate('Detalle', {
              servicio: s.nombre,
              precio: s.precio,
              descripcion: s.descripcion,
              icono: s.icono,
              color: s.color,
            })
          }
        >
          <View style={[styles.iconBox, { backgroundColor: s.color + '20' }]}>
            <Ionicons name={s.icono} size={26} color={s.color} />
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{s.nombre}</Text>
            <Text style={styles.cardDesc} numberOfLines={1}>
              {s.descripcion}
            </Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={styles.price}>{s.precio}</Text>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    // Sombra iOS
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    // Sombra Android
    elevation: 6,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },
  cardDesc: {
    fontSize: 13,
    color: '#64748B',
  },
  priceBox: {
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 4,
  },
});