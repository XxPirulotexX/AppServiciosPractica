import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ConfirmationScreen({ route, navigation }) {
  const { servicio, precio, descripcion, icono, color } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.checkCircle}>
        <Ionicons name="checkmark" size={60} color="#FFFFFF" />
      </View>

      <Text style={styles.title}>¡Servicio Contratado!</Text>
      <Text style={styles.subtitle}>
        Tu solicitud fue registrada exitosamente
      </Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Resumen</Text>

        <View style={styles.summaryRow}>
          <View style={[styles.iconBox, { backgroundColor: (color || '#2563EB') + '20' }]}>
            <Ionicons name={icono || 'construct'} size={22} color={color || '#2563EB'} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.summaryLabel}>Servicio</Text>
            <Text style={styles.summaryValue}>{servicio}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Ionicons name="pricetag-outline" size={20} color="#2563EB" />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.summaryLabel}>Precio</Text>
            <Text style={styles.summaryValue}>{precio}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Ionicons name="information-circle-outline" size={20} color="#2563EB" />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.summaryLabel}>Descripción</Text>
            <Text style={styles.summaryValue}>{descripcion}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={() => navigation.popToTop()}
      >
        <Ionicons name="home" size={20} color="#FFFFFF" />
        <Text style={styles.buttonText}>Volver al Inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    padding: 24,
  },
  checkCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 24,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 28,
  },
  summaryCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 28,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
  summaryTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#94A3B8',
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 14,
  },
  button: {
    width: '100%',
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 8,
  },
});