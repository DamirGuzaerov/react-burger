import {OrderList} from "../../../components/order/order-list/order-list";
import {useAppDispatch} from "../../../utils/hooks/useAppDispatch";
import {useDisclosure} from "../../../utils/hooks/useDisclosure";
import {IOrder} from "../../../utils/types";
import {removeCurrentOrder, setCurrentOrder} from "../../../services/slices/order";
import {useLocation, useNavigate} from "react-router-dom";

export const OrdersHistoryPage = (): JSX.Element => {
		const dispatch = useAppDispatch()
		const location = useLocation()
		const navigate = useNavigate()

		const {open} = useDisclosure(false,
				{
						onOpen: (order: IOrder) => {
								dispatch(setCurrentOrder(order))
								navigate(`${order._id}`, {state: {background: location, modalTitle: order.number}});
						},
						onClose: () => {
								dispatch(removeCurrentOrder())
						}
				})

		return (
				<OrderList orderClick={open}/>
		)
}