import {Order} from "../../components/order/order";
import styles from './order-page.module.css'

export const OrderPage = (): JSX.Element => {
		return (
				<section className={styles.wrapper}>
						<Order/>
				</section>
		)
}