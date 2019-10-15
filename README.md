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

### Methods
```js
// Before you use the provider, you would have to run the `init` method.
async function init() {
    await settings.init(); // Only for one time.
}

// Set data
settings.set('some_id', 'some_key', 'some_value');

// Get data
settings.get('some_id', 'some_key', 'deafult_value'); // returns 'some_value'

// Clear data
settings.clear('some_id', 'some_key');

// Get default value
settings.get('some_id', 'some_key', 'deafult_value'); // returns 'default_value'

// Clear all data
settings.clear('some_id');
```