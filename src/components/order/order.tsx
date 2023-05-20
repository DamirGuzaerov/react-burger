import {OrderIngredient} from "./order-ingredient/order-ingredient";
import {useAppSelector} from "../../utils/hooks/useAppSelector";
import styles from './order.module.css'
import {useMemo} from "react";
import {getOrderStatusText} from "../../utils/functions";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from "react-router-dom";
import {getOrderById} from "../../services/selectors/orders";
import {getIngredientsByIds} from "../../services/selectors/ingredients";

export const Order = (): JSX.Element => {
		const {id} = useParams()
		const order = useAppSelector(state => getOrderById(state, id))
		const ingredients = useAppSelector(state => order ? getIngredientsByIds(state, order.ingredients) : null)
		const orderStatus = useMemo(() => {
				if (order)
						return getOrderStatusText(order.status)
		}, [order])

		const totalPrice = useMemo(() => {
				return ingredients?.reduce((acc, curr) => {
						return acc + curr.count * curr.ingredient.price
				}, 0)
		}, [ingredients])

		return (
				<div className={styles.wrapper}>
						{order && <>
                <h3 className={'text text_type_main-medium mt-10'}>Black Hole Singularity острый бургер</h3>
								{orderStatus && <>
                    <p className={`text text_type_main-default text_color_${orderStatus.color} mb-15`}>{orderStatus.text}</p>
                </>}
                <p className={'text text_type_main-medium mb-6'}>Состав:</p>
                <ul className={`${styles.ingredientsList} custom-scroll mb-10`}>
										{ingredients && ingredients.map((el) => (
												<li key={el.ingredient._id} className={styles.ingredient}>
														<OrderIngredient ingredient={el.ingredient} count={el.count}/>
												</li>
										))}
                </ul>
                <footer className={`${styles.footer}`}>
                    <p className={'text text_type_main-default text_color_inactive'}>
                        <FormattedDate date={new Date(order.updatedAt)}/>
                    </p>
                    <div className={styles.total}>
                        <span className={'text text_type_digits-default'}>{totalPrice}</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                </footer>
            </>}
				</div>
		)
}