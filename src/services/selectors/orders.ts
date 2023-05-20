import {RootState} from "../store";
import {OrderStatus} from "../../utils/types";

export const getOrderById = (state:RootState, id: string | undefined) => {
  return state.orders.orders.find(el=>el._id === id)
}

export const getDoneOrders = (state:RootState) => {
  return state.orders.orders.filter(el=>el.status === OrderStatus.done)
}

export const getInProgressOrders = (state:RootState) => {
  return state.orders.orders.filter(el=>el.status === OrderStatus.pending)
}