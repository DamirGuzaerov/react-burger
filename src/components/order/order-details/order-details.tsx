import orderDetailsStyles from './order-details.module.css'
import orderAcceptedImage from '../../../images/orderAcceptedImage.png'
import {useEffect} from "react";
import {clearConstructor} from "../../../services/slices/constructor";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";
import {useAppDispatch} from "../../../utils/hooks/useAppDispatch";
import {connect as connectUserOrders, disconnect} from "../../../services/slices/user-orders/actions";
import {USER_ORDERS_SERVER_URL} from "../../../utils/constants";
import loader from "../../../images/loader.svg";

const OrderDetails = (): JSX.Element => {
		const orderDetails = useAppSelector(state => state.orderDetails)
		const dispatch = useAppDispatch()
		const currentOrder = useAppSelector(state => state.userOrders.orders?state.userOrders.orders.at(0): null)

		useEffect(() => {
				if (currentOrder)
						dispatch(clearConstructor())
		}, [currentOrder, dispatch, orderDetails])

		useEffect(()=>{
				let token = localStorage.getItem('accessToken');
				dispatch(connectUserOrders(USER_ORDERS_SERVER_URL + `?token=${token}`))
				return () => {
						dispatch(disconnect())
				}
		},[dispatch])

		return (
				<div className={orderDetailsStyles.container}>
						<h1 className={`${orderDetailsStyles['order-id']} text text_type_digits-large mb-8 pt-4`}>
								{!currentOrder &&
                    <img className={'button-loader pl-10'} src={loader} alt="loading..."/>}
								{currentOrder && currentOrder.number}
						</h1>
						<span className={'text text_type_main-default'}>Идентификатор заказа</span>
						<img
								className={'pt-15 mb-15'}
								src={orderAcceptedImage}
								alt="Order accepted"/>
						<span className={'text text_type_main-small mb-2'}>Ваш заказ начали готовить</span>
						<span className={'text  text_type_main-small text_color_inactive mb-15'}>Дождитесь готовности на орбитальной станции</span>
				</div>
		)
}

export default OrderDetails