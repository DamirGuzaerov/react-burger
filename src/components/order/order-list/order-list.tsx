import {OrderItem} from "../order-item/order-item";
import styles from './order-list.module.css'
import {IOrder} from "../../../utils/types";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";


interface IOrderListProps {
		orderClick: (order: IOrder) => void
}

export const OrderList = ({orderClick}: IOrderListProps): JSX.Element => {
		const orders = useAppSelector(state => state.orders.orders)
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