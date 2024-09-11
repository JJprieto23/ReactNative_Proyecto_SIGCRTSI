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

const Bookmark = () => {
  // Función para manejar el evento de rentar
  const handleRent = (spaceNumber) => {
    // Aquí puedes definir lo que sucederá cuando el botón sea presionado.
    console.log(`Rentar espacio número ${spaceNumber}`);
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

            {/* Título y descripción */}
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Espacios del parqueadero</Text>
              <Text style={styles.description}>
                Cada tarjeta muestra el número del espacio y un botón de "Rentar". Al seleccionar el botón, el espacio se reserva automáticamente para el propietario. Cada residente puede alquilar un espacio para automóvil y uno para moto, asegurando una asignación clara y eficiente de los espacios de estacionamiento.
              </Text>

              {/* Subtítulo Carro */}
              <Text style={styles.subtitle}>Carro</Text>
              <View style={styles.row}>
                {['1', '2', '3'].map((number) => (
                  <View key={number} style={styles.card}>
                    <Text style={styles.cardNumber}>{number}</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => handleRent(number)}
                    >
                      <Text style={styles.buttonText}>Rentar</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              {/* Subtítulo Moto */}
              <Text style={styles.subtitle}>Moto</Text>
              <View style={styles.row}>
                {['4', '5', '6'].map((number) => (
                  <View key={number} style={styles.card}>
                    <Text style={styles.cardNumber}>{number}</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => handleRent(number)}
                    >
                      <Text style={styles.buttonText}>Rentar</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
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
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '30%',
  },
  cardNumber: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50', // Color verde para el botón
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Bookmark;
