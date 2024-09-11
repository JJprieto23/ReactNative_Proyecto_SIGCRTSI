import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants/";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={images.wall} resizeMode={"cover"}>
          <View className="w-full mb-6 justify-top items-center min-h-[100vh] px-3">
            {/* Logo */}
            <View className="my-6 max-w-[80px] w-full h-[80px]">
              <Image
                source={images.logo}
                className="max-w-[80px] w-full h-[80px] rounded-lg bg-white p-8"
                resizeMode="contain"
              />
            </View>
            {/* Contenido */}
            <View className="relative bg-slate-800 p-4 rounded-lg">
              <Text className="text-2xl text-white font-bold text-center">
                Bienvenid@s a su conjunto residencial{" "}
                <Text className="text-lime-400">Torres de Santa Isabel</Text>
              </Text>
              <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                Aquí podrá administrar eficientemente todos los aspectos de su
                conjunto, con herramientas diseñadas para facilitar su trabajo y
                mejorar la organización. ¡Estamos para apoyarle en cada paso!
              </Text>
              <Text className="text-2xl font-pregular text-white mt-7 text-center">
                Ingrese como:
              </Text>
              <View>
                <CustomButton
                  title="Propietario"
                  handlePress={() => router.push("/sing-in-prop")}
                  containerStyles="w-full mt-7 bg-lime-400"
                />
                <CustomButton
                  title="Administrador"
                  handlePress={() => router.push("/sing-in-admin")}
                  containerStyles="w-full mt-7 bg-red-500"
                />
                <CustomButton
                  title="Portero"
                  handlePress={() => router.push("/sing-in-portero")}
                  containerStyles="w-full mt-7 bg-cyan-400"
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
