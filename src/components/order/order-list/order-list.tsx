import {OrderItem} from "../order-item/order-item";
import styles from './order-list.module.css'
import {IOrder} from "../../../utils/types";

interface IOrderListProps {
		orders: IOrder[],
		orderClick: (order: IOrder) => void
}

export const OrderList = ({orders, orderClick}: IOrderListProps): JSX.Element => {
		return (
				<section className={`${styles.wrapper} custom-scroll`}>
						<ul className={`${styles.orders}`}>
								{orders && orders.map(el => (
										<li key={el._id} className={styles.item}>
												<OrderItem onClick={orderClick} order={el}/>
										</li>
								))}
						</ul>
				</section>
		)
}