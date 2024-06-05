import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Contacts } from "../screens/Contacts";
import { Talks } from "../screens/Talks";
import { Settings } from "../screens/Settings";
import AntDesign from '@expo/vector-icons/AntDesign'
import theme from "../globals/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatRoom } from "../screens/ChatRoom";

const { Navigator, Screen } = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
      <Stack.Navigator initialRouteName="talks" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="talks" component={Talks}/>
        <Stack.Screen name="chatRoom" component={ChatRoom}/>
      </Stack.Navigator>
    );
  }

export function AppRoutes(){
    const iconNames = {
        stackNavigator: 'wechat',
        settings: 'setting',
        contacts: 'contacts'
    };

    return (
        <Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return <AntDesign name={iconNames[route.name] || ''} size={size} color={color} />;
                },
                tabBarStyle: { backgroundColor: theme.colors.beige, borderTopWidth: 1, borderTopColor: '#CDCDC8', borderStyle: 'solid' },
                headerShown: false,
                tabBarActiveTintColor: theme.colors.navyBlue,
                tabBarInactiveTintColor: '#A2A0FF',
            })}
            initialRouteName="stackNavigator"
        >
            <Screen name="stackNavigator" component={StackNavigator} options={{ title: "Conversas" }}/>
            {/* <Screen name="contacts" component={Contacts} options={{ title: "Contatos" }}/> */}
            <Screen name="settings" component={Settings} options={{ title: "Configurações" }}/>

        </Navigator>
    )
}
