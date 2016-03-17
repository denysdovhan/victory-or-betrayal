import AppDispatcher from '../dispatcher/AppDispatcher';

export const INPUT_REQUEST = 'INPUT_REQUEST';

export function inputRequest(data) {
  AppDispatcher.handleAction({
    actionType: INPUT_REQUEST,
    data: data
  });
}
