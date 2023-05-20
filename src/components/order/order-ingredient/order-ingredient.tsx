import {IngredientImage} from "../ingredient-image/ingredient-image";
import styles from './order-ingredient.module.css'
import {IIngredient} from "../../../utils/types";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

interface IOrderIngredientProps {
		ingredient: IIngredient,
		count: number
}

export const OrderIngredient = ({ingredient, count}: IOrderIngredientProps) => {
		return (
				<div className={`${styles.wrapper} pr-6`}>
						{ingredient && <>
								<div className={styles.ingredient}>
                    <div className={'mr-4'}>
                        <IngredientImage src={ingredient.image}/>
                    </div>
                    <p className={'text text_type_main-default'}>{ingredient.name}</p>
								</div>
                <div className={styles.total}>
                    <span className={'text text_type_digits-default'}>{count} x 560</span>
                    <CurrencyIcon type="primary"/>
                </div>
            </>}
				</div>
		)
}