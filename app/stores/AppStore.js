import AppDispather from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';

class AppStore extends EventEmitter {

  constructor(props) {
    super(props);
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

AppDispather.register(payload => {
  const action = payload.action;

  switch (action.actionType) {
    case AppConstants.INPUT_REQUEST:
      console.log('works!');
      break;

    default:
      return true;
  }

  AppStore.emitChange();
});

export default AppStore;
