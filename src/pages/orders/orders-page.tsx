import styles from './orders-page.module.css'
import {OrderList} from "../../components/order/order-list/order-list";
import {useDisclosure} from "../../utils/hooks/useDisclosure";
import {IOrder} from "../../utils/types";
import {useLocation, useNavigate} from "react-router-dom";

export const OrdersPage = (): JSX.Element => {
		const location = useLocation()
		const navigate = useNavigate()

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
								<OrderList orderClick={open}/>
						</div>
						<div className={`${styles['orders-info']} mt-25 custom-scroll`}>
								<div className={styles.panel}>
										<div>
												<p className={'text text_type_main-medium mb-6'}>Готовы:</p>
												<ul className={`${styles['order-numbers']} text text_type_digits-default text_color_success`}>
														<li className={styles['order-number']}>1</li>
														<li className={styles['order-number']}>2</li>
														<li className={styles['order-number']}>3</li>
														<li className={styles['order-number']}>4</li>
														<li className={styles['order-number']}>5</li>
														<li className={styles['order-number']}>6</li>
														<li className={styles['order-number']}>7</li>
														<li className={styles['order-number']}>8</li>
														<li className={styles['order-number']}>9</li>
														<li className={styles['order-number']}>10</li>
														<li className={styles['order-number']}>11</li>
														<li className={styles['order-number']}>12</li>
												</ul>
										</div>
										<div>
												<p className={'text text_type_main-medium mb-6'}>В работе:</p>
												<ul className={`${styles['order-numbers']} text text_type_digits-default text_color_primary`}>
														<li className={styles['order-number']}>1</li>
														<li className={styles['order-number']}>2</li>
														<li className={styles['order-number']}>3</li>
														<li className={styles['order-number']}>4</li>
														<li className={styles['order-number']}>5</li>
														<li className={styles['order-number']}>6</li>
														<li className={styles['order-number']}>7</li>
														<li className={styles['order-number']}>8</li>
														<li className={styles['order-number']}>9</li>
														<li className={styles['order-number']}>10</li>
														<li className={styles['order-number']}>11</li>
														<li className={styles['order-number']}>12</li>
												</ul>
										</div>
								</div>
								<div>
										<p className={'text text_type_main-medium'}>
												Выполенно за все время:
										</p>
										<p className={`${styles['orders-count']} text text_type_digits-large`}>65376</p>
								</div>
								<div>
										<p className={'text text_type_main-medium'}>
												Выполенно за сегодня:
										</p>
										<p className={`${styles['orders-count']} text text_type_digits-large`}>653</p>
								</div>
						</div>
				</section>
		)
}