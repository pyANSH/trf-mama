// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

import 'firebase/auth';
import 'firebase/firestore';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCwrW7yq5yVylhXE0W-f2cnXMTxUwAYwM8',
	authDomain: 'trf-mama.firebaseapp.com',
	projectId: 'trf-mama',
	storageBucket: 'trf-mama.appspot.com',
	messagingSenderId: '342066366940',
	appId: '1:342066366940:web:370b63a199d02acc3a6719',
	measurementId: 'G-XYQF5E0X4C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const firebaseAuth = getAuth(app);
export const firebaseDb = getFirestore(app);

export const storage = getStorage(); 
// const analytics = getAnalytics(app);
