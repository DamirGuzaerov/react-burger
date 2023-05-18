import styles from './order-item.module.css'
import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {useAppSelector} from "../../utils/hooks/useAppSelector";
import {getIngredientsByIds} from "../../services/selectors/ingredients";
import {IIngredient} from "../../utils/types";

interface IOrderCardProps {
		orderNumber: string,
		date: string,
		orderName: string,
		ingredientIds: string[]
}

export const OrderItem = ({orderNumber, date, orderName, ingredientIds}: IOrderCardProps): JSX.Element => {
		const ingredients = useAppSelector(state => getIngredientsByIds(state, ingredientIds))

		const renderIngredient = (ingredient: IIngredient, index: number): JSX.Element => {
				const ingredientsCount = ingredients.length
				if (index === 5 && ingredientsCount > 5) {
						const remaining = ingredientsCount - index
						return (
								<div key={ingredient._id} className={styles.ingredient} style={{left: 46 * index}}>
										<span
												className={`${styles['ingredients-counter']} text text_type_main-default`}>+{remaining}
										</span>
										<img className={`${styles.image} ${styles['image-last']}`} src={ingredient.image_mobile}
												 alt={ingredient.name}/>
								</div>
						)
				}

				return (
						<div key={ingredient._id} className={styles.ingredient} style={{left: 46 * index}}>
								<img className={styles.image} src={ingredient.image_mobile} alt={ingredient.name}/>
						</div>
				)
		}

		return (
				<div className={`${styles.wrapper} p-6`}>
						<header className={styles.header}>
								<span className={'text text_type_digits-default'}>#{orderNumber}</span>
								<span className={'text text_type_main-default text_color_inactive'}>
									<FormattedDate date={new Date(date)}/>
								</span>
						</header>
						<p className={'text text_type_main-medium pt-6 pb-6'}>{orderName}</p>
						<div className={styles['ingredients-wrapper']}>
								{ingredients && ingredients.slice(0, 6).map((el: IIngredient, index: number) => renderIngredient(el, index))}
						</div>
				</div>
		)
}