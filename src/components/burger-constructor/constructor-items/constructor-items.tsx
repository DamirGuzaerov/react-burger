import constructorItemsStyles from "./constructor-items.module.css";
import {useDispatch} from "react-redux";
import ConstructorItem from "../constructor-item/constructor-item";
import {useCallback} from "react";
import {sortIngredients} from "../../../services/slices/constructor";
import {IConstructorIngredient} from "../../../utils/types";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";

const ConstructorItems = (): JSX.Element => {
		const ingredients = useAppSelector(state => state.burger_constructor.ingredients)
		const dispatch = useDispatch()
		const moveIngredients = useCallback((dragIndex: number, hoverIndex: number) => {
				dispatch(sortIngredients({toIndex: hoverIndex, fromIndex: dragIndex}))
		}, [dispatch])

		return (
				<ol className={`${constructorItemsStyles['scroll-list']} custom-scroll`}>
						{ingredients.length > 0 && ingredients.map((ingredient: IConstructorIngredient, index: number) => {
								return (
										<li
												key={ingredient.key}
												className={constructorItemsStyles['draggable-element']}>
												<ConstructorItem ingredient={ingredient} index={index} handleMove={moveIngredients}/>
										</li>)
						})}
				</ol>
		)
}

export default ConstructorItems
