export const modalReducer = (
  state = { activeModalB: false, product: null },
  action
) => {
  switch (action.type) {
    case 'activeModal':
      return { activeModalB: !state.activeModalB, product: action.data }
    default:
      return state
  }
}
