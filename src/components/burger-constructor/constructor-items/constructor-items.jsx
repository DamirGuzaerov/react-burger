import constructorItemsStyles from "./constructor-items.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";

const ConstructorItems = ({ingredients}) => {
    return (
        <ol className={`${constructorItemsStyles['scroll-list']} custom-scroll`}>
            {ingredients.length > 0 && ingredients.map(ingredient => {
                return (
                    <li
                        key={ingredient._id}
                        className={constructorItemsStyles['draggable-element']}>
                        <div className={`${constructorItemsStyles.icon} mr-2`}>
                            <DragIcon type="primary"/>
                        </div>
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
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
