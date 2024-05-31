import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Contacts } from "../screens/Contacts";
import { Talks } from "../screens/Talks";
import { Settings } from "../screens/Settings";
import AntDesign from '@expo/vector-icons/AntDesign'

const { Navigator, Screen } = createBottomTabNavigator() 

export function AppRoutes(){
    const iconNames = {
        talks: 'wechat',
        settings: 'setting',
        contacts: 'contacts'
    };

    return (
        <Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return <AntDesign name={iconNames[route.name] || ''} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}
            initialRouteName="contacts"
        >
            <Screen name="talks" component={Talks} options={{ title: "Conversas" }}/>
            <Screen name="contacts" component={Contacts} options={{ title: "Contatos" }}/>
            <Screen name="settings" component={Settings} options={{ title: "Configurações" }}/>
        </Navigator>
    )
}
