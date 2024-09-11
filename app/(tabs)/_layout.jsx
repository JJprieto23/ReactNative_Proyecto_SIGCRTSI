import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon,color,name,focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source = {icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#33c8ff',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
          }
        }}
      >
        <Tabs.Screen 
          name="home" 
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Incio"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='bookmark' 
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.car}
                color={color}
                name="Parqueadero"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen name='create' options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.calendar}
                color={color}
                name="Salon Comunal"
                focused={focused}
              />
          )
        }}
        />
        <Tabs.Screen name='profile' options={{
          title: 'Perfil',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
          )
        }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout