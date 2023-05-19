import {OrderItem} from "../order-item/order-item";
import styles from './order-list.module.css'
import {IOrder} from "../../../utils/types";

const ingredientsId = [
		"643d69a5c3f7b9001cfa093c",
		"643d69a5c3f7b9001cfa0941",
		"643d69a5c3f7b9001cfa093e",
		"643d69a5c3f7b9001cfa0942",
		"643d69a5c3f7b9001cfa0940",
		"643d69a5c3f7b9001cfa093d",
		"643d69a5c3f7b9001cfa0947",
		"643d69a5c3f7b9001cfa094a"
]

interface IOrderListProps {
		orderClick: (order: IOrder) => void
}

export const OrderList = ({orderClick}: IOrderListProps): JSX.Element => {
		return (
				<section className={`${styles.wrapper} custom-scroll`}>
						<ul className={`${styles.orders}`}>
								{[143243, 864223, 647980, 186624].map(el => (
										<li className={styles.item}>
												<OrderItem onClick={orderClick} order={{
														ingredients: ingredientsId,
														createdAt: '2022-10-10T17:33:32.877Z',
														updatedAt: '2022-10-10T17:33:32.877Z',
														number: el,
														_id: '643d69a5c3f7b9001cfa093d',
														status: 'done'
												}}></OrderItem>
										</li>
								))}
						</ul>
				</section>
		)
}