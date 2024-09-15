import { View, Text, ScrollView, Image, ImageBackground, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { signIn, getUserLabels } from "../../lib/appwrite";

const singInProp = () => {
   const [form, setForm] = useState({
     email: "",
     password: "",
   });

   const [isSubmitting, setIsSubmitting] = useState(false);

   const submit = async () => {
     if (!form.email || !form.password) {
       Alert.alert("Error", "Llene todos los campos");
     }
     setIsSubmitting(true);
     try {
       const user = await signIn(form.email, form.password);
       if (user) {
         const label = await getUserLabels();
         console.log(label)
         if (label === "admin") {
           router.replace("/home");
         } else {
           Alert.alert("Administrador no encontrado");
         }
       }
     } catch (error) {
       Alert.alert("Error", error.message);
     } finally {
       setIsSubmitting(false);
       console.log(form.email);
     }
   };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={images.wall} resizeMode={"cover"}>
          <View className="w-full justify-center items-center px-4 min-h-[100vh]">
            <View className="mt-2 max-w-[80px] w-full">
              <Image
                source={images.logo}
                className="max-w-[80px] w-full h-[80px] rounded-lg bg-white p-8"
                resizeMode="contain"
              />
            </View>
            <View className="w-full justify-center items-center my-3 p-3 bg-slate-800 rounded-lg">
              <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                Ingrese como administrador
              </Text>
              <FormField
                title="Correo"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
              />
              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-7"
              />
              <CustomButton
                title="Ingresar"
                handlePress={submit}
                containerStyles="w-full mt-7 bg-red-500"
                isLoading={isSubmitting}
              />
              <View className="justify-center pt-5">
                <Text className="text-lg text-gray-100 font-pregular text-center">
                  ¿Desea ingresar como{" "}
                  <Link
                    href="/sing-in-portero"
                    className="text-lg font-psemibold text-cyan-400"
                  >
                    Portero{" "}
                  </Link>
                  o{" "}
                  <Link
                    href="/sing-in-prop"
                    className="text-lg font-psemibold text-lime-400"
                  >
                    Propietario{" "}
                  </Link>
                  ?
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default singInProp;
