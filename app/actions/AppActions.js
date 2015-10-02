import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

export default {
  inpurtRequest(data) {
    AppDispatcher.handleAction({
      actionType: AppConstants.INPUT_REQUEST,
      data: data
    });
  }
}
