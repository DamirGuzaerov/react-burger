import styles from './order-item.module.css'
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";
import {getIngredientsByIds} from "../../../services/selectors/ingredients";
import {IIngredient, IOrder} from "../../../utils/types";
import {useMemo} from "react";
import {IngredientImage} from "../ingredient-image/ingredient-image";
import {getOrderStatusText} from "../../../utils/functions";

interface IOrderCardProps {
		order: IOrder,
		statusVisible?: boolean,
		onClick: (order: IOrder) => void,
}

export const OrderItem = ({order, statusVisible = false, onClick}: IOrderCardProps): JSX.Element => {
		const ingredients = useAppSelector(state => getIngredientsByIds(state, order.ingredients))

		const totalPrice = useMemo(() => {
				return ingredients.reduce((acc, curr) => {
						return acc + curr.count * curr.ingredient.price
				}, 0)
		}, [ingredients])

		const handleClick = () => {
				if (typeof onClick === 'function') {
						onClick(order)
				}
		}

		const orderStatus = useMemo(() => {
				if (order && statusVisible)
						return getOrderStatusText(order.status)
		}, [order,statusVisible])

		const renderIngredient = (ingredient: IIngredient, index: number): JSX.Element => {
				const ingredientsCount = ingredients.length
				if (index === 5 && ingredientsCount > 5) {
						const remaining = ingredientsCount - index
						return (
								<div key={ingredient._id} className={styles.ingredient} style={{left: 48 * index}}>
										<IngredientImage remaining={remaining} opacity={0.3} src={ingredient.image_mobile}/>
								</div>
						)
				}

				return (
						<div key={ingredient._id} className={styles.ingredient} style={{left: 48 * index}}>
								<IngredientImage src={ingredient.image_mobile}/>
						</div>
				)
		}

		return (
				<div className={`${styles.wrapper} p-6`} onClick={handleClick}>
						<header className={styles.header}>
								<span className={'text text_type_digits-default'}>#{order.number}</span>
								<span className={'text text_type_main-default text_color_inactive'}>
									<FormattedDate date={new Date(order.createdAt)}/>
								</span>
						</header>
						<p className={'text text_type_main-medium pt-6 mb-2'}>{order.name}</p>
						{orderStatus && statusVisible && <>
                <p className={`text text_type_main-default text_color_${orderStatus.color} mb-6`}>{orderStatus.text}</p>
            </>}
						<div className={styles['ingredients-wrapper']}>
								<div className={styles.ingredients}>
										{ingredients && ingredients.slice(0, 6).map((el, index) => renderIngredient(el.ingredient, index))}
								</div>
								<div className={styles.total}>
										<span className={'text text_type_digits-default'}>{totalPrice}</span>
										<CurrencyIcon type="primary"/>
								</div>
						</div>
				</div>
		)
}