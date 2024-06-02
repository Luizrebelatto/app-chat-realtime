import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Contacts } from "../screens/Contacts";
import { Talks } from "../screens/Talks";
import { Settings } from "../screens/Settings";
import AntDesign from '@expo/vector-icons/AntDesign'
import theme from "../globals/theme";

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
                tabBarStyle: { backgroundColor: theme.colors.beige, borderTopWidth: 1, borderTopColor: '#CDCDC8', borderStyle: 'solid' },
                headerShown: false,
                tabBarActiveTintColor: theme.colors.navyBlue,
                tabBarInactiveTintColor: '#A2A0FF',
            })}
            initialRouteName="talks"
        >
            <Screen name="talks" component={Talks} options={{ title: "Conversas" }}/>
            <Screen name="contacts" component={Contacts} options={{ title: "Contatos" }}/>
            <Screen name="settings" component={Settings} options={{ title: "Configurações" }}/>
        </Navigator>
    )
}
