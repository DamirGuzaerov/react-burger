import {OrderList} from "../../../components/order/order-list/order-list";
import {useDisclosure} from "../../../utils/hooks/useDisclosure";
import {IOrder} from "../../../utils/types";
import {useLocation, useNavigate} from "react-router-dom";

export const OrdersHistoryPage = (): JSX.Element => {
		const location = useLocation()
		const navigate = useNavigate()

		const {open} = useDisclosure(false,
				{
						onOpen: (order: IOrder) => {
								navigate(`${order._id}`, {state: {background: location, modalTitle: order.number}});
						}
				})

		return (
				<OrderList orderClick={open}/>
		)
}