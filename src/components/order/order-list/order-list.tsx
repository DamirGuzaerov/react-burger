import {OrderItem} from "../order-item/order-item";
import styles from './order-list.module.css'
import {IOrder} from "../../../utils/types";

interface IOrderListProps {
		orders: IOrder[],
		statusVisible?: boolean
		orderClick: (order: IOrder) => void
}

export const OrderList = ({orders, statusVisible = false, orderClick}: IOrderListProps): JSX.Element => {
		return (
				<section className={`${styles.wrapper} custom-scroll`}>
						<ul className={`${styles.orders}`}>
								{orders && orders.map(el => (
										<li key={el._id} className={styles.item}>
												<OrderItem statusVisible={statusVisible} onClick={orderClick} order={el}/>
										</li>
								))}
						</ul>
				</section>
		)
}