import {OrderList} from "../../../components/order/order-list/order-list";
import {useDisclosure} from "../../../utils/hooks/useDisclosure";
import {IOrder} from "../../../utils/types";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";

export const OrdersHistoryPage = (): JSX.Element => {
		const location = useLocation()
		const navigate = useNavigate()

		const orders = useAppSelector(state => state.userOrders.orders)

		const {open} = useDisclosure(false,
				{
						onOpen: (order: IOrder) => {
								navigate(`${order._id}`, {state: {background: location, modalTitle: order.number}});
						}
				})

		return (
				<OrderList orders={orders} orderClick={open}/>
		)
}