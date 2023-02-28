import ingredientItemStyles from './ingredient-item.module.css';
import PropTypes from "prop-types";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientItem = ({ingredient}) => {
    return (
        <section className={ingredientItemStyles['ingredient-item']}>
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
        </section>
    )
}

IngredientItem.propTypes = {
    ingredient: PropTypes.shape({
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
    })
}