import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../context/authContext";

export function Routes() {

	const { userAuthenticated } = useAuth();

	return (
		<NavigationContainer>
			{userAuthenticated== 'undefined' ? <AppRoutes /> : <AuthRoutes/>}
		</NavigationContainer>
	);
}