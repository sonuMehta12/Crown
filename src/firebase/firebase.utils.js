import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { doc } from 'prettier'

const config = {
  apiKey: 'AIzaSyAKF9a16ktoEogJlFQMggW4sW_0k-WElWY',
  authDomain: 'unified-adviser-303311.firebaseapp.com',
  projectId: 'unified-adviser-303311',
  storageBucket: 'unified-adviser-303311.appspot.com',
  messagingSenderId: '977055573751',
  appId: '1:977055573751:web:289eac947e7c5dbb6ed5f2',
  measurementId: 'G-6Y924ZN8CM',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const adddCollectionAndDocuments = async (
  collectionKey,
  objectsTOAdd
) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()

  objectsTOAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    console.log(obj)
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collecitons) => {
  const transformedCollection = collecitons.docs.map((doc) => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  console.log(transformedCollection)
  return transformedCollection.reduce((accumulator, collection) => {
    //title of collections = collection itself
    //hats = hats's collections
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
