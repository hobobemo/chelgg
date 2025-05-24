// plugins/firebase.client.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

export default defineNuxtPlugin(nuxtApp => {
  const firebaseConfig = {
    apiKey: "AIzaSyAMWOOmjLWwFROZc9ZxG8BIQvXPOrd-twk",
    authDomain: "league-manager-e922a.firebaseapp.com",
    databaseURL: "https://league-manager-e922a-default-rtdb.firebaseio.com",
    projectId: "league-manager-e922a",
    storageBucket: "league-manager-e922a.firebasestorage.app",
    messagingSenderId: "530171275415",
    appId: "1:530171275415:web:6079c176f4bf2c2f7ca1d2",
    measurementId: "G-YWRFKWD9C2"
  }

  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app)
  const db = getFirestore(app)
  const rtdb = getDatabase(app)
  const storage = getStorage(app)

  nuxtApp.provide('firebase', {
    app,
    auth,
    db,
    rtdb,
    storage
  })
})
