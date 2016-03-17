import AppDispather from '../dispatcher/AppDispatcher';
import { INPUT_REQUEST } from '../actions/AppAction';
import { EventEmitter } from 'events';

class AppStore extends EventEmitter {

  constructor(props) {
    super(props);

    this.requests = this.requests || [{ value: "start", result: false}];
  }

  getRequests() {
    return this.requests;
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

  handleInputRequest(action) {
    const reqIndex = this.requests.findIndex((req) => req.value === action.data);

    if (reqIndex < 0) {
      this.requests.unshift({
        value: action.data,
        result: AppStoreInstance.getResult()
      });
    }
  }
}

const AppStoreInstance = new AppStore();

AppDispather.register(payload => {
  const action = payload.action;

  switch (action.actionType) {
    case INPUT_REQUEST:
      AppStoreInstance.handleInputRequest(action);
      break;

    default:
      return true;
  }

  AppStoreInstance.emitChange();
});

export default AppStoreInstance;
