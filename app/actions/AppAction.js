import AppDispatcher from '../dispatcher/AppDispatcher';

export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const INPUT_REQUEST = 'INPUT_REQUEST';
export const RECIEVE_QUERY = 'RECIEVE_QUERY';

export function inputRequest(value) {
  AppDispatcher.handleAction({
    actionType: INPUT_REQUEST,
    value
  });
}

export function receiveQuery(status, query) {
  AppDispatcher.handleAction({
    actionType: RECIEVE_QUERY,
    status,
    query
  });
}
