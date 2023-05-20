import {RootState} from "../store";

export const getOrderById = (state:RootState, id: string | undefined) => {
  return state.orders.orders.find(el=>el._id === id)
}

