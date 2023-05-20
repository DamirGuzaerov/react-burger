import {OrderList} from "../../../components/order/order-list/order-list";
import {useDisclosure} from "../../../utils/hooks/useDisclosure";
import {IOrder} from "../../../utils/types";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";
import {useEffect} from "react";
import {connect as connectUserOrders, wsClose} from "../../../services/slices/user-orders/actions";
import {useAppDispatch} from "../../../utils/hooks/useAppDispatch";
import {USER_ORDERS_SERVER_URL} from "../../../utils/constants";

export const OrdersHistoryPage = (): JSX.Element => {
		const location = useLocation()
		const navigate = useNavigate()

		const dispatch = useAppDispatch()

		const orders = useAppSelector(state => state.userOrders.orders)

		useEffect(()=>{
				let token = localStorage.getItem('accessToken');
				dispatch(connectUserOrders(USER_ORDERS_SERVER_URL + `?token=${token}`))
				return () => {
						dispatch(wsClose())
				}
		},[dispatch])
		const {open} = useDisclosure(false,
				{
						onOpen: (order: IOrder) => {
								navigate(`${order._id}`, {state: {background: location, modalTitle: order.number}});
						}
				})

		return (
				<OrderList statusVisible orders={orders} orderClick={open}/>
		)
}