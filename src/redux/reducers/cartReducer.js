export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'Add_To_Cart':
      let existingProd = state.find(
        (item) =>
          item.sku === action.data.sku &&
          item.selectedSize === action.data.selectedSize
      )
      if (existingProd) {
        return state.map((x) =>
          x === existingProd
            ? { ...existingProd, qty: existingProd.qty + action.qty }
            : x
        )
      } else {
        return [...state, action.data]
      }
    case 'increaseQ':
      let existingProd2 = state.find(
        (item) =>
          item.sku === action.data.sku &&
          item.selectedSize === action.data.selectedSize
      )
      if (existingProd2) {
        return state.map((x) =>
          x === existingProd2 ? { ...x, qty: x.qty + 1 } : x
        )
      } else {
        return state
      }
    case 'decreaseQ':
      let existingProd3 = state.find(
        (item) =>
          item.sku === action.data.sku &&
          item.selectedSize === action.data.selectedSize
      )
      if (existingProd3) {
        return state.map((x) =>
          x === existingProd3 ? { ...x, qty: x.qty - 1 } : x
        )
      } else {
        return state
      }
    case 'removeCartItem':
      return state.filter(
        (item) =>
          item.sku !== action.data.sku ||
          item.selectedSize !== action.data.selectedSize
      )
    default:
      return state
  }
}
