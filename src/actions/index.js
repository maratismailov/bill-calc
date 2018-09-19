export const passOldCheckIndexToStore = index => ({
  type: "OLD_CHECK",
  OldCheckIndex: index
})

export const addCheckToStore = (singleCheck, collectiveDishes) => ({
  type: "ADD_CHECK",
  check: singleCheck,
  collectiveDishes: collectiveDishes,
})

export const addMemberToStore = singleDish => ({
  type: "ADD_MEMBER",
  member: singleDish
})

export const addCollectiveDishToStore = singleDish => ({
  type: "ADD_COLLECTIVE",
  collective: singleDish
})

export const calculate = () => ({
  type: "CALCULATE"
})

export const addMemberNameToStore = (enteredValue, memberId) => ({
  type: 'ADD_MEMBER_NAME',
  memberName: enteredValue,
  memberId: memberId
})

export const addServiceChargeToStore = (enteredValue, memberId) => ({
  type: 'ADD_SERVICE_CHARGE',
  serviceCharge: enteredValue,
  memberId: memberId
})

export const addDishToStore = (singleDish, memberId) => ({
  type: "ADD_DISH",
  dish: singleDish,
  memberId: memberId
})

export const addDishNameToStore = (enteredValue, index, memberId) => ({
  type: "ADD_DISH_NAME",
  dishName: enteredValue,
  dishId: index,
  memberId: memberId
})

export const addDishPriceToStore = (enteredValue, index, memberId) => ({
  type: "ADD_DISH_PRICE",
  dishPrice: enteredValue,
  dishId: index,
  memberId: memberId
})

export const addCollectiveDishNameToStore = (enteredValue, index) => ({
  type: "ADD_COLLECTIVE_NAME",
  dishName: enteredValue,
  dishId: index,
})

export const addCollectiveDishPriceToStore = (enteredValue, index) => ({
  type: "ADD_COLLECTIVE_PRICE",
  dishPrice: enteredValue,
  dishId: index,
})