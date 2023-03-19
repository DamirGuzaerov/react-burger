import constructorItemsStyles from "./constructor-items.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";
import {useDispatch, useSelector} from "react-redux";
import {deleteIngredient} from "../../../services/slices/constructor";

const ConstructorItems = () => {
    const dispatch = useDispatch()
    const ingredients = useSelector(state => state.burger_constructor.ingredients)
    const handleClose = (key) => {
        dispatch(deleteIngredient(key))
    }
    return (
        <ol className={`${constructorItemsStyles['scroll-list']} custom-scroll`}>
            {ingredients.length > 0 && ingredients.map(ingredient => {
                return (
                    <li
                        key={ingredient.key}
                        className={constructorItemsStyles['draggable-element']}>
                        <div className={`${constructorItemsStyles.icon} mr-2`}>
                            <DragIcon type="primary"/>
                        </div>
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                            handleClose={() => handleClose(ingredient.key)}
                        />
                    </li>)
            })}
        </ol>
    )
}

ConstructorItems.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired
}

export default ConstructorItems
