import AppDispather from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';

let request = "";

class AppStore extends EventEmitter {

  getRequest() {
    return request;
  }

  getResult() {
    return Math.random() >= .5 ? true : false;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(cb) {
    this.on('change', cb);
  }

  removeChangeListener(cb) {
    this.removeListener('change', cb);
  }
}

const AppStoreInstance = new AppStore();

AppDispather.register(payload => {
  const action = payload.action;

  switch (action.actionType) {
    case AppConstants.INPUT_REQUEST:
      console.log('AppStore handle action:', action);
      break;

    default:
      return true;
  }

  AppStoreInstance.emitChange();
});

export default AppStoreInstance;
