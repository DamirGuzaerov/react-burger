import PropTypes from "prop-types";
import {IngredientItem} from "../ingredient-item/ingredient-item";
import ingredientsGroupStyles from "./ingredients-group.module.css";
import {ingredientType} from "../../../utils/types";

const IngredientsGroup = ({title, ingredients}) => {
    return (
        <div className={`${ingredientsGroupStyles['ingredients-group']} pt-10 pb-10`}>
            <h2 className={'text text_type_main-medium'}>
                {title}
            </h2>
            <div className={`${ingredientsGroupStyles['ingredients-list']} pl-4 pr-2 pt-6`}>
                {ingredients.map(el => {
                    return (
                        <IngredientItem
                            key={el._id}
                            ingredient={el}
                        />)
                })}
            </div>
        </div>)
}

IngredientsGroup.propTypes = {
    title: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired
}

export default IngredientsGroup