import AppDispatcher from '../dispatcher/AppDispatcher';

export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const INPUT_REQUEST = 'INPUT_REQUEST';

export function updateInputValue(value) {
  AppDispatcher.handleAction({
    actionType: UPDATE_INPUT_VALUE,
    value
  });
}

  AppDispatcher.handleAction({
    actionType: INPUT_REQUEST,
    data: data
  });
}
