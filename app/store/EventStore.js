import {EventEmitter} from 'events';
import assign from 'object-assign';

const EventStore = assign({}, EventEmitter.prototype, {
	emitChange(EVENT, args){
		this.emit(EVENT, args);
	},

	/**
	* @param {function} callback
	*/
	addChangeListener(EVENT, callback) {
		this.on(EVENT, callback);
	},

	/**
	* @param {function} callback
	*/
	removeChangeListener(EVENT, callback) {
		this.removeListener(EVENT, callback);
	}
});

export default EventStore;