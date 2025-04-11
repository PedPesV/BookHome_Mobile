import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Index({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.body}>
        {/* Sección de Perfil */}
        <View style={styles.header}>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.photoContainer}>
            <Image 
              source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} 
              style={styles.profilePhoto}
            />
          </View>
          
          <View style={styles.userInfo}>
            <View style={styles.infoRow}>
              <Ionicons name="person" size={18} color="#6C757D" style={styles.infoIcon} />
              <Text style={styles.infoText}>María González</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="mail" size={18} color="#6C757D" style={styles.infoIcon} />
              <Text style={styles.infoText}>maria@gmail.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="call" size={18} color="#6C757D" style={styles.infoIcon} />
              <Text style={styles.infoText}>+1 234 567 890</Text>
            </View>
            
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar Perfil</Text>
              <Ionicons name="pencil" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Favoritos */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Mis Favoritos</Text>
          
          <View style={styles.favoritesCarousel}>
            <TouchableOpacity style={styles.carouselArrow}>
              <Ionicons name="chevron-back" size={30} color="#6C757D" />
            </TouchableOpacity>

            <View style={styles.favoriteProperty}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' }} 
                style={styles.propertyImage}
              />
              <View style={styles.propertyInfo}>
                <Text style={styles.propertyTitle}>Casa en la playa</Text>
                <Text style={styles.propertyLocation}>
                  <Ionicons name="location" size={14} color="#6C757D" /> Playa del Carmen, MX
                </Text>
                <Text style={styles.propertyDescription}>
                  Hermosa casa frente al mar con 3 habitaciones, piscina privada y vista al océano.
                </Text>
                <View style={styles.propertyFooter}>
                  <Text style={styles.propertyPrice}>$250/noche</Text>
                  
                </View>
                <TouchableOpacity 
                    style={styles.detailsButton}
                    onPress={() => navigation.navigate('detalles')}
                  >
                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                  </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.carouselArrow}>
              <Ionicons name="chevron-forward" size={30} color="#6C757D" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.viewAllButton} onPress={()=>navigation.navigate('favoritos')}>
            <Text style={styles.viewAllText}>Ver todos mis favoritos</Text>
          </TouchableOpacity>
        </View>

        {/* Opciones de cuenta */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Configuración</Text>
          
          <TouchableOpacity style={styles.optionButton}>
            <View style={styles.optionContent}>
              <Ionicons name="notifications" size={24} color="#6C757D" />
              <Text style={styles.optionText}>Notificaciones</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6C757D" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionButton}>
            <View style={styles.optionContent}>
              <Ionicons name="lock-closed" size={24} color="#6C757D" />
              <Text style={styles.optionText}>Seguridad</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6C757D" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionButton}>
            <View style={styles.optionContent}>
              <Ionicons name="help-circle" size={24} color="#6C757D" />
              <Text style={styles.optionText}>Ayuda</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6C757D" />
          </TouchableOpacity>
        </View>

        {/* Acciones de cuenta */}
        <View style={styles.sectionContainer}>
          <TouchableOpacity 
            style={[styles.accountAction, styles.logoutAction]}
            onPress={() => navigation.navigate('sesion')}
          >
            <Ionicons name="exit" size={24} color="#DC3545" />
            <Text style={[styles.accountActionText, styles.logoutText]}>Cerrar Sesión</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.accountAction, styles.deleteAction]}>
            <Ionicons name="trash" size={24} color="#DC3545" />
            <Text style={[styles.accountActionText, styles.deleteText]}>Eliminar Cuenta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Menú de navegación */}
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('principal')}
        >
          <Ionicons name="home" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Inicio</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('buscar')}
        >
          <Ionicons name="search" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Buscar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navButton, styles.activeNavButton]}
          onPress={() => navigation.navigate('perfil')}
        >
          <Ionicons name="person" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  body: {
    paddingBottom: 100,
  },
  header: {
    height: 65,
    marginBottom: 30,
    backgroundColor: '#151719',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 12,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  photoContainer: {
    position: 'relative',
    marginRight: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#E5E7EB',
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#fff',
    marginRight: 5,
    fontWeight: '600',
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  favoritesCarousel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  carouselArrow: {
    padding: 10,
  },
  favoriteProperty: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F9FAFB',
    elevation: 2,
  },
  propertyImage: {
    width: '100%',
    height: 150,
  },
  propertyInfo: {
    padding: 15,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 5,
  },
  propertyLocation: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 10,
  },
  propertyDescription: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 15,
    lineHeight: 20,
  },
  propertyFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  propertyPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#10B981',
  },
  detailsButton: {
    marginTop:'10',
    alignItems:'center',
    backgroundColor: '#343A40',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  detailsButtonText: {
    
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  viewAllButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
  viewAllText: {
    color: '#343A40',
    fontWeight: '500',
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#374151',
  },
  accountAction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  accountActionText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  logoutAction: {
    marginBottom: 5,
  },
  logoutText: {
    color: '#EF4444',
  },
  deleteAction: {},
  deleteText: {
    color: '#EF4444',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#151719',
    paddingVertical: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  activeNavButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
});
