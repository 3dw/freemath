import { initializeApp } from 'firebase'

// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyAymItt_aI7N3v0zQVtafvBJ2tCy1nuls8',
  authDomain: 'play12.firebaseapp.com',
  databaseURL: 'https://play12.firebaseio.com',
  projectId: 'play12',
  storageBucket: 'play12.appspot.com',
  messagingSenderId: '1064831045228',
  appId: '1:1064831045228:web:ad7008b73eecbf94'
})

export const db = app.database()
