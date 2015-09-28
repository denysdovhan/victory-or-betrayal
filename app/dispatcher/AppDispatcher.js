import { Dispatcher } from 'flux';

let AppDispatcher = new Dispatcher();

let AppDispatcher.handleAction = function (action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

export default AppDispatcher;
