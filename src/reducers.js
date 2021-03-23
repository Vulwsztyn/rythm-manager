const defaultState = {
  command: 'p',
  prefix: '!',
}
export const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_COMMAND':
      return {
        ...state,
        command: action.value,
      }
    case 'CHANGE_PREFIX':
      return {
        ...state,
        prefix: action.value,
      }
    default:
      return state
  }
}
