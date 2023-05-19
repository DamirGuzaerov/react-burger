import styles from './order-item.module.css'
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {useAppSelector} from "../../utils/hooks/useAppSelector";
import {getIngredientsByIds} from "../../services/selectors/ingredients";
import {IIngredient} from "../../utils/types";
import {useMemo} from "react";

interface IOrderCardProps {
		orderNumber: string,
		date: string,
		orderName: string,
		ingredientIds: string[],
		onClick: () => void
}

export const OrderItem = ({orderNumber, date, orderName, ingredientIds, onClick}: IOrderCardProps): JSX.Element => {
		const ingredients = useAppSelector(state => getIngredientsByIds(state, ingredientIds))
		const totalPrice = useMemo(() => {
				return ingredients.reduce((acc, curr) => {
						if (curr.type === 'bun') return acc + 2 * curr.price
						return acc + curr.price
				}, 0)
		}, [ingredients])

		const renderIngredient = (ingredient: IIngredient, index: number): JSX.Element => {
				const ingredientsCount = ingredients.length
				if (index === 5 && ingredientsCount > 5) {
						const remaining = ingredientsCount - index
						return (
								<div key={ingredient._id} className={styles.ingredient} style={{left: 48 * index}}>
										<span
												className={`${styles['ingredients-counter']} text text_type_main-default`}>+{remaining}
										</span>
										<img className={`${styles.image} ${styles['image-last']}`} src={ingredient.image_mobile}
												 alt={ingredient.name}/>
								</div>
						)
				}

				return (
						<div key={ingredient._id} className={styles.ingredient} style={{left: 48 * index}}>
								<img className={styles.image} src={ingredient.image_mobile} alt={ingredient.name}/>
						</div>
				)
		}

		return (
				<div className={`${styles.wrapper} p-6`} onClick={onClick}>
						<header className={styles.header}>
								<span className={'text text_type_digits-default'}>#{orderNumber}</span>
								<span className={'text text_type_main-default text_color_inactive'}>
									<FormattedDate date={new Date(date)}/>
								</span>
						</header>
						<p className={'text text_type_main-medium pt-6 pb-6'}>{orderName}</p>
						<div className={styles['ingredients-wrapper']}>
								<div className={styles.ingredients}>
										{ingredients && ingredients.slice(0, 6).map((el: IIngredient, index: number) => renderIngredient(el, index))}
								</div>
								<div className={styles.total}>
										<span className={'text text_type_digits-default'}>{totalPrice}</span>
										<CurrencyIcon type="primary"/>
								</div>
						</div>
				</div>
		)
}