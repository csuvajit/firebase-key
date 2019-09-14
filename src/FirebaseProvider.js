class FirebaseProvider extends Map {
	constructor(ref) {
		super();
		this.ref = ref;
	}

	async init() {
		const object = await this.ref.once('value').then(snap => snap.val());
		for (const [key, value] of this.entries(object)) {
			super.set(key, value);
		}
	}

	entries(object) {
		if (!object) return [];
		return Object.entries(object);
	}

	get(child_id, key, default_value) {
		if (super.has(id)) {
			const value = super.get(child_id)[key];
			return value == null ? default_value : value;
		}
		return default_value;
	}

	set(child_id, key, value) {
		const data = super.get(child_id) || {};
		data[key] = value;
		super.set(child_id, data);
		return this.ref.child(child_id).update({ [key]: value });
	}

	delete(child_id, key) {
		const data = super.get(id) || {};
		delete data[key];
		return this.ref.child(child_id).update({ [key]: null });
	}

	clear(child_id) {
		super.delete(child_id);
		return this.ref.child(child_id).remove();
	}
}

module.exports = FirebaseProvider;