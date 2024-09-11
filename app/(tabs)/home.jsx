import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const Home = () => {
  const handlePress = () => {
    // Aquí puedes definir lo que sucederá cuando el botón sea presionado.
    console.log("Botón 'Saber más' presionado");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={images.wall} resizeMode={"cover"}>
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={images.logo}
                style={styles.logo}
                resizeMode="contain"
                className="max-w-[80px] w-full h-[80px] rounded-lg bg-white p-8"
              />
            </View>

            {/* Contenido */}
            <View style={styles.contentContainer}>
              <Text style={styles.title}>
                Sistema de Información para la Gestión de Torres de Santa Isabel
              </Text>
              <Text style={styles.description}>
                El sistema de información para la gestión del conjunto residencial Torres de Santa Isabel está diseñado para optimizar el manejo de información en torno a residentes, residencias, espacios de parqueadero, y la administración del salón comunal. Este sistema permitirá a los administradores del conjunto llevar un control eficiente y actualizado sobre los detalles de los residentes, las fechas de alquiler del salón comunal y el uso de los espacios de parqueadero. Además, se integrará una funcionalidad para gestionar las visitas de los invitados, facilitando una experiencia más organizada y transparente para todos los miembros de la comunidad. Con esta herramienta, se busca mejorar la administración del conjunto y promover una convivencia armoniosa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Saber más</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  contentContainer: {
    backgroundColor: '#4a4a4a',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 35,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#007BFF', // Color azul para el botón
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
