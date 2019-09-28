import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyA_G5yjhxocWtdOHuGxslESBtX46lpHW8c',
	authDomain: 'crwn-db-83836.firebaseapp.com',
	databaseURL: 'https://crwn-db-83836.firebaseio.com',
	projectId: 'crwn-db-83836',
	storageBucket: '',
	messagingSenderId: '205979262832',
	appId: '1:205979262832:web:d46b7b1bf83d42950eb9b5',
	measurementId: 'G-RWVFGFTBFR'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
