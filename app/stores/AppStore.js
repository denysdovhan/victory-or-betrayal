import {
  INPUT_REQUEST,
  RECIEVE_QUERY
} from 'actions/AppAction';

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
    return Math.random() >= 0.4 ? 'victory' : 'betrayal';
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

  handleInputRequest({ value }) {
    if (value === '') {
      this.setAppState = { value, status: null };
      hashHistory.push('/');
      return;
    }

    const status = this.getStatus;
    const query = encodeURIComponent(value.split(' ').join('_'));
    if (this.state.query === query) return;

    this.setAppState = {
      query,
      value,
      status
    };

    hashHistory.push(`${status}/${query}`);
  }

  handleRecieveQuery({ status, query }) {
    if (status && query) {
      if (status === 'victory' || status === 'betrayal') {

        this.setAppState = {
          query,
          value: decodeURIComponent(query.split('_').join(' ')),
          status
        };

        hashHistory.push(`${status}/${query}`);
      } else {
        console.error('Invalid query:', query, status);
        hashHistory.push('/');
      }
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

    case RECIEVE_QUERY:
      AppStoreInstance.handleRecieveQuery(action);
      break;

    default:
      return true;
  }

  AppStoreInstance.emitChange();
});

export default AppStoreInstance;
