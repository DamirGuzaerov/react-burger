import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import {useState} from "react";
import burgerIngredientsStyles from './burger-ingredients.module.css'
import PropTypes from "prop-types";
import IngredientsGroup from "./ingredients-group/ingredients-group";

const BurgerIngredients = ({ingredients}) => {
    const [currentTab, setCurrentTab] = useState('bun')
    return (
        <section className={burgerIngredientsStyles['burger-ingredients']}>
            <div className={burgerIngredientsStyles.tabs}>
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
    ingredients: PropTypes.arrayOf(PropTypes.shape({
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

export default BurgerIngredients