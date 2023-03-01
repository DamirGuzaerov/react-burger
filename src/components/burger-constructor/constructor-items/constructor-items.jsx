import constructorItemsStyles from "./constructor-items.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ConstructorItems = ({ingredients}) => {
    return (
        <ol className={`${constructorItemsStyles['scroll-list']} custom-scroll`}>
            {ingredients.length > 0 && ingredients.map(ingredient => {
                return (
                    <li className={constructorItemsStyles['draggable-element']}>
                        <div className={`${constructorItemsStyles.icon} mr-2`}>
                            <DragIcon type="primary"/>
                        </div>
                        <ConstructorElement
                            key={ingredient._id}
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
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired,
        "price": PropTypes.number.isRequired,
        "image": PropTypes.string.isRequired,
    })).isRequired
}

export default ConstructorItems
