export const cartAction = (product, qty) => {
  return {
    type: 'Add_To_Cart',
    data: product,
    qty: qty,
  }
}

export const increaseAction = (product) => {
  return {
    type: 'increaseQ',
    data: product,
  }
}
export const decreaseAction = (product) => {
  return {
    type: 'decreaseQ',
    data: product,
  }
}
export const removeCartAction = (product) => {
  return {
    type: 'removeCartItem',
    data: product,
  }
}
