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
import { FontAwesome } from '@expo/vector-icons'; // Importar FontAwesome para los iconos

const Profile = () => {
  // Función para manejar la modificación de datos
  const handleEdit = (field) => {
    // Aquí puedes definir lo que sucederá cuando el icono sea presionado.
    console.log(`Modificar ${field}`);
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

            {/* Título y datos del perfil */}
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Perfil</Text>

              <View style={styles.profileInfo}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.info}>Mery Rodríguez</Text>
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.label}>Teléfono:</Text>
                <View style={styles.infoContainer}>
                  <Text style={styles.info}>3103458796</Text>
                  <TouchableOpacity onPress={() => handleEdit('Teléfono')}>
                    <FontAwesome name="pencil" size={20} color="#FFC107" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.label}>Correo:</Text>
                <View style={styles.infoContainer}>
                  <Text style={styles.info}>mery@gmail.com</Text>
                  <TouchableOpacity onPress={() => handleEdit('Correo')}>
                    <FontAwesome name="pencil" size={20} color="#FFC107" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.label}>Número Documento:</Text>
                <Text style={styles.info}>1245879658</Text>
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.label}>Meses Atrasados:</Text>
                <Text style={styles.info}>0</Text>
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.label}>Espacios Parqueadero</Text>
                <Text style={styles.info}>Moto: 11</Text>
                <Text style={styles.info}>Carro: 0</Text>
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.label}>Código Vivienda:</Text>
                <Text style={styles.info}>1109</Text>
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
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  profileInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Profile;
