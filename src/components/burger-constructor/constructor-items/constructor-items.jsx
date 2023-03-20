import constructorItemsStyles from "./constructor-items.module.css";
import {useDispatch, useSelector} from "react-redux";
import ConstructorItem from "../constructor-item/constructor-item";
import {useCallback} from "react";
import {sortIngredients} from "../../../services/slices/constructor";

const ConstructorItems = () => {
    const ingredients = useSelector(state => state.burger_constructor.ingredients)
    const dispatch = useDispatch()
    const moveIngredients = useCallback((dragIndex, hoverIndex) => {
        dispatch(sortIngredients({toIndex: hoverIndex, fromIndex: dragIndex}))
    }, [dispatch])

    return (
        <ol className={`${constructorItemsStyles['scroll-list']} custom-scroll`}>
            {ingredients.length > 0 && ingredients.map((ingredient,index) => {
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
