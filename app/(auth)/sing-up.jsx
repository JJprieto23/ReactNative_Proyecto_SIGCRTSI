import { View, Text, ScrollView, Image, ImageBackground, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const singUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    label: ["propietario"],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password || !form.username ) {
      Alert.alert("Error", "Llene todos los campos");
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username, form.label); 
      router.replace('/sing-in-prop')
    } catch (error) {
      Alert.alert('Error IA', error.message)
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={images.wall} resizeMode={"cover"}>
          <View className="w-full justify-center items-center px-4 my-6">
            <View className="mt-3 max-w-[80px] w-full">
              <Image
                source={images.logo}
                className="max-w-[80px] w-full h-[80px] rounded-lg bg-white p-8"
                resizeMode="contain"
              />
            </View>
            <View className="w-full justify-center min-h-[83vh] px-4 my-6 bg-slate-800 rounded-lg">
              <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                Enviar solicitud
              </Text>

              <FormField
                title="Nombre de usuario"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                otherStyles="mt-10"
              />

              <FormField
                title="Correo"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
              />

              <FormField
                title="Contraseña"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-7"
              />

              <CustomButton
                title="Enviar"
                handlePress={submit}
                containerStyles="mt-7 bg-secondary"
                isLoading={isSubmitting}
              />

              <View className="justify-center pt-5 flex-row gap-2 mb-6">
                <Text className="text-lg text-gray-100 font-pregular text-center">
                  ¿ Ya tiene una cuenta ?{" "}
                  <Link
                    href="/sing-in-prop"
                    className="text-lg font-psemibold text-lime-400"
                  >
                    Ingrese aquí
                  </Link>
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default singUp;
