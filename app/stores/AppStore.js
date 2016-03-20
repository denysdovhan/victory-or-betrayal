import {
  UPDATE_INPUT_VALUE,
  INPUT_REQUEST
} from '../actions/AppAction';

import AppDispather from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import { hashHistory } from 'react-router';

class AppStore extends EventEmitter {

  constructor(props) {
    super(props);

    this.setAppState = {
      status: null,
      query: '',
      value: ''
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

  handleUpdateInputValue({ value }) {
    this.setAppState = { value };
  }

  handleInputRequest({ value }) {
    if (value === '') {
      this.setAppState = { value, status: null };
      hashHistory.push('/');
      return;
    }


    this.setAppState = {
      query,
      value,
      status
    };
  }
}

const AppStoreInstance = new AppStore();

AppDispather.register(payload => {
  const action = payload.action;

  switch (action.actionType) {
    case UPDATE_INPUT_VALUE:
      AppStoreInstance.handleUpdateInputValue(action);
      break;

    case INPUT_REQUEST:
      AppStoreInstance.handleInputRequest(action);
      break;

    default:
      return true;
  }

  AppStoreInstance.emitChange();
});

export default AppStoreInstance;
