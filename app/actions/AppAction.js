import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppAction = {
  inputRequest(data) {
    console.log('AppAction:', data);
    
    AppDispatcher.handleAction({
      actionType: AppConstants.INPUT_REQUEST,
      data: data
    });
  }
}

export default AppAction;
