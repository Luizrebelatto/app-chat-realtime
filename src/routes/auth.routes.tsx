import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignUp } from "../screens/SignUp";
import { SignIn } from "../screens/SignIn";
import { AppRoutes } from "./app.routes";

const { Navigator, Screen } = createNativeStackNavigator() 

export function AuthRoutes(){
    return(
        <Navigator initialRouteName="signIn"
            screenOptions={{ 
                headerShown: false,
                gestureEnabled: false
            }}
        >
            <Screen name="signIn" component={SignIn}/>
            <Screen name="signUp" component={SignUp}/>
            <Screen name="appRoutes" component={AppRoutes}/>
        </Navigator>
    )
}