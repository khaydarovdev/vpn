import './assets/main.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
const firebaseConfig = {
	apiKey: 'AIzaSyDNOkE5uH9LKQMkJqRBM8TE3RaySKgiCX8',
	authDomain: 'laslesvpn-8fdee.firebaseapp.com',
	projectId: 'laslesvpn-8fdee',
	storageBucket: 'laslesvpn-8fdee.firebasestorage.app',
	messagingSenderId: '446639601983',
	appId: '1:446639601983:web:1533efa494fe727a553b8a',
	measurementId: 'G-X97QDGSN7Y',
};

const apv = initializeApp(firebaseConfig);
const analytics = getAnalytics(apv);
const app = createApp(App);

app.use(router);

app.mount('#app');
