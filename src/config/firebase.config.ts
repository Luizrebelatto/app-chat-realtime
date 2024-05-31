import * as environment from "@env"

const firebaseConfig = {
	apiKey: environment.API_KEY,
	authDomain: environment.AUTH_DOMAIN,
	projectId: environment.PROJECT_ID,
	storageBucket: environment.STORAGE_BUCKET,
	messagingSenderId: environment.MESSAGING_SENDER_ID,
	appId: environment.APP_ID,
	measurementId: environment.MEASUREMENT_ID
};

export default firebaseConfig;