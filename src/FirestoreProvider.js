const firebase = require('firebase-admin');

class FirestoreProvider extends Map {
	constructor(collection) {
		super();
		this.collection = collection;
	}

	async init() {
		await this.collection.get().then(snapshot => {
			snapshot.forEach(doc => {
				super.set(doc.id, doc.data());
			});
		});
	}

	get(doc_id, key, default_value) {
		if (super.has(doc_id)) {
			const value = super.get(doc_id)[key];
			return value == null ? default_value : value;
		}
		return default_value;
	}

	set(doc_id, key, value) {
		const data = super.get(doc_id) || {};
		data[key] = value;
		super.set(doc_id, data);
		return this.collection.doc(doc_id).set({ [key]: value }, { merge: true });
	}

	delete(doc_id, key) {
		const data = super.get(doc_id) || {};
		delete data[key];
		return this.collection.doc(doc_id).set({ [key]: firebase.firestore.FieldValue.delete() }, { merge: true });
	}

	clear(doc_id) {
		super.delete(doc_id);
		return this.collection.doc(doc_id).delete();
	}
}

module.exports = FirestoreProvider;
