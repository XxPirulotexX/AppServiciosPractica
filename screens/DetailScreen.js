import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen({ route, navigation }) {
  const { servicio, precio, descripcion, icono, color } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.iconCircle, { backgroundColor: (color || '#2563EB') + '20' }]}>
          <Ionicons name={icono || 'construct'} size={56} color={color || '#2563EB'} />
        </View>

        <Text style={styles.title}>{servicio}</Text>

        <View style={styles.priceBadge}>
          <Ionicons name="pricetag" size={16} color="#FFFFFF" />
          <Text style={styles.priceText}>{precio}</Text>
        </View>

        <View style={styles.descCard}>
          <Text style={styles.descTitle}>Descripción</Text>
          <Text style={styles.descText}>{descripcion}</Text>
        </View>

        <View style={styles.featuresCard}>
          <Text style={styles.descTitle}>Incluye</Text>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={18} color="#10B981" />
            <Text style={styles.featureText}>Atención personalizada</Text>
          </View>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={18} color="#10B981" />
            <Text style={styles.featureText}>Garantía de servicio</Text>
          </View>
          <View style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={18} color="#10B981" />
            <Text style={styles.featureText}>Pago contra entrega</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={() =>
          navigation.navigate('Confirmacion', {
            servicio,
            precio,
            descripcion,
            icono,
            color,
          })
        }
      >
        <Ionicons name="checkmark-done" size={20} color="#FFFFFF" />
        <Text style={styles.buttonText}>Contratar Servicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  content: {
    padding: 20,
    paddingBottom: 120,
    alignItems: 'center',
  },
  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 12,
  },
  priceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 24,
  },
  priceText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 6,
  },
  descCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featuresCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  descTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 10,
  },
  descText: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#475569',
    marginLeft: 8,
  },
  button: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
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