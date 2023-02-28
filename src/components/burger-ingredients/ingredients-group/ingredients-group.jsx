import PropTypes from "prop-types";
import {IngredientItem} from "../ingredient-item/ingredient-item";
import ingredientsGroupStyles from "./ingredients-group.module.css";

const IngredientsGroup = ({title, ingredients}) => {
    return (
        <div className={`${ingredientsGroupStyles['ingredients-group']} pt-10 pb-10`}>
            <h2 className={'text text_type_main-medium'}>
                {title}
            </h2>
            <div className={`${ingredientsGroupStyles['ingredients-list']} pl-4 pr-2 pt-6`}>
                {ingredients.map(el => {
                    return (<IngredientItem ingredient={el}/>)
                })}
            </div>
        </div>)
}

IngredientsGroup.propTypes = {
    title: PropTypes.string, ingredients: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string,
        "name": PropTypes.string,
        "type": PropTypes.string,
        "proteins": PropTypes.number,
        "fat": PropTypes.number,
        "carbohydrates": PropTypes.number,
        "calories": PropTypes.number,
        "price": PropTypes.number,
        "image": PropTypes.string,
        "image_mobile": PropTypes.string,
        "image_large": PropTypes.string,
        "__v": PropTypes.number
    }))
}

export default IngredientsGroup