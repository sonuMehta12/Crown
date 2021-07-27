import firebase from 'firebase'
import 'firebase/firebase-storage'
import 'firebase/firebase-auth'

const config = {
  apiKey: 'AIzaSyAKF9a16ktoEogJlFQMggW4sW_0k-WElWY',
  authDomain: 'unified-adviser-303311.firebaseapp.com',
  projectId: 'unified-adviser-303311',
  storageBucket: 'unified-adviser-303311.appspot.com',
  messagingSenderId: '977055573751',
  appId: '1:977055573751:web:289eac947e7c5dbb6ed5f2',
  measurementId: 'G-6Y924ZN8CM',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestroe.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error createing user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestroe = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })
export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
