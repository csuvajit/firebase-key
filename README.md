### Simple Key-Value storage for Firebase Realtime and Firestore Database.

### Setup Firebase DB
```js
const { Firebase } = require('firestore-db');

const firebase = new Firebase({
	projectId: '', // ID of the Google Project
	clientEmail: '', // Client Email of Firebase SDK
	privateKey: '' // Private Key of Firebase SDK
});
```
### Setup Provider
```js
const { FirebaseProvider, FirestoreProvider } = require('firebase-keyv');

// For Realtime Database
const settings = new FirebaseProvider(firebase.database().ref('settings'));

// For Cloud Firestore
const settings = new FirestoreProvider(firebase.firestore().collection('settings'));
```

## Methods

**`.init()`** - Initialize Provider<br>

**`.set(id, key, value)`** - Set Data<br>

**`.get(id, key, defaultValue)`** - Get Data<br>

**`.delete(id, key)`** - Delete Data<br>

**`.clear(id)`** - Clear All Data<br>
