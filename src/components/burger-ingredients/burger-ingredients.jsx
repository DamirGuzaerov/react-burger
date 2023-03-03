import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useState} from "react";
import burgerIngredientsStyles from './burger-ingredients.module.css'
import PropTypes from "prop-types";
import IngredientsGroup from "./ingredients-group/ingredients-group";
import {ingredientType} from "../../utils/types";

const BurgerIngredients = ({ingredients}) => {
    const [currentTab, setCurrentTab] = useState('bun')
    return (
        <section className={burgerIngredientsStyles['burger-ingredients']}>
            <div className={`${burgerIngredientsStyles.tabs} mb-10`}>
                <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrentTab}>
                <span className={'text text_type_main-default'}>
                    Булки
                </span>
                </Tab>
                <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrentTab}>
                <span className={'text text_type_main-default'}>
                    Соусы
                </span>
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
                <span className={'text text_type_main-default'}>
                    Начинки
                </span>
                </Tab>
            </div>
            <div className={`${burgerIngredientsStyles['ingredients-groups']} custom-scroll`}>
                <IngredientsGroup title='Булки'
                                  ingredients={ingredients.filter(el => el.type === 'bun')}/>
                <IngredientsGroup title='Соусы'
                                  ingredients={ingredients.filter(el => el.type === 'sauce')}/>
                <IngredientsGroup title='Начинка'
                                  ingredients={ingredients.filter(el => el.type === 'main')}/>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired
}

export default BurgerIngredients