import ingredientItemStyles from './ingredient-item.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IIngredient} from "../../../utils/types";
import {useDrag} from "react-dnd";
import {v4 as uuid4} from 'uuid';
import {getItemsCount} from "../../../services/selectors/constructor";
import {Link, useLocation} from "react-router-dom";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";

interface IIngredientItemProps {
		ingredient: IIngredient,
		click: (ingredient: IIngredient) => void
}

export const IngredientItem = ({ingredient, click}: IIngredientItemProps): JSX.Element => {
		const location = useLocation()
		const count = useAppSelector(state => getItemsCount(state, {id: ingredient._id, type: ingredient.type}))

		const [, dragRef] = useDrag({
				type: "ingredient",
				item: {...ingredient, key: uuid4()},
		});

		const handleClick = () => {
				if (typeof click === 'function')
						click(ingredient)
		}

		return (
				<>
						<Link
								key={ingredient._id}
								to={`/ingredients/${ingredient._id}`}
								state={{background: location}}
								onClick={handleClick}
								className={'text_color_primary'}
						>
								<section
										ref={dragRef}
										className={ingredientItemStyles['ingredient-item']}
								>
										<img
												className={'pl-4 pr-4'}
												src={ingredient.image}
												alt={ingredient.name}/>
										<div className={`${ingredientItemStyles.price} pt-1 pb-1`}>
                <span className={'text text_type_main-default pr-2'}>
                    {ingredient.price}
                </span>
												<CurrencyIcon type={'primary'}/>
										</div>
										<span className={`${ingredientItemStyles.name} text text_type_main-small`}>
                        {ingredient.name}
                    </span>
										{count! > 0 &&
                        <Counter count={count!} size="default" extraClass={ingredientItemStyles.counter}/>
										}
								</section>
						</Link>

				</>
		)
}
