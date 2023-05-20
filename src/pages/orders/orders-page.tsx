import styles from './orders-page.module.css'
import {OrderList} from "../../components/order/order-list/order-list";
import {useDisclosure} from "../../utils/hooks/useDisclosure";
import {IOrder} from "../../utils/types";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../utils/hooks/useAppSelector";
import {getDoneOrders, getInProgressOrders} from "../../services/selectors/orders";
import {useEffect} from "react";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch";
import {wsClose, wsOpen} from '../../services/slices/orders/actions';

export const OrdersPage = (): JSX.Element => {
		const location = useLocation()
		const navigate = useNavigate()

		const dispatch = useAppDispatch()

		const {orders, total, totalToday} = useAppSelector(state => state.orders)
		const doneOrders = useAppSelector(getDoneOrders)
		const inProgressOrders = useAppSelector(getInProgressOrders)

		useEffect(()=>{
				dispatch(wsOpen())
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
				<section className={styles.wrapper}>
						<div className={styles.orders}>
								<h1 className={'text text_type_main-large mb-5 pt-10'}>Лента заказов</h1>
								<OrderList orders={orders} orderClick={open}/>
						</div>
						<div className={`${styles['orders-info']} mt-25 custom-scroll`}>
								<div className={styles.panel}>
										<div className={`${styles['orders-status-wrapper']} custom-scroll`}>
												<p className={'text text_type_main-medium mb-6'}>Готовы:</p>
												<ul className={`${styles['order-numbers']} text text_type_digits-default text_color_success`}>
														{doneOrders && doneOrders.map(el => (
																<li key={el._id+el.number} className={styles['order-number']}>{el.number}</li>
														))}
												</ul>
										</div>
										<div className={`${styles['orders-status-wrapper']} custom-scroll`}>
												<p className={'text text_type_main-medium mb-6'}>В работе:</p>
												<ul className={`${styles['order-numbers']} text text_type_digits-default text_color_primary`}>
														{inProgressOrders && inProgressOrders.map(el => (
																<li key={el._id+el.number} className={styles['order-number']}>{el.number}</li>
														))}
												</ul>
										</div>
								</div>
								<div>
										<p className={'text text_type_main-medium'}>
												Выполенно за все время:
										</p>
										<p className={`${styles['orders-count']} text text_type_digits-large`}>{total}</p>
								</div>
								<div>
										<p className={'text text_type_main-medium'}>
												Выполенно за сегодня:
										</p>
										<p className={`${styles['orders-count']} text text_type_digits-large`}>{totalToday}</p>
								</div>
						</div>
				</section>
		)
}