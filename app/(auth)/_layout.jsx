import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sing-up"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sing-in-prop"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sing-in-portero"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sing-in-admin"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light"/>
    </>
  )
}

export default AuthLayout