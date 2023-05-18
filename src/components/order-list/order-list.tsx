import {OrderItem} from "../order-card/order-item";
import styles from './order-list.module.css'
const ingredientsId=[
		"643d69a5c3f7b9001cfa093c",
		"643d69a5c3f7b9001cfa0941",
		"643d69a5c3f7b9001cfa093e",
		"643d69a5c3f7b9001cfa0942",
		"643d69a5c3f7b9001cfa0940",
		"643d69a5c3f7b9001cfa093d",
		"643d69a5c3f7b9001cfa0947",
		"643d69a5c3f7b9001cfa094a"
]
export const OrderList = (): JSX.Element => {
		return (
				<section className={`${styles.wrapper} custom-scroll`}>
						<ul className={`${styles.orders}`}>
								{[143243, 864223, 647980, 186624].map(el => (
										<li className={styles.item}>
												<OrderItem date={'2022-10-10T17:33:32.877Z'} ingredientIds={ingredientsId} orderName={el.toString()} orderNumber={el.toString()}/>
										</li>
								))}
						</ul>
				</section>
		)
}