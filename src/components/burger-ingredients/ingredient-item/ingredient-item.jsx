import ingredientItemStyles from './ingredient-item.module.css';
import PropTypes from "prop-types";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../../utils/types";
import {useDrag} from "react-dnd";
import {useEffect, useState} from "react";

export const IngredientItem = ({ingredient, click}) => {
    const [count,setCount] = useState(0)

    const [{didDrop}, dragRef] = useDrag({
        type: "ingredient",
        item: ingredient,
        collect: monitor => ({
            didDrop: monitor.getItem()?._id === ingredient._id && monitor.didDrop()
        })
    });

    const handleClick = () => {
        if (typeof click === 'function')
            click(ingredient)
    }

    useEffect(()=>{
        if(didDrop){
            setCount(count+1)
        }
    },[count, didDrop])

    return (
        <>
            <section
                ref={dragRef}
                className={ingredientItemStyles['ingredient-item']}
                onClick={handleClick}
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
        </>
    )
}

IngredientItem.propTypes = {
    ingredient: PropTypes.shape(ingredientType).isRequired,
    onClick: PropTypes.func
}