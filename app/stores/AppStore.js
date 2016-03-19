import AppDispather from '../dispatcher/AppDispatcher';
import { INPUT_REQUEST } from '../actions/AppAction';
import { EventEmitter } from 'events';

class AppStore extends EventEmitter {

  constructor(props) {
    super(props);

    this.setAppState = {
      status: null,
      query: ''
    };
  }

  set setAppState(newState) {
    this.state = Object.assign({}, this.state, newState);
  }

  get getAppState() {
    return this.state;
  }

  get getStatus() {
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

  handleInputRequest({ data }) {
    if (this.state.query === data) return;

    this.setAppState = {
      status: this.getStatus,
      query: data
    };
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
