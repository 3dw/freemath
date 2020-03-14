import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase.initializeApp({
  apiKey: 'AIzaSyAbXT46-ksLj1TftoZM6InbqE98E7pY3d0',
  authDomain: 'freemath-29f84.firebaseapp.com',
  databaseURL: 'https://freemath-29f84.firebaseio.com',
  projectId: 'freemath-29f84',
  storageBucket: 'freemath-29f84.appspot.com',
  messagingSenderId: '729707040849',
  appId: '1:729707040849:web:d55e0f2cbb5b64e9392870',
  measurementId: 'G-CSRZ3GV0SP'
}).database()

export const play12Ref = db.ref('play12')
export const chatsRef = db.ref('chats')
