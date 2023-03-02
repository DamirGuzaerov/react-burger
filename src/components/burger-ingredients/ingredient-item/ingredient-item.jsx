import ingredientItemStyles from './ingredient-item.module.css';
import PropTypes from "prop-types";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {ingredientType} from "../../../utils/types";

export const IngredientItem = ({ingredient}) => {
    const [count, setCount] = useState(0)
    return (
        <section
            className={ingredientItemStyles['ingredient-item']}
            onClick={() => setCount(count + 1)}
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
            {count > 0 &&
                <Counter count={count} size="default" extraClass={ingredientItemStyles.counter}/>
            }
        </section>
    )
}

IngredientItem.propTypes = {
    ingredient: PropTypes.shape(ingredientType).isRequired
}