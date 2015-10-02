import { Dispatcher } from 'flux';

let AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = (action) => {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

export default AppDispatcher;
